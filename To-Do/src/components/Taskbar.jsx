import React from "react";

const Taskbar = () => {
  return (
    <div className="w-120 mt-10">
      <ul className="list bg-base-100 rounded-box shadow-md gap-2">
        <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
          All todo shows here
        </li>

        <li className="list-row">
          <div className="text-4xl font-thin opacity-30 tabular-nums">01</div>
          {/* <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/1@94.webp"/></div> */}
          <div className="list-col-grow">
            <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos corporis minus iure porro id nisi cupiditate ex suscipit eum soluta saepe vel optio qui aliquid, officiis praesentium possimus, aut deserunt!</div>
            <div className="text-xs uppercase font-semibold opacity-60"></div>
          </div>
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-trash-icon lucide-trash"
            >
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
              <path d="M3 6h18" />
              <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            </svg>
          </button>
        </li>

        <li className="list-row">
          <div className="text-4xl font-thin opacity-30 tabular-nums">01</div>
          {/* <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/1@94.webp"/></div> */}
          <div className="list-col-grow">
            <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum porro dicta nulla. Nam, totam omnis ducimus earum libero dolorum voluptatibus!</div>
            <div className="text-xs uppercase font-semibold opacity-60"></div>
          </div>
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-trash-icon lucide-trash"
            >
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
              <path d="M3 6h18" />
              <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            </svg>
          </button>
        </li>


      </ul>
    </div>
  );
};

export default Taskbar;
