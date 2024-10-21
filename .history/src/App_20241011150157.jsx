import { useState } from 'react'
import './App.css'
import Task from './components/Task'
import TaskForm from './components/TaskForm'


function App() {
  
  const [tasks, setTasks] = useState([]);

  const addTask = (taskName) => {
    setTasks([...tasks, taskName]);
  };

  const removeTask = (taskName) => {
    setTasks(tasks.filter((task) => task !== taskName));
  };


  return (
    <>
      <div>
        <h1>Task List</h1>
        <TaskForm addTask={addTask} />
        <div>
          {tasks.map((task, index) => (
            <Task key={index} name={task} removeTask={removeTask} />
          ))}
        </div>
      </div>
    </>
  )
}

export default App
