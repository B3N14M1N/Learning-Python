import uvicorn
from contextlib import asynccontextmanager

from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles

from app.api import routes
from app.db.database import db_connector


@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup: initialize the database before serving requests
    await db_connector.initialize_database()
    yield


app = FastAPI(lifespan=lifespan)


# Include API routes
app.include_router(routes.router)


# Set up templates and static files
templates = Jinja2Templates(directory="templates")
app.mount("/static", StaticFiles(directory="static"), name="static")


@app.get("/", response_class=HTMLResponse)
def read_root(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})


if __name__ == "__main__":
    uvicorn.run("app.main:app", host="127.0.0.1", port=8000, reload=True)
