import React, { useState } from 'react';
import './TodoItem.css';

function TodoItem({ todo, onToggle, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.title);

  const handleEdit = () => {
    setIsEditing(true);
    setEditText(todo.title);
  };

  const handleSave = () => {
    if (editText.trim() === '') {
      return;
    }
    onUpdate(todo.id, editText.trim());
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditText(todo.title);
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-checkbox">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          id={`todo-${todo.id}`}
        />
        <label htmlFor={`todo-${todo.id}`}></label>
      </div>

      {isEditing ? (
        <div className="todo-edit">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={handleKeyDown}
            className="todo-edit-input"
            autoFocus
          />
          <div className="todo-edit-actions">
            <button onClick={handleSave} className="save-btn">✓</button>
            <button onClick={handleCancel} className="cancel-btn">✕</button>
          </div>
        </div>
      ) : (
        <>
          <div className="todo-content" onDoubleClick={handleEdit}>
            <span className="todo-text">{todo.title}</span>
          </div>

          <div className="todo-actions">
            <button onClick={handleEdit} className="edit-btn" title="Edit">
              ✎
            </button>
            <button onClick={() => onDelete(todo.id)} className="delete-btn" title="Delete">
              🗑
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default TodoItem;
