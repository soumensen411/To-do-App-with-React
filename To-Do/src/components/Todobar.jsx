import React, { useState } from "react";

const Todobar = ({ onAdd }) => {
  const [task, setTask] = useState("");
  function handleAdd() {
    if (task.trim() === "") return;
    onAdd(task.trim());
    setTask("");
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleAdd();
    }
  }
  return (
    <div className="flex justify-center mt-6">
      <div className="join shadow-md rounded-lg overflow-hidden">
        <div className="relative">
          <input
            onChange={(e) => setTask(e.target.value)}
            value={task}
            type="text"
            placeholder="Add your task..."
            className="input input-bordered join-item w-72 pl-10 focus:outline-none"
            onKeyDown={handleKeyDown}
          />

          <span className="absolute left-3 top-1/2 -translate-y-1/2 opacity-50">
            ✏️
          </span>
        </div>

        <button
          onClick={handleAdd}
          className="btn btn-neutral join-item px-6 hover:scale-105 transition"
        >
          ADD
        </button>
      </div>
    </div>
  );
};

export default Todobar;
