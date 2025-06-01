from fastapi import FastAPI
from routes import snippets

app = FastAPI()

app.include_router(snippets.router)