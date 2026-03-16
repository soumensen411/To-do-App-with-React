import React from "react";

const Header = ({
  title = "To Do List",
  subTitle = "Stay organized Stay Productive",
}) => {
  return (
    <div>
      <span className="mt-10 flex items-center gap-2">
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
          class="lucide lucide-calendar-check-icon lucide-calendar-check"
        >
          <path d="M8 2v4" />
          <path d="M16 2v4" />
          <rect width="18" height="18" x="3" y="4" rx="2" />
          <path d="M3 10h18" />
          <path d="m9 16 2 2 4-4" />
        </svg>{" "}
        <h1 className="text-lg font-bold">{title}</h1>
      </span>
      <p>{subTitle}</p>
    </div>
  );
};

export default Header;
