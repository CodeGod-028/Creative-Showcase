# Creative Showcase

Creative Showcase is a full-stack web application that allows users to register, authenticate, upload creative artworks, and view them in a shared gallery. The project demonstrates secure authentication, file uploads, and frontend-backend integration.

---

## Tech Stack

### Backend
- FastAPI
- MongoDB
- PyMongo
- JWT Authentication
- Argon2 Password Hashing

### Frontend
- React (Vite)
- Axios
- React Router
- Basic CSS for clean UI

---

## Features

- User registration and login
- Secure password hashing
- JWT-based authentication
- Protected routes
- Image upload functionality
- Static image serving
- Public gallery view
- Clean and minimal UI

---

## Project Structure

### Backend
<pre>
backend/
├── app/
│   ├── main.py
│   ├── auth.py
│   ├── database.py
│   ├── schemas.py
│   ├── config.py
│   └── __init__.py
├── uploads/
├── requirements.txt
└── .env
</pre>
### Frontend
<pre>
frontend/
├── src/
│   ├── api/
│   │   └── api.js
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Upload.jsx
│   │   └── Gallery.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── package.json
├── vite.config.js
└── README.md
</pre>
---

## Backend Setup

1. Create a virtual environment
```bash
python -m venv venv
venv\Scripts\activate
```

2. Install dependencies
```bash
pip install -r requirements.txt
```

3. Create a .env file
```bash
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
ALGORITHM=HS256
```

4. Run the backend server
```bash
uvicorn app.main:app --reload
```

5.Backend runs at: "http://127.0.0.1:8000"

## Frontend Setup

1. Install dependencies
```bash
npm install
```

2. Start the development server
```bash
npm run dev
```

3. Frontend runs at: "http://localhost:5173"


## API Endpoints
Authentication

-POST /auth/register – Register a new user
-POST /auth/login – Login and receive JWT token

Posts
-POST /posts – Upload a creative post (Protected)
-GET /posts – Fetch all creative posts

Static Files
-/uploads/{filename} – Access uploaded images

## Usage Flow
1. Register a new user
2. Login with registered credentials
3. Upload an artwork with title and description
4. View uploaded artworks in the gallery
