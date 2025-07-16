from pathlib import Path
import sqlite3
from contextlib import contextmanager
from dotenv import load_dotenv
import os

# Load environment variables from .env file
load_dotenv()

# Get the database path from the .env file
DATABASE_PATH = Path(os.getenv("DATABASE_PATH", "app/db/cache.db"))

# Construct the absolute path based on the project's root directory
BASE_DIR = Path(__file__).resolve().parents[2]
DATABASE_PATH = BASE_DIR / DATABASE_PATH

@contextmanager
def get_db_connection():
    connection = sqlite3.connect(str(DATABASE_PATH))
    try:
        yield connection
    finally:
        connection.close()

def initialize_database():
    with get_db_connection() as conn:
        cursor = conn.cursor()
        cursor.execute("""
        CREATE TABLE IF NOT EXISTS cache (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            operation TEXT NOT NULL,
            input TEXT NOT NULL,
            result TEXT NOT NULL
        )
        """)
        conn.commit()

# Initialize the database on module load
initialize_database()
