import { useEffect } from "react";

export default function Task({ name, checked, removeTask, toggleTaskStatus }) {

  useEffect(() => {
    const checkbox = checkboxRef.current;
    const crossText = taskNameRef.current;

    // Handle the initial checked state
    if (checked) {
      checkbox.checked = true;
      crossText.style.textDecoration = "line-through";
    } else {
      checkbox.checked = false;
      crossText.style.textDecoration = "none";
    }

    const handleCheckBoxChange = () => {
      toggleTaskStatus(name);
    };

    checkbox.addEventListener("change", handleCheckBoxChange);

    return () => {
      checkbox.removeEventListener("change", handleCheckBoxChange);
    };
  }, [name, checked, toggleTaskStatus]);

  return (
    <>
      <div className="task">
        <label>
          <input type="checkbox" className="checkBox"/>
        </label>
        <p className="content">{name}</p>
        <button className="task-delete" onClick={() => removeTask(name)}>
          Remove
        </button>
      </div>
    </>
  );
}







