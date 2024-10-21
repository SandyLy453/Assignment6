import { useEffect } from "react";

export default function Task({ name, checked, removeTask, toggleTaskStatus }) {
  useEffect(() => {
    // No need for direct DOM manipulation via refs. React will handle it.
  }, [checked]);

  return (
    <>
      <div className="task">
        <label>
          <input
            type="checkbox"
            className="checkBox"
            checked={checked} // Control the checked state via props
            onChange={() => toggleTaskStatus(name)} // Trigger status change when checkbox is toggled
          />
        </label>
        <p
          className="content"
          style={{ textDecoration: checked ? "line-through" : "none" }} // Conditional style for line-through
        >
          {name}
        </p>
        <button className="task-delete" onClick={() => removeTask(name)}>
          Remove
        </button>
      </div>
    </>
  );
}




