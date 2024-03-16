import React, { useState } from "react";
import { Link } from "react-router-dom";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="lg:hidden bg-gray-900 text-white p-4 ">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Your Logo
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none focus:text-white"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="mt-4">
          <Link
            to="/"
            className="block py-2 px-4 text-sm hover:bg-gray-800 rounded"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block py-2 px-4 text-sm hover:bg-gray-800 rounded"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block py-2 px-4 text-sm hover:bg-gray-800 rounded"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default MobileNavbar;
