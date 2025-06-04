import { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import { v4 as uuidv4 } from 'uuid';

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        task: todo,
        completed: false,
        isEditing: false,
      },
    ]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="TodoWrapper">
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          task={todo.task}
          id={todo.id}
          toggleComplete={toggleComplete}
        />
      ))}
    </div>
  );
};

export default TodoWrapper;