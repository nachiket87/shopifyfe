/* eslint react/prop-types: 0 */
import React from "react";

const ErrorMessage = ({ displayError, setDisplayError }) => {
  return (
    <div
      className={`relative sticky top-0 inset-x-0 top-0 h-16 flex items-center bg-red-500 border-l-4 border-red-700 py-2 px-3 shadow-md mb-2 ${
        displayError ? `` : `hidden`
      }`}
    >
      <div
        className="text-red-500 rounded-full bg-white mr-3 cursor-pointer"
        onClick={() => setDisplayError(false)}
      >
        <svg
          width="1.8em"
          height="1.8em"
          viewBox="0 0 16 16"
          className="bi bi-x"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"
          />
          <path
            fillRule="evenodd"
            d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"
          />
        </svg>
      </div>
      <div className="text-white max-w-xs ">
        {`You've maxed your nominee list`}
      </div>
    </div>
  );
};

export default ErrorMessage;
