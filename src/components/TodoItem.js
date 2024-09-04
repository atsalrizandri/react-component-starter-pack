import React, { useState } from 'react';
import '../assets/style.css';

const TodoItem = ({ task, assignee, dueDate, isCompleted, toggleComplete, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);
  const [editedAssignee, setEditedAssignee] = useState(assignee);
  const [editedDueDate, setEditedDueDate] = useState(dueDate);

  const handleEdit = () => {
    onEdit({
      task: editedTask,
      assignee: editedAssignee,
      dueDate: editedDueDate,
      isCompleted,
    });
    setIsEditing(false);
  };

  return (
    <div className="todo-item">
      {isEditing ? (
        <div className="edit-form">
          <input 
            type="text" 
            value={editedTask} 
            onChange={(e) => setEditedTask(e.target.value)} 
          />
          <input 
            type="text" 
            value={editedAssignee} 
            onChange={(e) => setEditedAssignee(e.target.value)} 
          />
          <input 
            type="date" 
            value={editedDueDate} 
            onChange={(e) => setEditedDueDate(e.target.value)} 
          />
          <button onClick={handleEdit}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <>
          <input 
            type="checkbox"
            checked={isCompleted} 
            onChange={toggleComplete} 
          />
          <div className="task-info">
            <span className={`task-name ${isCompleted ? 'completed' : ''}`}>
              {task}
            </span>
          </div>
          <div className="assignee-date">
            <span className="assignee">{assignee}</span>
            <span className="due-date">{dueDate}</span>
          </div>
          <button class="edit-button button-spacing" onClick={() => setIsEditing(true)}>Edit</button>
          <button class="delete-button button-spacing" onClick={onDelete}>Delete</button>
        </>
      )}
    </div>
  );
};

export default TodoItem;
