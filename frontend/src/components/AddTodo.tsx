import React, { useState } from 'react';
import axios from 'axios';

const AddTodo: React.FC = () => {
  const [title, setTitle] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios.post('http://localhost:4502/api/todos', { title });
    setTitle(''); // Clear input after submit
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 w-full"
        placeholder="Add a new todo"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 mt-2">
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
