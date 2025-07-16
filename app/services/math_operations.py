import math
import asyncio
from app.db.database import db_manager
from app.api.models import PowerRequest, FibonacciRequest, FactorialRequest, ResponseModel

async def calculate_power(request: PowerRequest) -> ResponseModel:
    cached = await db_manager.get_cached_result("power", f"{request.base},{request.exponent}")
    if cached:
        return ResponseModel(result=float(cached))

    result = math.pow(request.base, request.exponent)
    await db_manager.cache_result("power", f"{request.base},{request.exponent}", str(result))
    return ResponseModel(result=result)

async def calculate_fibonacci(request: FibonacciRequest) -> ResponseModel:
    cached = await db_manager.get_cached_result("fibonacci", str(request.n))
    if cached:
        return ResponseModel(result=int(cached))

    if request.n <= 0:
        result = 0
    elif request.n == 1:
        result = 1
    else:
        a, b = 0, 1
        for _ in range(2, request.n + 1):
            a, b = b, a + b
            await asyncio.sleep(0)  # Yield control to avoid blocking
        result = b

    await db_manager.cache_result("fibonacci", str(request.n), str(result))
    return ResponseModel(result=result)

async def calculate_factorial(request: FactorialRequest) -> ResponseModel:
    cached = await db_manager.get_cached_result("factorial", str(request.n))
    if cached:
        return ResponseModel(result=int(cached))

    if request.n < 0:
        raise ValueError("Factorial is not defined for negative numbers")
    result = 1
    for i in range(2, request.n + 1):
        result *= i
        await asyncio.sleep(0)  # Yield control to avoid blocking

    await db_manager.cache_result("factorial", str(request.n), str(result))
    return ResponseModel(result=result)
