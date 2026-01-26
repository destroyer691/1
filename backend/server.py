from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, validator
from typing import List, Optional
import uuid
from datetime import datetime


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# ========== MODELS ==========

# Order Models
class OrderCreate(BaseModel):
    name: str
    mobile: str
    address: str
    quantity: int
    message: Optional[str] = ""

    @validator('mobile')
    def validate_mobile(cls, v):
        if not v.isdigit() or len(v) != 10:
            raise ValueError('Mobile number must be 10 digits')
        return v

    @validator('quantity')
    def validate_quantity(cls, v):
        if v < 1 or v > 100:
            raise ValueError('Quantity must be between 1 and 100')
        return v

class Order(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    mobile: str
    address: str
    quantity: int
    message: str = ""
    total_amount: int
    status: str = "pending"
    created_at: datetime = Field(default_factory=datetime.utcnow)

# Contact Models
class ContactCreate(BaseModel):
    name: str
    mobile: str
    email: Optional[str] = ""
    message: str

    @validator('mobile')
    def validate_mobile(cls, v):
        if not v.isdigit() or len(v) != 10:
            raise ValueError('Mobile number must be 10 digits')
        return v

class Contact(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    mobile: str
    email: str = ""
    message: str
    created_at: datetime = Field(default_factory=datetime.utcnow)

# Review Models
class ReviewCreate(BaseModel):
    name: str
    location: str
    rating: int
    comment: str

    @validator('rating')
    def validate_rating(cls, v):
        if v < 1 or v > 5:
            raise ValueError('Rating must be between 1 and 5')
        return v

class Review(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    location: str
    rating: int
    comment: str
    created_at: datetime = Field(default_factory=datetime.utcnow)


# ========== ROUTES ==========

@api_router.get("/")
async def root():
    return {"message": "Malva Organic API"}

# Orders Endpoints
@api_router.post("/orders", response_model=dict)
async def create_order(order_input: OrderCreate):
    try:
        # Calculate total amount (₹599 per 50kg bag)
        PRICE_PER_BAG = 599
        total_amount = PRICE_PER_BAG * order_input.quantity
        
        order_dict = order_input.dict()
        order_obj = Order(**order_dict, total_amount=total_amount)
        
        await db.orders.insert_one(order_obj.dict())
        
        return {
            "success": True,
            "order_id": order_obj.id,
            "message": "Order placed successfully! We will contact you soon.",
            "total_amount": total_amount
        }
    except Exception as e:
        logger.error(f"Error creating order: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@api_router.get("/orders", response_model=List[Order])
async def get_orders():
    try:
        orders = await db.orders.find().sort("created_at", -1).to_list(1000)
        return [Order(**order) for order in orders]
    except Exception as e:
        logger.error(f"Error fetching orders: {e}")
        raise HTTPException(status_code=500, detail=str(e))

# Contact Endpoints
@api_router.post("/contacts", response_model=dict)
async def create_contact(contact_input: ContactCreate):
    try:
        contact_dict = contact_input.dict()
        contact_obj = Contact(**contact_dict)
        
        await db.contacts.insert_one(contact_obj.dict())
        
        return {
            "success": True,
            "contact_id": contact_obj.id,
            "message": "Message sent successfully! We will contact you soon."
        }
    except Exception as e:
        logger.error(f"Error creating contact: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@api_router.get("/contacts", response_model=List[Contact])
async def get_contacts():
    try:
        contacts = await db.contacts.find().sort("created_at", -1).to_list(1000)
        return [Contact(**contact) for contact in contacts]
    except Exception as e:
        logger.error(f"Error fetching contacts: {e}")
        raise HTTPException(status_code=500, detail=str(e))

# Reviews Endpoints
@api_router.get("/reviews", response_model=List[Review])
async def get_reviews():
    try:
        reviews = await db.reviews.find().sort("created_at", -1).to_list(100)
        return [Review(**review) for review in reviews]
    except Exception as e:
        logger.error(f"Error fetching reviews: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@api_router.post("/reviews", response_model=dict)
async def create_review(review_input: ReviewCreate):
    try:
        review_dict = review_input.dict()
        review_obj = Review(**review_dict)
        
        result = await db.reviews.insert_one(review_obj.dict())
        
        return {
            "success": True,
            "review_id": review_obj.id,
            "message": "Review added successfully!"
        }
    except Exception as e:
        logger.error(f"Error creating review: {e}")
        raise HTTPException(status_code=500, detail=str(e))


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()