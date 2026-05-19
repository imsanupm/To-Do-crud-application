import { useState, useRef, useEffect } from 'react';

export default function TodoItem({ todo, toggleTodo, editTodo, deleteTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const editInputRef = useRef(null);

  // Focus the input automatically when entering edit mode
  useEffect(() => {
    if (isEditing) {
      editInputRef.current?.focus();
    }
  }, [isEditing]);

  const handleSave = () => {
    if (editText.trim() && editText !== todo.text) {
      editTodo(todo.id, editText.trim());
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSave();
    if (e.key === 'Escape') {
      setEditText(todo.text); // Reset back to original text
      setIsEditing(false);
    }
  };

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input 
        type="checkbox" 
        checked={todo.completed} 
        onChange={() => toggleTodo(todo.id)} 
      />

      {isEditing ? (
        <input
          ref={editInputRef}
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={handleSave}
          onKeyDown={handleKeyDown}
        />
      ) : (
        <span onDoubleClick={() => setIsEditing(true)}>
          {todo.text}
        </span>
      )}

      <div className="actions">
        {isEditing ? (
          <button onClick={handleSave}>💾 Save</button>
        ) : (
          <button onClick={() => setIsEditing(true)}>✏️ Edit</button>
        )}
        <button onClick={() => deleteTodo(todo.id)}>❌ Delete</button>
      </div>
    </li>
  );
}