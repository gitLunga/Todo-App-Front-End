import React from 'react';
import TaskItem from './TaskItem';
import './../styles/Task.css';

const TaskList = ({ tasks, onComplete, onDelete }) => {
  if (tasks.length === 0) {
    return <div className="no-tasks">No tasks found. Add a task to get started!</div>;
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onComplete={onComplete}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TaskList;