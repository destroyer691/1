import asyncio
from motor.motor_asyncio import AsyncIOMotorClient
import os
from dotenv import load_dotenv
from pathlib import Path
import uuid
from datetime import datetime

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# Initial reviews data
initial_reviews = [
    {
        "id": str(uuid.uuid4()),
        "name": "Ramesh Kumar",
        "location": "Indore, MP",
        "rating": 5,
        "comment": "Bahut accha product hai. Mere wheat crop ki yield 20% badh gayi. Mitti bhi soft ho gayi hai.",
        "created_at": datetime.utcnow()
    },
    {
        "id": str(uuid.uuid4()),
        "name": "Suresh Patel",
        "location": "Ujjain, MP",
        "rating": 5,
        "comment": "Chemical fertilizer se accha result mila. Plants healthy aur strong hain. Highly recommended!",
        "created_at": datetime.utcnow()
    },
    {
        "id": str(uuid.uuid4()),
        "name": "Mahesh Singh",
        "location": "Dewas, MP",
        "rating": 5,
        "comment": "Price bhi reasonable hai aur quality bahut badhiya. Ab sirf Malva Organic ka khad hi use karunga.",
        "created_at": datetime.utcnow()
    }
]

async def seed_reviews():
    # Connect to MongoDB
    mongo_url = os.environ['MONGO_URL']
    client = AsyncIOMotorClient(mongo_url)
    db = client[os.environ['DB_NAME']]
    
    try:
        # Check if reviews already exist
        existing_count = await db.reviews.count_documents({})
        
        if existing_count > 0:
            print(f"Reviews already seeded. Found {existing_count} reviews in database.")
            return
        
        # Insert initial reviews
        result = await db.reviews.insert_many(initial_reviews)
        print(f"Successfully seeded {len(result.inserted_ids)} reviews!")
        
        # Print inserted reviews
        for review in initial_reviews:
            print(f"  - {review['name']} from {review['location']}: {review['rating']} stars")
    
    except Exception as e:
        print(f"Error seeding reviews: {e}")
    
    finally:
        client.close()

if __name__ == "__main__":
    asyncio.run(seed_reviews())
