import { useState } from "react";

const Todotask = ({ onAdd }) => {
  const [text, setText] = useState("");
  function handleSubmit() {
    if (text.trim() === "") return;
    onAdd(text.trim());
    setText("");
  }

  const handleKeyDown = (e) => {
    if (e.key === "enter") {
      handleSubmit();
    }
  };
  return (
    <div>
      <div className="join mt-5">
        <div>
          <label className="w-80 input validator join-item ">
            <input
              type="text"
              placeholder="Add Task.."
              required
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
              onKeyDown={handleKeyDown}
            />
          </label>
        </div>
        <button className="rounded-r-lg btn btn-neutral" onClick={handleSubmit}>
          Add+
        </button>
      </div>
    </div>
  );
};

export default Todotask;
