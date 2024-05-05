import { useState, useEffect } from 'react'
import './App.css'
import TodoList from './components/ToDoList';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = todo => {
    setTodos((prevTodos) => [todo, ...prevTodos]);
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({
      id: uuidv4(),
      title,
      imageUrl,
      date: new Date().toLocaleString()
    });
    setTitle('');
    setImageUrl('');
  };

  return (
    <>
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter todo title"
      />
      <input
        type="url"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        placeholder="Enter image URL"
      />
      <button type="submit">Add Todo</button>
    </form>
    <TodoList todos={todos} deleteTodo={deleteTodo} />
  </>
  );
}

export default App
