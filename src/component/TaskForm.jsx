import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import './styles/Task.css';
import { toast } from 'react-toastify';


const TaskForm = ({ taskId }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    dueDate: '',
    priority: 'Medium'
  });

  // Load task data if editing
  React.useEffect(() => {
    if (taskId) {
      const fetchTask = async () => {
        try {
          const response = await api.get(`/api/Todo/GetTaskById/${taskId}`);
          const task = response.data;
          setFormData({
            title: task.title,
            description: task.description,
            dueDate: task.dueDate.split('T')[0], // Format date for input
            priority: task.priority
          });
        } catch (error) {
          console.error('Error fetching task:', error);
        }
      };
      fetchTask();
    }
  }, [taskId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!formData.title.trim()) {
      toast.error('Title is required');
      return;
    }
  
    try {
      if (taskId) {
        await api.put(`/Todo/UpdateTask/${taskId}`, {
          Title: formData.title,
          Description: formData.description,
          DueDate: formData.dueDate,
          Priority: formData.priority,
          IsCompleted: false
        });
        toast.success('Task updated successfully!');
      } else {
        await api.post('/Todo/CreateTask', {
          Title: formData.title,
          Description: formData.description,
          DueDate: formData.dueDate,
          Priority: formData.priority
        });
        toast.success('Task added successfully!');
      }
      navigate('/tasks');
    } catch (error) {
      console.error('Error saving task:', error);
      toast.error('Failed to save task. Please try again.');
    }
  };
  

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Title*</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>
      
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="dueDate">Due Date</label>
          <input
            type="date"
            id="dueDate"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
            min={new Date().toISOString().split('T')[0]}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="priority">Priority</label>
          <select
            id="priority"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
      </div>
      
      <button type="submit" className="add-task-btn">
        {taskId ? 'Update Task' : 'Add Task'}
      </button>
    </form>
  );
};

export default TaskForm;