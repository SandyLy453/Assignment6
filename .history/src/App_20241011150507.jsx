import { useState } from 'react'
import Task from './components/Task'
import TaskForm from './components/TaskForm'


function App() {
  
  const [tasks, setTasks] = useState([]);
  const [uncheckedCount, setUncheckedCount] = useState(0);

  const addTask = (taskName) => {
    setTasks([...tasks, taskName]);
  };

  const removeTask = (taskName) => {
    setTasks(tasks.filter((task) => task !== taskName));
  };

  const toggleTaskStatus = (index, isChecked) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, checked: isChecked } : task
    );
    setTasks(updatedTasks);

    if (isChecked) {
      setUncheckedCount(uncheckedCount - 1);
    } else {
      setUncheckedCount(uncheckedCount + 1);
    }
  };

  return (
    <>
      <div>
        <h1>Task List</h1>
        <TaskForm addTask={addTask} />
        <p>You have {uncheckedCount} unchecked tasks left.</p>
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
