from dotenv import load_dotenv
import os


from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

load_dotenv() # Load from .env file

DATABASE_URL = os.getenv("DATABASE_URL")

# DATABASE_URL = "postgresql://postgres:ZipporahReneeSatterfield#1%@localhost:5432/codevault"

# print("DB URL:", DATABASE_URL) # quick test

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(bind=engine)