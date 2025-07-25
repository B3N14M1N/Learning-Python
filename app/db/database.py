import os
from pathlib import Path

import aiosqlite
from dotenv import load_dotenv


# Database connector and handler for SQLite using aiosqlite
class DatabaseConnector:
    def __init__(self, db_path: Path = None):
        if db_path is None:
            # Load environment variables from .env file
            load_dotenv()
            database_path = Path(os.getenv("DATABASE_PATH", "db/cache.db"))
            base_dir = Path(__file__).resolve().parents[2]
            db_path = base_dir / database_path

        self.db_path = db_path

    def get_connection(self):
        """Returns a new database connection context manager."""
        return aiosqlite.connect(str(self.db_path))

    async def initialize_database(self):
        async with self.get_connection() as conn:
            await conn.execute(
                """
                CREATE TABLE IF NOT EXISTS cache (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    operation TEXT NOT NULL,
                    input TEXT NOT NULL,
                    result TEXT NOT NULL
                )
                """
            )
            await conn.commit()


# Database handler for caching results
class DatabaseHandler:
    def __init__(self, db_connector: DatabaseConnector):
        self.db_connector = db_connector

    async def cache_result(self, operation: str, input_data: str, result: str):
        async with self.db_connector.get_connection() as conn:
            await conn.execute(
                "INSERT INTO cache (operation, input, result) VALUES (?, ?, ?)",
                (operation, input_data, result),
            )
            await conn.commit()

    async def get_cached_result(self, operation: str, input_data: str):
        async with self.db_connector.get_connection() as conn:
            cursor = await conn.execute(
                "SELECT result FROM cache WHERE operation = ? AND input = ?",
                (operation, input_data),
            )
            row = await cursor.fetchone()
            return row[0] if row else None


db_connector = DatabaseConnector()


db_handler = DatabaseHandler(db_connector)
