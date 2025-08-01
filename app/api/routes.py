from fastapi import APIRouter, HTTPException

from app.api.models import (
    PowerRequest,
    FibonacciRequest,
    FactorialRequest,
)
from app.services.math_operations import (
    calculate_power,
    calculate_fibonacci,
    calculate_factorial,
)

router = APIRouter()


@router.get("/pow")
async def power(base: float, exponent: float):
    try:
        result = await calculate_power(PowerRequest(base=base, exponent=exponent))
        return {
            "result": result.result,
            "execution_time": result.execution_time,
            "cached": result.cached
        }
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@router.get("/fibonacci")
async def fibonacci(n: int):
    try:
        result = await calculate_fibonacci(FibonacciRequest(n=n))
        return {
            "result": result.result,
            "execution_time": result.execution_time,
            "cached": result.cached
        }
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@router.get("/factorial")
async def factorial(n: int):
    try:
        result = await calculate_factorial(FactorialRequest(n=n))
        return {
            "result": result.result,
            "execution_time": result.execution_time,
            "cached": result.cached
        }
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
