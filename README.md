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

## Requirements

- Python 3.10+
- FastAPI
- Uvicorn
- Jinja2

## Setup

1. Clone the repository and navigate to the project directory:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
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
   python -m app.main
   ```

6. Open the web interface:
   Navigate to `http://127.0.0.1:8000/` in your browser.

## API Documentation

FastAPI automatically generates interactive API documentation:

- Swagger UI: [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)
- ReDoc: [http://127.0.0.1:8000/redoc](http://127.0.0.1:8000/redoc)

## Project Structure

```
project/
├── app/
│   ├── __init__.py
│   ├── main.py
│   ├── api/
│   │   ├── __init__.py
│   │   ├── models.py
│   │   ├── routes.py
│   ├── services/
│   │   ├── __init__.py
│   │   ├── math_operations.py
│   ├── db/
│       ├── __init__.py
│       ├── database.py
├── templates/
│   ├── index.html
├── static/
├── requirements.txt
├── README.md
```

## Notes

- The SQLite database is used for caching results to improve performance.
- The web interface is a simple HTML page rendered using Jinja2 templates.
- The project follows the MVCS (Model-View-Controller-Service) pattern for better organization and extensibility.
