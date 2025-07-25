import math
import time
import asyncio

from app.db.database import db_handler
from app.api.models import (
    PowerRequest,
    FibonacciRequest,
    FactorialRequest,
    ResponseModel,
)


async def calculate_power(request: PowerRequest) -> ResponseModel:
    start_time = time.time()
    request_str = f"{request.base},{request.exponent}"
    cached = await db_handler.get_cached_result("power", request_str)
    if cached:
        execution_time = (time.time() - start_time) * 1000
        return ResponseModel(
            result=float(cached),
            execution_time=execution_time,
            cached=True
        )

    result = math.pow(request.base, request.exponent)
    await db_handler.cache_result("power", request_str, str(result))
    execution_time = (time.time() - start_time) * 1000
    return ResponseModel(result=result, execution_time=execution_time, cached=False)


async def calculate_fibonacci(request: FibonacciRequest) -> ResponseModel:
    start_time = time.time()
    cached = await db_handler.get_cached_result("fibonacci", str(request.n))
    if cached:
        execution_time = (time.time() - start_time) * 1000
        return ResponseModel(
            result=int(cached),
            execution_time=execution_time,
            cached=True
        )

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

    await db_handler.cache_result("fibonacci", str(request.n), str(result))
    execution_time = (time.time() - start_time) * 1000
    return ResponseModel(result=result, execution_time=execution_time, cached=False)


async def calculate_factorial(request: FactorialRequest) -> ResponseModel:
    start_time = time.time()
    cached = await db_handler.get_cached_result("factorial", str(request.n))
    if cached:
        execution_time = (time.time() - start_time) * 1000
        return ResponseModel(
            result=int(cached),
            execution_time=execution_time,
            cached=True
        )

    if request.n < 0:
        raise ValueError("Factorial is not defined for negative numbers")
    result = 1
    for i in range(2, request.n + 1):
        result *= i
        await asyncio.sleep(0)  # Yield control to avoid blocking

    await db_handler.cache_result("factorial", str(request.n), str(result))
    execution_time = (time.time() - start_time) * 1000
    return ResponseModel(
        result=result,
        execution_time=execution_time,
        cached=False
    )
