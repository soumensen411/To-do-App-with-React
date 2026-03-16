const Taskbar = ({ todos, onDelete }) => {
  return (
    <div className="w-96 mt-10">

      {/* Filter UI */}
      <div className="flex gap-2 mb-4 justify-center">
        <button className="btn btn-sm btn-outline">All</button>
        <button className="btn btn-sm btn-outline">Pending</button>
        <button className="btn btn-sm btn-outline">Done</button>
      </div>

      <ul className="list bg-base-100 rounded-box shadow-md">
        <li className="p-4 text-sm opacity-70">All Todos</li>

        {todos.map((todo, index) => (
          <li
            key={todo.id}
            className="list-row flex items-center justify-between px-4 py-3 border-t"
          >
            <div className="flex items-center gap-4">
              <span className="text-lg font-light opacity-50">{index + 1}</span>

              <span
                className={`${todo.completed ? "line-through" : ""} font-medium`}
              >
                {todo.text}
              </span>
            </div>

            <button
              className="btn btn-ghost btn-sm"
              onClick={() => onDelete(todo.id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-trash"
              >
                <path d="M3 6h18" />
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Taskbar;