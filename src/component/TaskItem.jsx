import React from 'react';
import './../styles/Task.css';

const TaskItem = ({ task, onComplete, onDelete }) => {
  const getPriorityClass = () => {
    switch (task.priority) {
      case 'High':
        return 'priority-high';
      case 'Medium':
        return 'priority-medium';
      case 'Low':
        return 'priority-low';
      default:
        return '';
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className={`task-item ${task.isCompleted ? 'completed' : ''}`}>
      <div className="task-content">
        <div className="task-header">
          <h3 className="task-title">{task.title}</h3>
          <span className={`priority-badge ${getPriorityClass()}`}>
            {task.priority}
          </span>
        </div>
        
        {task.description && (
          <p className="task-description">{task.description}</p>
        )}
        
        {task.dueDate && (
          <div className="task-due-date">
            <span>Due: </span>
            {formatDate(task.dueDate)}
          </div>
        )}
      </div>
      
      <div className="task-actions">
        {!task.isCompleted && (
          <button
            onClick={() => onComplete(task.id)}
            className="complete-btn"
          >
            Complete
          </button>
        )}
        <button
          onClick={() => onDelete(task.id)}
          className="delete-btn"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;