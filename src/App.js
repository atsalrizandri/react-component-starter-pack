import React from 'react';
import TodoList from './components/TodoList';
import './assets/style.css';

function App () {
  return (
    <div className='container'>
      <h1>To-dos</h1>
      <TodoList />
    </div>
  );
};

export default App;