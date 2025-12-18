# Todo List Backend API

Express.js REST API for the Todo List application.

## Features

- RESTful API endpoints for CRUD operations
- In-memory data storage (easily replaceable with a database)
- CORS enabled for frontend communication
- Error handling and validation

## API Endpoints

### Health Check
- `GET /api/health` - Check server status

### Todos
- `GET /api/todos` - Get all todos
- `GET /api/todos/:id` - Get single todo
- `POST /api/todos` - Create new todo
- `PUT /api/todos/:id` - Update todo
- `DELETE /api/todos/:id` - Delete todo
- `PATCH /api/todos/:id/toggle` - Toggle todo completion
- `DELETE /api/todos/completed/clear` - Clear all completed todos

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
# Production mode
npm start

# Development mode (with auto-restart)
npm run dev
```

3. The server will run on `http://localhost:5000`

## API Response Format

### Success Response
```json
{
  "success": true,
  "data": { ... }
}
```

### Error Response
```json
{
  "success": false,
  "error": "Error message"
}
```

## Example Requests

### Create a Todo
```bash
curl -X POST http://localhost:5000/api/todos \
  -H "Content-Type: application/json" \
  -d '{"title": "New Todo"}'
```

### Update a Todo
```bash
curl -X PUT http://localhost:5000/api/todos/1 \
  -H "Content-Type: application/json" \
  -d '{"title": "Updated Todo", "completed": true}'
```

## Environment Variables

- `PORT` - Server port (default: 5000)

## Future Enhancements

- Add database integration (MongoDB, PostgreSQL, etc.)
- Add authentication and authorization
- Add input validation with a library like Joi
- Add unit and integration tests
- Add logging with Winston or Morgan
- Add rate limiting
