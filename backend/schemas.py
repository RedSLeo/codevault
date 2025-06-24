from pydantic import BaseModel

class SnippetCreate(BaseModel):
    title: str
    content: str

class SnippetOut(SnippetCreate):
    id: int

    class Config:
        orm_mode = True