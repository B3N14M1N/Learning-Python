from pydantic import BaseModel
from typing import Union

class PowerRequest(BaseModel):
    base: float
    exponent: float

class FibonacciRequest(BaseModel):
    n: int

class FactorialRequest(BaseModel):
    n: int

class ResponseModel(BaseModel):
    result: Union[float, int]
    execution_time: float = None
    cached: bool = False
