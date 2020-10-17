import React, { useContext, useState, useEffect } from 'react';
import {TaskListContext} from '../context/TaskListContext';

const TaskForm = () => {
  const [tasks, addTask, removeTask, clearList, findItem, editTask, editItem] = useContext(TaskListContext);
  const [title, setTitle] = useState('');

  const handleChange = e => {
    setTitle(e.target.value);
    // console.log(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    if(!editItem) {
      addTask(title);
      setTitle('');
      // console.log(title);
    } else {
      editTask(title, editItem.id);
    }
    
  }

  useEffect(() => {
    if(editItem) {
      setTitle(editItem.title);
    } else {
      setTitle('');
    }
  }, [editItem]);

  return (
    <form onSubmit={handleSubmit} className="form">
      <input type="text" className="task-input" placeholder="Add task..." required onChange={handleChange} value={title} />
      <div className="buttons">
        <button type="submit" className="btn add-task-btn">{editItem ? 'Edit task' : 'Add Task'}</button>
        <button type="button" className="btn clear-btn" onClick={() => clearList()}>Clear</button>
      </div>
    </form>
  )
}

export default TaskForm;
