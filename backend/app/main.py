from fastapi import FastAPI, HTTPException, UploadFile, File, Depends, Form
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from app.schemas import UserRegister, UserLogin
from app.database import user_collection, post_collection
from app.auth import hash_password, verify_password, create_access_token, get_current_user
import shutil
import os

app = FastAPI(title="Creative Showcase API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.mount("/uploads", StaticFiles(directory="uploads"), name="uploads")


@app.get("/")
def health_check():
    return {"status": "Backend running"}


@app.post("/auth/register")
def register(user: UserRegister):
    if user_collection.find_one({"email": user.email}):
        raise HTTPException(status_code=400, detail="User already exists")

    user_collection.insert_one({
        "email": user.email,
        "password": hash_password(user.password)
    })

    return {"message": "User registered successfully"}


@app.post("/auth/login")
def login(user: UserLogin):
    db_user = user_collection.find_one({"email": user.email})

    if not db_user or not verify_password(user.password, db_user["password"]):
        raise HTTPException(status_code=401, detail="Invalid credentials")

    token = create_access_token(db_user["email"])
    return {
        "access_token": token,
        "token_type": "bearer"
    }


@app.post("/posts")
def create_post(
    title: str = Form(...),
    description: str = Form(None),
    image: UploadFile = File(...),
    user: str = Depends(get_current_user)
):
    os.makedirs("uploads", exist_ok=True)

    file_path = f"uploads/{image.filename}"
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(image.file, buffer)

    post_collection.insert_one({
        "title": title,
        "description": description,
        "image_url": file_path,
        "user": user
    })

    return {"message": "Creative post uploaded successfully"}

@app.get("/posts")
def get_posts():
    posts = list(post_collection.find({}, {"_id": 0}))
    return posts
