import React, { useState } from 'react';
import './TodoInput.css';

function TodoInput({ onAdd }) {
  const [input, setInput] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (input.trim() === '') {
      return;
    }

    setIsSubmitting(true);
    const success = await onAdd(input.trim());
    
    if (success) {
      setInput('');
    }
    
    setIsSubmitting(false);
  };

  return (
    <form className="todo-input" onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="What needs to be done?"
        className="todo-input-field"
        disabled={isSubmitting}
      />
      <button 
        type="submit" 
        className="todo-input-btn"
        disabled={isSubmitting || input.trim() === ''}
      >
        {isSubmitting ? '...' : 'Add'}
      </button>
    </form>
  );
}

export default TodoInput;
