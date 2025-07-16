# Math Service

## Overview
This project is a microservice that provides APIs to perform various mathematical operations, including:

- **Power Function**: Calculate the result of raising a base to an exponent.
- **Fibonacci Sequence**: Get the n-th Fibonacci number.
- **Factorial**: Calculate the factorial of a number.

The service uses FastAPI for the web framework, SQLite for caching results, and Jinja2 for rendering a simple web interface.

## Features

- **API Endpoints**:
  - `/pow`: Calculate the power of a base raised to an exponent.
  - `/fibonacci`: Get the n-th Fibonacci number.
  - `/factorial`: Calculate the factorial of a number.
- **Caching**: Results are cached in an SQLite database to improve performance.
- **Web Interface**: A simple HTML page to interact with the APIs.
- **Interactive API Documentation**: FastAPI provides Swagger UI and ReDoc for testing and exploring the APIs.

## Requirements

- Python 3.10+
- FastAPI
- Uvicorn
- Jinja2
- aiosqlite
- python-dotenv

## Setup

1. Clone the repository and navigate to the project directory:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Create a virtual environment:
   ```bash
   python -m venv .venv
   ```

3. Activate the virtual environment:
   - On Windows:
     ```bash
     .venv\Scripts\activate
     ```
   - On macOS/Linux:
     ```bash
     source .venv/bin/activate
     ```

4. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

5. Run the application:
   ```bash
   uvicorn app.main:app --reload
   ```
   Or alternatively:
   ```bash
   & .venv/Scripts/python.exe -m app.main
   ```

6. Open the web interface:
   Navigate to `http://127.0.0.1:8000/` in your browser.

7. Explore the API documentation:
   - Swagger UI: [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)
   - ReDoc: [http://127.0.0.1:8000/redoc](http://127.0.0.1:8000/redoc)

## Project Structure

```
project/
├── app/
│   ├── api/
│   │   ├── models.py
│   │   ├── routes.py
│   ├── db/
│   │   ├── database.py
│   ├── services/
│   │   ├── math_operations.py
│   ├── main.py
├── static/
│   ├── scripts.js
│   ├── styles.css
├── templates/
│   ├── index.html
|── db/
│   ├── cache.db
├── .env
├── requirements.txt
├── README.md
```

## Modules and Usage

### **FastAPI**
FastAPI is used to define the API endpoints and handle HTTP requests. The routes are defined in `app/api/routes.py`.

### **Pydantic**
Pydantic is used for data validation and serialization. The following models are defined in `app/api/models.py`:
- `PowerRequest`: Represents the input for the power operation.
- `FibonacciRequest`: Represents the input for the Fibonacci operation.
- `FactorialRequest`: Represents the input for the factorial operation.
- `ResponseModel`: Represents the standardized response format for all operations.

### **SQLite and aiosqlite**
SQLite is used as a caching mechanism to store results of operations. The database interactions are managed asynchronously using `aiosqlite` in `app/db/database.py`.

### **Jinja2**
Jinja2 is used to render the HTML templates for the web interface. The main template is located in `templates/index.html`.

## Interactive API Documentation
FastAPI provides interactive API documentation:
- **Swagger UI**: Accessible at `/docs`, allows you to test the API endpoints directly from the browser.
- **ReDoc**: Accessible at `/redoc`, provides a detailed view of the API schema.
