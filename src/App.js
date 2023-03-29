import React, { useState } from 'react';
import TodoList from './TodoList';
//import logo from './logo.svg';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  return (
    <div >
      <h1>My To-Do List</h1>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
