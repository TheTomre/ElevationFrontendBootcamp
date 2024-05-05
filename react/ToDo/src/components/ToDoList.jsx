import React from 'react';
import ToDo from './ToDo.jsx';

function TodoList({ todos, deleteTodo }) {
  if (todos.length === 0) {
    return <h3>No todos available</h3>;
  } else {
    return (
      <div style={{
          margin: '20px',
          marginInline: '-50px',
          padding: '20px',
          backgroundColor: '#f8f9fa',
          borderRadius: '5px'}}>
        {todos.map(todo => (
          <ToDo key={todo.id} todo={todo} deleteTodo={deleteTodo} />
        ))}
      </div>
    );
  }
}

export default TodoList;
