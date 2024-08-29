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

  return (
    <div>
      <div className="input-form">
        <input 
          type="text" 
          placeholder="Task Name" 
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
        <button onClick={addTask}>Add Task</button>
      </div>
      {tasks.map((task, index) => (
        <TodoItem 
          key={index} 
          {...task} 
          toggleComplete={() => toggleComplete(index)} 
        />
      ))}
    </div>
  );
};

export default TodoList;
