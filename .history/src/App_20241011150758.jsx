import { useState } from 'react'
import Task from './components/Task'
import TaskForm from './components/TaskForm'


function App() {
  
  const [tasks, setTasks] = useState([]);
  const [uncheckedCount, setUncheckedCount] = useState(0);

  const getUncheckedCount = () => {
    return tasks.filter(task => !task.checked).length;
  };

  const addTask = (taskName) => {
    setTasks([...tasks, taskName]);
  };

  const removeTask = (taskName) => {
    setTasks(tasks.filter((task) => task !== taskName));
  };

  const toggleTaskStatus = (taskName) => {
    const updatedTasks = tasks.map((task) =>
      task.name === taskName ? { ...task, checked: !task.checked } : task
    );
    setTasks(updatedTasks); // Update the task's checked status in the parent state
  };

  return (
    <>
      <div>
        <h1>Task List</h1>
        <TaskForm addTask={addTask} />
        <p>You have {getUncheckedCount()} unchecked tasks left.</p>
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
