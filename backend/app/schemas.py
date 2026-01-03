from pydantic import BaseModel, EmailStr
from pydantic import BaseModel
from typing import Optional


class UserRegister(BaseModel):
    email: EmailStr
    password: str

class UserLogin(BaseModel):
    email: EmailStr
    password: str

class CreativePost(BaseModel):
    title: str
    description: Optional[str] = None

