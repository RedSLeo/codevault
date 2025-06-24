from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from db import SessionLocal
from models import Snippet
from schemas import SnippetCreate, SnippetOut

router = APIRouter(prefix="/snippets")

# Dependency to get DB session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/", response_model=list[SnippetOut])
def get_snippets(db: Session = Depends(get_db)):
    return db.query(Snippet).all()

@router.post("/", response_model=SnippetOut)
def create_snippet(snippet: SnippetCreate, db: Session = Depends(get_db)):
    new_snippet = Snippet(**snippet.model_dump())
    db.add(new_snippet)
    db.commit()
    db.refresh(new_snippet)
    return new_snippet

@router.get("/{snippet_id}", response_model=SnippetOut)
def read_snippet(snippet_id: int, db: Session = Depends(get_db)):
    snippet = db.query(Snippet).get(snippet_id)
    if not snippet:
        raise HTTPException(status_code = 404, detail = "Snippet not found")
    return snippet
    

@router.put("/{snippet_id}", response_model = SnippetOut)
def update_snippet(snippet_id: int, updated: SnippetCreate, db: Session = Depends(get_db)):
    snippet = db.query(Snippet).get(snippet_id)
    if not snippet:
        raise HTTPException(status_code = 404, detail = "Snippet not found")
    snippet.title = updated.title
    snippet.content = updated.content
    db.commit()
    db.refresh(snippet)
    return snippet

@router.delete("/{id}")
def delete_snippet(id: int, db: Session = Depends(get_db)):
    snippet = db.query(Snippet).get(id)
    if snippet is None:
        raise HTTPException(status_code = 404, detail = "Snippet not found")
    db.delete(snippet)
    db.commit()
    return {"message": "Snippet no longer exist"}