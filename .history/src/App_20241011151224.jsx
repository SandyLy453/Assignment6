import { useState } from 'react';
import Task from './components/Task';
import TaskForm from './components/TaskForm';

function App() {
  const [tasks, setTasks] = useState([]);

  // Function to calculate the number of unchecked tasks
  const getUncheckedCount = () => {
    return tasks.filter((task) => !task.checked).length;
  };

  // Function to add a new task
  const addTask = (taskName) => {
    setTasks([...tasks, { name: taskName, checked: false }]); // New tasks are unchecked by default
  };

  // Function to remove a task
  const removeTask = (taskName) => {
    setTasks(tasks.filter((task) => task.name !== taskName));
  };

  // Function to toggle the task status
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
            <Task
              key={index}
              name={task.name}
              checked={task.checked}
              toggleTaskStatus={toggleTaskStatus}
              removeTask={removeTask}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;



