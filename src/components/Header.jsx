import { useState } from "react";
import LOGO from "../assets/InternPulse.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white  relative  border-b border-neutral-200">
      <div className="max-w-7xl mx-6 h-[66px] flex justify-between items-center lg:mx-auto">
        <div>
          <a href="/" className="flex items-center h-full">
            <img src={LOGO} alt="Logo" className="h-9 w-auto" />
          </a>
        </div>
        <div className="hidden md:flex items-center  space-x-4">
          <nav className="flex-shrink ">
            <a
              href="#"
              className="text-gray-600 hover:text-primary-500 px-3 py-2 rounded-md text-sm font-medium"
            >
              Testimonial
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-primary-500 px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-primary-500 px-3 py-2 rounded-md text-sm font-medium"
            >
              Hire Talent
            </a>
          </nav>
          <div>
            <button className="bg-primary-500 hover:bg-primary-700 text-white  py-2 px-4 rounded-xl text-sm font-medium">
              Enroll Now
            </button>
          </div>
        </div>
        <div className="md:hidden">
          <button
            type="button"
            onClick={toggleMenu}
            className="bg-gray-100 p-2 rounded inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-400"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open menu</span>
            {/* Heroicon name: menu */}
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <nav
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden absolute top-full left-0 w-full bg-white border rounded-lg`}
      >
        <div className="px-4 py-2">
          <a
            href="#"
            className="block text-gray-600 hover:text-primary-500 py-1"
          >
            Testimonial
          </a>
          <a
            href="#"
            className="block text-gray-600 hover:text-primary-500 py-1"
          >
            Contact
          </a>
          <a
            href="#"
            className="block text-gray-600 hover:text-primary-500 py-1"
          >
            Hire Talent
          </a>
        </div>
        <button className="bg-primary-500 hover:bg-blue-700 text-white px-3 py-2 rounded-md text-sm font-medium mt-2 w-full">
          Enroll Now
        </button>
      </nav>
    </header>
  );
}

export default Header;
