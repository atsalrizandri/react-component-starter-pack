import React, { useState } from 'react';
import TodoItem from './TodoItem';
import '../assets/style.css';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [newAssignee, setNewAssignee] = useState('');
  const [newDueDate, setNewDueDate] = useState('');

  const addTask = () => {
    const taskToAdd = {
      task: newTask,
      assignee: newAssignee,
      dueDate: newDueDate,
      isCompleted: false,
    };
    setTasks([...tasks, taskToAdd]);
    setNewTask('');
    setNewAssignee('');
    setNewDueDate('');
  };

  const toggleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].isCompleted = !newTasks[index].isCompleted;
    setTasks(newTasks);
  };

  const editTask = (index, updatedTask) => {
    const newTasks = [...tasks];
    newTasks[index] = updatedTask;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
    setTasks(newTasks);
  };

  return (
    <div>
      <div className="input-form">
        <input 
          type="text" 
          placeholder="Todo Name" 
          value={newTask} 
          onChange={(e) => setNewTask(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Assignee" 
          value={newAssignee} 
          onChange={(e) => setNewAssignee(e.target.value)} 
        />
        <input 
          type="date" 
          value={newDueDate} 
          onChange={(e) => setNewDueDate(e.target.value)} 
        />
        <button onClick={addTask}>Add Todo</button>
      </div>
      {tasks.map((task, index) => (
        <TodoItem 
          key={index} 
          {...task} 
          toggleComplete={() => toggleComplete(index)}
          onEdit={(updatedTask) => editTask(index, updatedTask)}
          onDelete={() => deleteTask(index)}
        />
      ))}
    </div>
  );
};

export default TodoList;
