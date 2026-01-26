# Malva Organic - Backend Integration Contracts

## Mock Data to Backend Mapping

### Mock Data Location
- `/app/frontend/src/mock.js` - Contains all mock data

### Collections Needed in MongoDB
1. **orders** - Store customer orders
2. **contacts** - Store contact form submissions
3. **reviews** - Store customer reviews (admin can add)

---

## API Endpoints

### 1. Orders API

**POST /api/orders**
- Create new order
- Request Body:
```json
{
  "name": "string",
  "mobile": "string (10 digits)",
  "address": "string",
  "quantity": "number",
  "message": "string (optional)"
}
```
- Response:
```json
{
  "success": true,
  "order_id": "string",
  "message": "Order placed successfully"
}
```

**GET /api/orders**
- Get all orders (for admin view - optional)
- Response: Array of order objects

---

### 2. Contact API

**POST /api/contacts**
- Create new contact inquiry
- Request Body:
```json
{
  "name": "string",
  "mobile": "string (10 digits)",
  "email": "string (optional)",
  "message": "string"
}
```
- Response:
```json
{
  "success": true,
  "contact_id": "string",
  "message": "Message sent successfully"
}
```

---

### 3. Reviews API

**GET /api/reviews**
- Get all reviews to display on homepage
- Response: Array of review objects
```json
[
  {
    "id": "string",
    "name": "string",
    "location": "string",
    "rating": "number (1-5)",
    "comment": "string"
  }
]
```

**POST /api/reviews** (Optional - for admin)
- Add new review
- Request Body:
```json
{
  "name": "string",
  "location": "string",
  "rating": "number",
  "comment": "string"
}
```

---

## Frontend Integration Steps

### Files to Update

1. **Home.jsx**
   - Remove mock import: `import { mockData } from '../mock'`
   - Fetch reviews from `/api/reviews` on component mount
   - Keep benefits and product data static (no backend needed)

2. **Order.jsx**
   - Remove mock import
   - Submit form data to `POST /api/orders`
   - Show success toast on submission
   - Keep product price/details static or fetch from API

3. **Contact.jsx**
   - Submit form to `POST /api/contacts`
   - Show success toast

4. **About.jsx**
   - Keep all data static (no backend needed)

---

## Static vs Dynamic Data

### Static (No Backend Needed)
- Product information (name, price, features)
- Benefits section
- About page content
- Company vision/mission

### Dynamic (Backend Required)
- Customer orders
- Contact form submissions
- Customer reviews (display from DB)

---

## MongoDB Models

### Order Schema
```python
{
  "id": "uuid",
  "name": "string",
  "mobile": "string",
  "address": "string",
  "quantity": "number",
  "message": "string",
  "total_amount": "number",
  "status": "pending/confirmed/delivered",
  "created_at": "datetime"
}
```

### Contact Schema
```python
{
  "id": "uuid",
  "name": "string",
  "mobile": "string",
  "email": "string",
  "message": "string",
  "created_at": "datetime"
}
```

### Review Schema
```python
{
  "id": "uuid",
  "name": "string",
  "location": "string",
  "rating": "number",
  "comment": "string",
  "created_at": "datetime"
}
```

---

## Integration Approach

1. Create MongoDB models in backend
2. Implement API endpoints in server.py
3. Seed initial reviews from mock data
4. Update frontend to use axios calls
5. Replace mock data with API responses
6. Handle loading states and errors
7. Test all forms and data display
