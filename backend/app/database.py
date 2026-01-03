from pymongo import MongoClient
from app.config import MONGO_URI

client = MongoClient(MONGO_URI)
db = client["creative_showcase_db"]

user_collection = db["users"]

from pymongo import MongoClient
from app.config import MONGO_URI

client = MongoClient(MONGO_URI)
db = client["creative_showcase_db"]

user_collection = db["users"]
post_collection = db["posts"]
