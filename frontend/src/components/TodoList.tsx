import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Todo {
  _id: string;
  title: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await axios.get('http://localhost:4502/api/todos');
      setTodos(response.data);
    };
    fetchTodos();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Todo List</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo._id} className="p-2 border-b">
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
