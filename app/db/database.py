from asyncio import open_connection
from pathlib import Path
import sqlite3
from dotenv import load_dotenv
import os
import aiosqlite

class DatabaseManager:
    def __init__(self, db_path: Path = None):
        if db_path is None:
            # Load environment variables from .env file
            load_dotenv()

            # Get the database path from the .env file
            DATABASE_PATH = Path(os.getenv("DATABASE_PATH", "app/db/cache.db"))

            # Construct the absolute path based on the project's root directory
            BASE_DIR = Path(__file__).resolve().parents[2]

            db_path = BASE_DIR / DATABASE_PATH

        self.db_path = db_path

    async def get_connection(self):
        self.conn = await aiosqlite.connect(str(self.db_path))
        return self.conn
    
    async def initialize_database(self):
        conn = await self.get_connection()
        try:
            await conn.execute("""
            CREATE TABLE IF NOT EXISTS cache (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                operation TEXT NOT NULL,
                input TEXT NOT NULL,
                result TEXT NOT NULL
            )
            """)
            await conn.commit()
        finally:
            await conn.close()
            
    async def cache_result(self, operation: str, input_data: str, result: str):
        conn = await self.get_connection()
        try:
            await conn.execute(
                "INSERT INTO cache (operation, input, result) VALUES (?, ?, ?)",
                (operation, input_data, result),
            )
            await conn.commit()
        finally:
            await conn.close()

    async def get_cached_result(self, operation: str, input_data: str):
        conn = await self.get_connection()
        try:
            cursor = await conn.execute(
                "SELECT result FROM cache WHERE operation = ? AND input = ?",
                (operation, input_data),
            )
            row = await cursor.fetchone()
            return row[0] if row else None
        finally:
            await conn.close()

# Usage
db_manager = DatabaseManager()
db_manager.initialize_database()
