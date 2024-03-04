import { useState } from "react";
import LOGO from "../../assets/InternPulse.png";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white  relative  border-b border-neutral-200  ">
      <div className="max-w-7xl mx-6 h-[66px] flex justify-between items-center ">
        <div>
          <a href="/" className="flex items-center h-full">
            <img src={LOGO} alt="Logo" className="h-9 w-auto" />
          </a>
        </div>
        <div className="hidden md:flex items-center  space-x-4">
          <nav className="flex-shrink mr-14">
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
            className=" p-2 rounded inline-flex items-center justify-center  hover:bg-primary-50 text-primary-500  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
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
        } md:hidden absolute top-full left-0 w-full bg-primary-500  text-center `}
      >
        <div className="px-5 py-2 text-primary-100">
          <a href="#" className="block  hover:text-primary-200 py-3">
            Programs
          </a>
          <a href="#" className="block hover:text-primary-200 py-3">
            Testimonial
          </a>
          <a href="#" className="block  hover:text-primary-200 py-3">
            Contact
          </a>
          <a href="#" className="block hover:text-primary-200 py-3">
            Hire Talent
          </a>
        </div>
        <button className="bg-primary-200 hover:bg-primary-300 text-primary-50 my-10 px-3 py-2 rounded-md text-sm font-medium mt-2 w-[78%]">
          Enroll Now
        </button>
      </nav>
    </header>
  );
}

export default Header;
