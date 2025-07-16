import asyncio
import math
from asyncio import sleep
from app.db.database import get_db_connection

async def calculate_power(base: float, exponent: float) -> float:
    await sleep(0.1)  # Simulate async operation
    return math.pow(base, exponent)

def cache_result(operation: str, input_data: str, result: str):
    with get_db_connection() as conn:
        cursor = conn.cursor()
        cursor.execute(
            "INSERT INTO cache (operation, input, result) VALUES (?, ?, ?)",
            (operation, input_data, result),
        )
        conn.commit()

def get_cached_result(operation: str, input_data: str):
    with get_db_connection() as conn:
        cursor = conn.cursor()
        cursor.execute(
            "SELECT result FROM cache WHERE operation = ? AND input = ?",
            (operation, input_data),
        )
        row = cursor.fetchone()
        return row[0] if row else None

# Update existing functions to use caching
async def calculate_fibonacci(n: int) -> int:
    cached = get_cached_result("fibonacci", str(n))
    if cached:
        return int(cached)

    if n <= 0:
        result = 0
    elif n == 1:
        result = 1
    else:
        a, b = 0, 1
        for _ in range(2, n + 1):
            a, b = b, a + b
        result = b

    cache_result("fibonacci", str(n), str(result))
    return result

async def calculate_factorial(n: int) -> int:
    cached = get_cached_result("factorial", str(n))
    if cached:
        return int(cached)

    if n < 0:
        raise ValueError("Factorial is not defined for negative numbers")
    result = 1
    for i in range(2, n + 1):
        result *= i

    cache_result("factorial", str(n), str(result))
    return result
