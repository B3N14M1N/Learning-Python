from pydantic import BaseModel

class PowerRequest(BaseModel):
    base: float
    exponent: float

class FibonacciRequest(BaseModel):
    n: int

class FactorialRequest(BaseModel):
    n: int

class ResponseModel(BaseModel):
    result: float
