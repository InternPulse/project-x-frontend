import { useState } from "react";
import LOGO from "../../assets/internPulseLogo.png";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white  relative  border-b border-neutral-200  ">
      <div className="max-w-7xl mx-7 h-[66px] flex justify-between items-center ">
        <div className="ml-[0rem] lg:ml-[6.5rem]">
          <Link to="/" className="flex items-center ">
            <img src={LOGO} alt="Logo" className="h-8 w-auto" />
          </Link>
        </div>
        <div className="hidden md:flex items-center  space-x-4 ">
          <nav className="flex-shrink mr-14 ">
            <as
              href="/#testimonial"
              className="text-gray-600 hover:text-primary-500 px-3 py-2 rounded-md text-sm font-medium"
            >
              Testimonial
            </as>
            <a
              href="/#programs"
              className="text-gray-600 hover:text-primary-500 px-3 py-2 rounded-md text-sm font-medium"
            >
              Programs
            </a>
            <Link
              to="/contact"
              className="text-gray-600 hover:text-primary-500 px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </Link>
            <Link
              to="/HireTalent"
              className="text-gray-600 hover:text-primary-500 px-3 py-2 rounded-md text-sm font-medium"
            >
              Hire Talent
            </Link>
          </nav>
        </div>
        <div>
          <Link to="enrollment ">
            <button className="hidden md:flex bg-primary-500 hover:bg-primary-700 text-white  py-2 px-4 mr-5 rounded-xl text-sm font-medium">
              Enroll Now
            </button>
          </Link>
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
        } md:hidden absolute top-full left-0 w-full bg-primary-500  z-50 text-center `}
      >
        <div className="px-5 py-2 text-white">
          <a href="/#programs" className="block  hover:bg-primary-700 py-3">
            Programs
          </a>
          <a href="/#testimonial" className="block hover:bg-primary-700 py-3">
            Testimonial
          </a>
          <Link to="/contact" className="block  hover:bg-primary-700 py-3">
            Contact
          </Link>
          <Link to="/HireTalent" className="block hover:bg-primary-700 py-3">
            HireTalent
          </Link>
        </div>
        <Link to="/enrollment">
          <button className="bg-primary-300 hover:bg-primary-700 text-white my-10 px-3 py-2 rounded-md text-sm font-medium mt-2 w-[78%]">
            Enroll Now
          </button>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
