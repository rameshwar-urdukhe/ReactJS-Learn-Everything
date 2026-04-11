import React from "react";

const Pagination = ({ index, setIndex }) => {
  return (
    <div className="flex items-center justify-center mt-10 mb-6">
      <div className="inline-flex items-center bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        {/* Previous Button */}
        <button
          onClick={() => setIndex(index - 1)} // Wrapped in arrow function
          disabled={index <= 1} // Added <= 1 for safety
          className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed border-r border-gray-200 transition-colors"
        >
          <svg
            className="w-5 h-5 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Prev
        </button>

        {/* Page Indicator */}
        <div className="px-6 py-2 bg-gray-50/50">
          <p className="text-sm text-gray-600 font-medium">
            Page <span className="text-blue-600 font-bold">{index}</span>
          </p>
        </div>

        {/* Next Button */}
        <button
          onClick={() => setIndex(index + 1)} // Wrapped in arrow function
          className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed border-l border-gray-200 transition-colors"
        >
          Next
          <svg
            className="w-5 h-5 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
