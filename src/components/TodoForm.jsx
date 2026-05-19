import { useRef } from 'react';

export default function TodoForm({ addTodo }) {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const todoText = inputRef.current.value.trim();
    
    if (!todoText) return; // Prevent adding empty entries
    
    addTodo(todoText);
    inputRef.current.value = ''; // Direct DOM reset via ref
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input 
        ref={inputRef} 
        type="text" 
        placeholder="Add a new task..." 
      />
      <button type="submit">Add Task</button>
    </form>
  );
}