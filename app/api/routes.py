from fastapi import APIRouter, HTTPException
from app.services.math_operations import calculate_power, calculate_fibonacci, calculate_factorial
from app.api.models import PowerRequest, FibonacciRequest, FactorialRequest

router = APIRouter()

@router.post("/pow")
async def power(request: PowerRequest):
    try:
        result = await calculate_power(request.base, request.exponent)
        return {"base": request.base, "exponent": request.exponent, "result": result}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/fibonacci")
async def fibonacci(request: FibonacciRequest):
    try:
        result = await calculate_fibonacci(request.n)
        return {"n": request.n, "result": result}
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/factorial")
async def factorial(request: FactorialRequest):
    try:
        result = await calculate_factorial(request.n)
        return {"n": request.n, "result": result}
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
