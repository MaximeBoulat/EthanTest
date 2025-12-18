import React, { useState, useEffect } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoStats from './components/TodoStats';
import ApiService from './services/api';

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('all'); // all, active, completed

  // Load todos on mount
  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await ApiService.getTodos();
      setTodos(response.data);
    } catch (err) {
      setError('Failed to load todos. Make sure the backend server is running.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const addTodo = async (title) => {
    try {
      const response = await ApiService.createTodo(title);
      setTodos([...todos, response.data]);
      return true;
    } catch (err) {
      setError('Failed to add todo');
      console.error(err);
      return false;
    }
  };

  const toggleTodo = async (id) => {
    try {
      const response = await ApiService.toggleTodo(id);
      setTodos(todos.map(todo => 
        todo.id === id ? response.data : todo
      ));
    } catch (err) {
      setError('Failed to update todo');
      console.error(err);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await ApiService.deleteTodo(id);
      setTodos(todos.filter(todo => todo.id !== id));
    } catch (err) {
      setError('Failed to delete todo');
      console.error(err);
    }
  };

  const updateTodo = async (id, title) => {
    try {
      const response = await ApiService.updateTodo(id, { title });
      setTodos(todos.map(todo => 
        todo.id === id ? response.data : todo
      ));
    } catch (err) {
      setError('Failed to update todo');
      console.error(err);
    }
  };

  const clearCompleted = async () => {
    try {
      await ApiService.clearCompleted();
      setTodos(todos.filter(todo => !todo.completed));
    } catch (err) {
      setError('Failed to clear completed todos');
      console.error(err);
    }
  };

  // Filter todos based on selected filter
  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const activeCount = todos.filter(todo => !todo.completed).length;
  const completedCount = todos.filter(todo => todo.completed).length;

  return (
    <div className="App">
      <div className="container">
        <header className="header">
          <h1>📝 Todo List</h1>
          <p className="subtitle">Stay organized and productive</p>
        </header>

        {error && (
          <div className="error-banner">
            {error}
            <button onClick={() => setError(null)} className="error-close">×</button>
          </div>
        )}

        <TodoInput onAdd={addTodo} />

        <TodoStats
          total={todos.length}
          active={activeCount}
          completed={completedCount}
          filter={filter}
          onFilterChange={setFilter}
        />

        {loading ? (
          <div className="loading">Loading todos...</div>
        ) : filteredTodos.length === 0 ? (
          <div className="empty-state">
            {filter === 'all' && todos.length === 0 ? (
              <>
                <p>🎉 No todos yet!</p>
                <p className="empty-subtitle">Add your first task above</p>
              </>
            ) : filter === 'active' ? (
              <>
                <p>✨ All tasks completed!</p>
                <p className="empty-subtitle">Great job staying on top of things</p>
              </>
            ) : filter === 'completed' ? (
              <>
                <p>📋 No completed tasks</p>
                <p className="empty-subtitle">Start checking off your todos!</p>
              </>
            ) : null}
          </div>
        ) : (
          <>
            <TodoList
              todos={filteredTodos}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
              onUpdate={updateTodo}
            />
            
            {completedCount > 0 && (
              <div className="actions">
                <button onClick={clearCompleted} className="clear-btn">
                  Clear Completed ({completedCount})
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
