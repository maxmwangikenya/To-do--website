import { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo'; // This component should render a single todo item
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

  return (
    <div className="TodoWrapper">
      <TodoForm addTodo={addTodo} />

      {/* Render a list of Todo components */}
      {todos.map((todo) => (
        <Todo key={todo.id} task={todo.task} id={todo.id} />
      ))}
    </div>
  );
};

export default TodoWrapper;