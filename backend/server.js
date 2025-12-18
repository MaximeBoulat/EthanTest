const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// In-memory storage (replace with database in production)
let todos = [
  { id: 1, title: 'Learn React', completed: false, createdAt: new Date() },
  { id: 2, title: 'Build a Todo App', completed: false, createdAt: new Date() },
  { id: 3, title: 'Master Node.js', completed: true, createdAt: new Date() }
];
let nextId = 4;

// Routes

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// Get all todos
app.get('/api/todos', (req, res) => {
  res.json({
    success: true,
    data: todos,
    count: todos.length
  });
});

// Get single todo
app.get('/api/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find(t => t.id === id);
  
  if (!todo) {
    return res.status(404).json({
      success: false,
      error: 'Todo not found'
    });
  }
  
  res.json({
    success: true,
    data: todo
  });
});

// Create new todo
app.post('/api/todos', (req, res) => {
  const { title } = req.body;
  
  if (!title || title.trim() === '') {
    return res.status(400).json({
      success: false,
      error: 'Title is required'
    });
  }
  
  const newTodo = {
    id: nextId++,
    title: title.trim(),
    completed: false,
    createdAt: new Date()
  };
  
  todos.push(newTodo);
  
  res.status(201).json({
    success: true,
    data: newTodo
  });
});

// Update todo
app.put('/api/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { title, completed } = req.body;
  
  const todoIndex = todos.findIndex(t => t.id === id);
  
  if (todoIndex === -1) {
    return res.status(404).json({
      success: false,
      error: 'Todo not found'
    });
  }
  
  if (title !== undefined) {
    todos[todoIndex].title = title.trim();
  }
  
  if (completed !== undefined) {
    todos[todoIndex].completed = completed;
  }
  
  todos[todoIndex].updatedAt = new Date();
  
  res.json({
    success: true,
    data: todos[todoIndex]
  });
});

// Delete todo
app.delete('/api/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const todoIndex = todos.findIndex(t => t.id === id);
  
  if (todoIndex === -1) {
    return res.status(404).json({
      success: false,
      error: 'Todo not found'
    });
  }
  
  const deletedTodo = todos.splice(todoIndex, 1)[0];
  
  res.json({
    success: true,
    data: deletedTodo
  });
});

// Toggle todo completion
app.patch('/api/todos/:id/toggle', (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find(t => t.id === id);
  
  if (!todo) {
    return res.status(404).json({
      success: false,
      error: 'Todo not found'
    });
  }
  
  todo.completed = !todo.completed;
  todo.updatedAt = new Date();
  
  res.json({
    success: true,
    data: todo
  });
});

// Clear completed todos
app.delete('/api/todos/completed/clear', (req, res) => {
  const completedCount = todos.filter(t => t.completed).length;
  todos = todos.filter(t => !t.completed);
  
  res.json({
    success: true,
    message: `Cleared ${completedCount} completed todo(s)`,
    remaining: todos.length
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: 'Route not found'
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    error: 'Something went wrong!'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
});
