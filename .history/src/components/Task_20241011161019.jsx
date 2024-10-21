import { useEffect } from "react";

export default function Task({ name, checked, removeTask, toggleTaskStatus }) {

  useEffect(() => {
    // No need for direct DOM manipulation via refs. React will handle it.
  }, [checked]);

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







