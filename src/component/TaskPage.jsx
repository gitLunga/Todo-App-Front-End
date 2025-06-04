import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import FilterControls from './FilterControls';
import './styles/Task.css';

const TaskPage = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [editingTaskId, setEditingTaskId] = useState(null);
  const navigate = useNavigate();

  const fetchTasks = async () => {
    try {
      const response = await api.get('/api/Todo/GetAllTasks');
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await api.delete(`/api/Todo/DeleteTask/${id}`);
      fetchTasks();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const handleComplete = async (id) => {
    try {
      await api.put(`/api/Todo/MarkTaskAsComplete/${id}`);
      fetchTasks();
    } catch (error) {
      console.error('Error marking task complete:', error);
    }
  };

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.isCompleted;
    if (filter === 'pending') return !task.isCompleted;
    return true;
  });

  return (
    <div className="task-page">
      <h1 className="page-title">Task Manager</h1>

      {/* Filter */}
      <FilterControls currentFilter={filter} onFilterChange={handleFilterChange} />

      {/* Form */}
      <TaskForm taskId={editingTaskId} />

      {/* Task List */}
      <TaskList
        tasks={filteredTasks}
        onDelete={handleDelete}
        onComplete={handleComplete}
      />
    </div>
  );
};

export default TaskPage;
