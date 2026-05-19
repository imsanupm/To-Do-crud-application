import { useState, useEffect } from 'react';
 import TodoForm from './components/TodoForm';

import TodoList from './components/TodoList';

export default function App() {
  // Lazy initialization: reads localStorage only ONCE on initial load
  const [todos, setTodos] = useState(() => {
    try {
      const localValue = localStorage.getItem('REACT_TODO_LIST');
      return localValue ? JSON.parse(localValue) : [];
    } catch (error) {
      console.error("Error reading localStorage:", error);
      return [];
    }
  });

  // Sync state changes to Local Storage automatically
  useEffect(() => {
    localStorage.setItem('REACT_TODO_LIST', JSON.stringify(todos));
  }, [todos]);

  // CREATE
  const addTodo = (text) => {
    const newTodo = {
      id: crypto.randomUUID(), // Generates secure unique key
      text,
      completed: false
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  // UPDATE (Toggle Complete)
  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // EDIT (Update Text)
  const editTodo = (id, newText) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  // DELETE
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-app">
      <h1>Task Manager</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList 
        todos={todos} 
        toggleTodo={toggleTodo} 
        editTodo={editTodo} 
        deleteTodo={deleteTodo} 
      />
    </div>
  );
}