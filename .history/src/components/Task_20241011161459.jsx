import { useEffect } from "react";

export default function Task({ name, checked, removeTask, toggleTaskStatus }) {
  useEffect(() => {}, [checked]);

  return (
    <>
      <div className="task">
        <label>
          <input
            type="checkbox"
            className="checkBox"
            checked={checked}
            onChange={() => toggleTaskStatus(name)}
          />
        </label>
        <p
          className="content"
          style={{ textDecoration: checked ? "line-through" : "none" }} 
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




