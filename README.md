# Microservices Lab

This repository contains the complete working microservices system, including Docker setup.

## Services Included
- **Item Service** (Port 8081) - Built with Node.js & Express
- **Order Service** (Port 8082) - Built with Node.js & Express
- **Payment Service** (Port 8083) - Built with Node.js & Express
- **API Gateway** (Port 8080) - Built with NGINX

## Running the Application
1. Ensure **Docker Desktop** is installed and running on your system.
2. Open a terminal in the root of this project.
3. Build the Docker images:
   ```bash
   docker-compose build
   ```
4. Start the services:
   ```bash
   docker-compose up -d
   ```

## Testing with Postman
You can test the endpoints via the API Gateway running on port `8080`.

**Item Endpoints:**
- `GET http://localhost:8080/items`
- `POST http://localhost:8080/items` (Body: `{ "name": "Headphones" }`)
- `GET http://localhost:8080/items/1`

**Order Endpoints:**
- `GET http://localhost:8080/orders`
- `POST http://localhost:8080/orders` (Body: `{ "item": "Laptop", "quantity": 2, "customerId": "C001" }`)
- `GET http://localhost:8080/orders/1`

**Payment Endpoints:**
- `GET http://localhost:8080/payments`
- `POST http://localhost:8080/payments/process` (Body: `{ "orderId": 1, "amount": 1299.99, "method": "CARD" }`)
- `GET http://localhost:8080/payments/1`

## Submission Instructions
1. Initialize a Git repository in this folder if not already done: `git init`
2. Commit all the code.
3. Push to your public GitHub repository.
4. Add the repository link to your submission Word document along with screenshots of your Postman tests!
