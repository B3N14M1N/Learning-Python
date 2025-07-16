import sqlite3
from contextlib import contextmanager

DATABASE_PATH = "c:\\Applications\\Homework\\Python\\Project\\app\\db\\cache.db"

@contextmanager
def get_db_connection():
    connection = sqlite3.connect(DATABASE_PATH)
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
