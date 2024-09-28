import React from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

const App: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default App;
