import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [filter, setFilter] = useState('all');

  const handleChange = e => {
    setInputValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: inputValue.trim(), completed: false }]);
      setInputValue('');
    }
  };

  const handleCheckbox = id => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const handleFilter = e => {
    setFilter(e.target.value);
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') {
      return !todo.completed;
    }
    if (filter === 'completed') {
      return todo.completed;
    }
    return true;
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleChange} placeholder="Add a task" />
        <button type="submit">Add</button>
      </form>
      <ul>
        {filteredTodos.map(todo => (
          <li key={todo.id}>
            <input type="checkbox" checked={todo.completed} onChange={() => handleCheckbox(todo.id)} />
            {todo.text}
          </li>
        ))}
      </ul>
      <div>
        <button value="all" onClick={handleFilter}>
          All
        </button>
        <button value="active" onClick={handleFilter}>
          Active
        </button>
        <button value="completed" onClick={handleFilter}>
          Completed
        </button>
      </div>
    </div>
  );
}

export default TodoList;

