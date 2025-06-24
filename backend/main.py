from fastapi import FastAPI
from routes import snippets
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins = ["http://localhost:3000"], # frontend origin
    allow_credentials = True,
    allow_methods = ["*"],
    allow_headers = ["*"],
)

app.include_router(snippets.router)