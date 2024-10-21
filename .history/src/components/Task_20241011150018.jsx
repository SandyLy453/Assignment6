import { useState, useEffect, useRef } from "react";

export default function Task({ name, removeTask }) {
  const checkboxRef = useRef(null);
  const taskNameRef = useRef(null);

  useEffect(() => {
    const checkbox = checkboxRef.current;
    const crossText = taskNameRef.current;

    if (checkbox && crossText) {
      const handleCheckBoxChange = () => {
        if (checkbox.checked) {
          crossText.style.textDecoration = "line-through";
        } else {
          crossText.style.textDecoration = "none";
        }
      };

      checkbox.addEventListener("change", handleCheckBoxChange);

      return () => {
        checkbox.removeEventListener("change", handleCheckBoxChange);
      };
    }
  }, []);

  return (
    <>
      <div className="task">
        <label>
          <input type="checkbox" ref={checkboxRef} />
        </label>
        <p ref={taskNameRef}>{name}</p>
        <button className="task-delete" onClick={() => removeTask(name)}>
          Remove
        </button>
      </div>
    </>
  );
}





