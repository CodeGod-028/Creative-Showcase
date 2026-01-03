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

