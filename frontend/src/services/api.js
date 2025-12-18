const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001/api';

class ApiService {
  async request(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      return data;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  // Get all todos
  async getTodos() {
    return this.request('/todos');
  }

  // Get single todo
  async getTodo(id) {
    return this.request(`/todos/${id}`);
  }

  // Create new todo
  async createTodo(title) {
    return this.request('/todos', {
      method: 'POST',
      body: JSON.stringify({ title }),
    });
  }

  // Update todo
  async updateTodo(id, data) {
    return this.request(`/todos/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  // Delete todo
  async deleteTodo(id) {
    return this.request(`/todos/${id}`, {
      method: 'DELETE',
    });
  }

  // Toggle todo completion
  async toggleTodo(id) {
    return this.request(`/todos/${id}/toggle`, {
      method: 'PATCH',
    });
  }

  // Clear completed todos
  async clearCompleted() {
    return this.request('/todos/completed/clear', {
      method: 'DELETE',
    });
  }

  // Health check
  async healthCheck() {
    return this.request('/health');
  }
}

export default new ApiService();
