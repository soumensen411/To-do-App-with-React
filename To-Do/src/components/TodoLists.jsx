import React, { useState } from "react";

const TodoLists = ({ todos, onDel, onToggle }) => {
  const [filter, setFilter] = useState("all");

  const filtered = todos.filter((todo) => {
    if (filter === "pending") return !todo.completed;
    if (filter === "done") return todo.completed;
    return true;
  });
  const total = todos.length;
  const pending = todos.filter((t) => !t.completed).length;
  const done = todos.filter((t) => t.completed).length;

  return (
    <div className=" w-180 item-center mt-10">
      <div className="text-center mb-5">
        <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
          {[
            { label: "All", value: "all", count: total },
            { label: "Pending", value: "pending", count: pending },
            { label: "Done", value: "done", count: done },
          ].map(({ label, value, count }) => (
            <li key={value}>
              <button
                onClick={() => setFilter(value)}
                className={filter === value ? "active font-bold" : " "}
              >
                {label}
                <span>{count}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <ul className="list bg-neutral-900 rounded-box  shadow-md">
        <li className="p-4 pb-2 text-xl opacity-60 tracking-wide">
          <span>
            {filter === "all" && "All Todos"}
            {filter === "pending" && "Pending Todos"}
            {filter === "done" && "Completed Todos"}
          </span>{" "}
          <span className="text-sm opacity-50">{filtered.length} items</span>
        </li>

        {filtered.length === 0 && (
          <li className="py-10 text-center text-sm opacity-40">
            {filter === "done" ? "No completed todos yet!" : ""}
            {filter === "pending" ? "All caught up! 🎉" : ""}
            {filter === "all" ? "No todos yet. Add one!" : ""}
          </li>
        )}
        {filtered.map((todo, index) => (
          <li
            key={todo.id}
            className=" list-row border-t border-white items-center"
          >
            <div className="text-4xl font-thin opacity-30 tabular-nums">
              {index < 9 ? `0${index + 1}` : `${index + 1}`}
            </div>
            <input
              className="checkbox checkbox-sm"
              checked={todo.completed}
              onChange={() => onToggle(todo.id)}
              type="checkbox"
            />
            <div className="list-col-grow ">
              <div className="items-center">{todo.text}</div>
            </div>

            <span>
              {todo.completed ? (
                <div className="badge badge-soft badge-success">Done</div>
              ) : (
                <div className="badge badge-soft badge-primary">Pending</div>
              )}
            </span>
            <button
              className="btn btn-square btn-ghost"
              onClick={() => onDel(todo.id)}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoLists;
