import { useState } from 'react';
import Task from './components/Task';
import TaskForm from './components/TaskForm';
function App() {
  const [tasks, setTasks] = useState([
    { id: 0, name: "Task 1", completed: false },
    { id: 1, name: "Task 2", completed: false },
    { id: 2, name: "Task 3", completed: false }
  ]);


  // Add filter
  
  const [filter, setFilter] = useState("all"); // by default, all tasks will be displayed 

  const filteredTask = tasks.filter(task => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true; // show all tasks if return is true (all selected)
  });
  
  const addTask = (task) => {
    setTasks([...tasks, { id: tasks.length, name: task, completed: false }]); // Adds task incomplete by default
  };
  const toggleComplete = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };
  const removeTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };
  const remainingTask = tasks.filter(task => !task.completed).length;
  return (
    <>
      <div className="main">
        <h1 className="header">Daily Planner</h1>
        <div>
          <TaskForm addTask={addTask} />
          <h2 className="counting">
            You have {remainingTask} task{remainingTask !== 1 ? 's' : ''} remaining
          </h2>

          <div className="btn-filters">
            <button onClick={() => setFilter("all")}>All</button>
            <button onClick={() => setFilter("completed")}>Completed</button>
            <button onClick={() => setFilter("pending")}>Pending</button>
          </div>
          
          {tasks.map((task) => (
            <Task 
              key={task.id} 
              task={task}
              toggleComplete={() => toggleComplete(task.id)} 
              removeTask={() => removeTask(task.id)}
            />
          ))}
        </div>
      </div>
    </>
  );
}
export default App;




