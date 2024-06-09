import React from "react";

const Badge = ({ children, onClose, name }) => {
  return (
    <span className="inline-flex items-center px-2 py-1 me-2 text-sm font-medium bg-default-400 rounded">
      {children}
      <button
        type="button"
        className="inline-flex items-center p-1 ms-2 text-sm text-blue-400 bg-transparent rounded-sm hover:bg-blue-200 hover:text-blue-900 hover:bg-blue-800 hover:text-blue-300"
        onClick={() => onClose()}
      >
        <svg
          className="w-2 h-2"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
      </button>
    </span>
  );
};

export default Badge;
