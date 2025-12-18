import React from 'react';
import './TodoStats.css';

function TodoStats({ total, active, completed, filter, onFilterChange }) {
  return (
    <div className="todo-stats">
      <div className="stats-info">
        <span className="stat-item">
          <strong>{active}</strong> active
        </span>
        <span className="stat-divider">•</span>
        <span className="stat-item">
          <strong>{completed}</strong> completed
        </span>
      </div>
      
      <div className="filter-buttons">
        <button
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => onFilterChange('all')}
        >
          All ({total})
        </button>
        <button
          className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
          onClick={() => onFilterChange('active')}
        >
          Active ({active})
        </button>
        <button
          className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
          onClick={() => onFilterChange('completed')}
        >
          Done ({completed})
        </button>
      </div>
    </div>
  );
}

export default TodoStats;
