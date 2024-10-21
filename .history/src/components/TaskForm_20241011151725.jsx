import { useState } from "react";

export default function TaskForm({ addTask }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      addTask(inputValue);
      setInputValue(""); // clear the input
    }
  };

  return (
    <form onSubmit={handleSubmit} className="inputBox">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter task name"
        className="input"
      />
      <button type="submit" className="sm-btn">Add Task</button>
    </form>
  );
}






