import React from 'react';
import '../assets/style.css';

const TodoItem = ({ task, assignee, dueDate, isCompleted, toggleComplete }) => {
  return (
    <div className="todo-item">
        <input 
            type="checkbox"
            checked={isCompleted} 
            onChange={toggleComplete} />
        <div className="task-info">
            <span className={`task-name ${isCompleted ? 'completed' : ''}`}>
            {task}
            </span>
        </div>
        <div className="assignee-date">
            <span className="assignee">{assignee}</span>
            <span className="due-date">{dueDate}</span>
        </div>
    </div>
  );
};

export default TodoItem;