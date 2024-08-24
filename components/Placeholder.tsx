import React from 'react';

const Placeholder: React.FC = () => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-100"
      style={{ zIndex: 1000 }} // add a high z-index to ensure it's on top of everything
    >
      <div className="text-center">
        <p className="text-xl font-semibold">Loading...</p>
        <div className="mt-4">
          <svg
            className="w-12 h-12 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Placeholder;