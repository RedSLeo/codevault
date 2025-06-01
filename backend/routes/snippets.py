from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from db import SessionLocal
from models import Snippet

router = APIRouter(prefix="/snippets")

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/")
def get_snippets(db: Session = Depends(get_db)):
    return db.query(Snippet).all()