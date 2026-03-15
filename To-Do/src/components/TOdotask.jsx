import React, { useState } from "react";

const TOdotask = () => {
  const [task, setTask] = useState("");
  const [description,setDescription] = useState("");
  const [todos,setTodos] = useState([]);
  const tasks = [];
  function handleSubmit(e) {
    e.preventDefault();
    setTodos(...todos,{})
    console.log(task);
  }
  tasks.push(task);

  // function submit() {

  return (
    <div>
      <div className="join mt-5">
        <div>
          <label className="w-80 input validator join-item ">
            <input
              onChange={(e) => {
                setTask(e.target.value);
              }}
              value={task}
              type="text"
              placeholder="Add Task.."
              required
            />
          </label>
        </div>
        <button onClick={handleSubmit} className="rounded-r-lg btn btn-neutral">
          Add+
        </button>
      </div>
    </div>
  );
};

export default TOdotask;
