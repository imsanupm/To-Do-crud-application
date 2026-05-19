import TodoItem from './TodoItem';

export default function TodoList({ todos, toggleTodo, editTodo, deleteTodo }) {
  if (todos.length === 0) return <p className="empty-state">No tasks yet!</p>;

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem 
          key={todo.id} // Crucial unique React reconciliation key
          todo={todo} 
          toggleTodo={toggleTodo} 
          editTodo={editTodo} 
          deleteTodo={deleteTodo} 
        />
      ))}
    </ul>
  );
}