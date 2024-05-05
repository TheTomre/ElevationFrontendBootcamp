import React from 'react';
import './ToDo.css';

function ToDo({ todo, deleteTodo }) {

  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete the todo "${todo.title}"?`)) {
      deleteTodo(todo.id);
    }
  };

  return (
    <div className="todo-container">
      {todo.imageUrl && (
        <div className="todo-image">
          <img src={todo.imageUrl} alt={todo.title} />
        </div>
      )}
      <div className="todo-info">
        <h2>{todo.title}</h2>
        <p style={{ color: 'green' }}>Date: {todo.date}</p>
      </div>
      <div className="todo-action">
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default ToDo;
