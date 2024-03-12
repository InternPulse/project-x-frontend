import { useState } from "react";
import LOGO from "../../assets/internPulseLogo.png";
import { Link } from "react-router-dom";

const OrderConfirmation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <main>
      <header className="bg-white relative border-b border-neutral-200">
        <div className="max-w-[1320px] mx-auto h-[66px] flex justify-between items-center px-5">
          <div>
            <Link to="/" className="flex items-center h-[80%] w-[100%]">
              <img src={LOGO} alt="Logo" className="h-8 w-auto" />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-10">
            <nav className="flex-shrink">
              <a
                href="/#testimonial"
                className="text-gray-600 hover:text-primary-500 px-3 py-2 rounded-md text-sm font-medium"
              >
                Cart
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-primary-500 px-3 py-2 rounded-md text-sm font-medium"
              >
                Checkout
              </a>
              <Link
                to="/contact"
                className="text-gray-600 hover:text-primary-500 px-3 py-2 rounded-md text-sm font-medium"
              >
                My Account
              </Link>
              <Link
                to="/HireTalent"
                className="text-gray-600 hover:text-primary-500 px-3 py-2 rounded-md text-sm font-medium"
              >
                Store
              </Link>
            </nav>
            {/* <div>
            <Link to="/Enrollment">
              <button className="bg-primary-500 hover:bg-primary-700 text-white  py-2 px-4 rounded-xl text-sm font-medium">
                Enroll Now
              </button>
            </Link>
          </div> */}
          </div>

          {/* MOBILENavbar*/}
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
            <a href="/programs" className="block  hover:bg-primary-700 py-3">
              Programs
            </a>
            <a href="/testimonial" className="block hover:bg-primary-700 py-3">
              Testimonial
            </a>
            <Link to="/contact" className="block  hover:bg-primary-700 py-3">
              Contact
            </Link>
            <Link to="/HireTalent" className="block hover:bg-primary-700 py-3">
              HireTalent
            </Link>
          </div>
          {/* <Link to="/enrollment">
          <button className="bg-primary-300 hover:bg-primary-700 text-white my-10 px-3 py-2 rounded-md text-sm font-medium mt-2 w-[78%]">
            Enroll Now
          </button>
        </Link> */}
        </nav>
      </header>
      <section className="max-w-[1320px] mx-auto px-6">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mt-[34px] lg:mt-[64px]">
          Thank You. Your Order has been received.
        </h1>
        <div className="mt-[44px] lg:mt-[64px]">
          <p className="font-semibold text-2xl lg:text-4xl mb-[20px] lg:mb-[40px]">
            Order Information
          </p>
          <div className="flex flex-col lg:flex-row w-full justify-between gap-2 lg:gap-0">
            <span>
              <h4 className="text-[17px] lg:text-[24px]">Order Number:</h4>
              <p>5780</p>
            </span>
            <span>
              <h4 className="text-[17px] lg:text-[24px]">Date:</h4>
              <p>February 27, 2024</p>
            </span>
            <span>
              <h4 className="text-[17px] lg:text-[24px]">Email:</h4>
              <p>Joepaul@gmail.com</p>
            </span>
            <span>
              <h4 className="text-[17px] lg:text-[24px]">Total:</h4>
              <p>$5,000.00</p>
            </span>
            <span>
              <h4 className="text-[17px] lg:text-[24px]">Payment Method:</h4>
              <p>Direct bank transfer</p>
            </span>
          </div>
        </div>
        <div className="mt-[47px] lg:mt-[67px]">
          <p className="font-semibold text-2xl lg:text-4xl">Order Summary</p>
          <table className="w-full mt-[20px] lg:mt-[46px]">
            <thead className="p-4">
              <th className="text-left border border-gray-400 px-6 py-4">
                Item
              </th>
              <th className="text-right border border-gray-400 px-6 py-4">
                Total
              </th>
            </thead>
            <tbody>
              <td className="border border-gray-400 px-6 py-4">
                Frontend Development
              </td>
              <td className="text-right border border-gray-400 px-6 py-4">
                $5,000.00
              </td>
            </tbody>
            <tfoot>
              <th className="text-left border border-gray-400 px-6 py-4">
                Total
              </th>
              <td className="text-right border border-gray-400 px-6 py-4">
                $5,000.00
              </td>
            </tfoot>
          </table>
        </div>
        <div className="mt-[47px] lg:mt-[67px]">
          <p className="font-semibold text-2xl lg:text-4xl">Billing Address</p>
          <div className="border border-gray-400 w-full lg:w-1/2 mt-[20px] lg:mt-[46px] pt-5 px-5 pb-12 flex flex-col rounded-lg">
            <span className="text-[18px] lg:text-[22px]">Joe Paul</span>
            <span className="text-[18px] lg:text-[22px]">Nigeria</span>
            <span className="text-[18px] lg:text-[22px]">Lagos</span>
            <span className="text-[18px] lg:text-[22px]">
              joepaul@gmail.com
            </span>
            <span className="text-[18px] lg:text-[22px]">+2348031104192</span>
          </div>
        </div>
        <div className="mt-[47px] lg:mt-[67px]">
          <p className="text-2xl md:text-4xl lg:text-5xl font-medium mt-[34px] lg:mt-[64px]">
            Our bank details
          </p>
          <p className="font-normal text-2xl lg:text-3xl mb-[10px] lg:mb-[20px] mt-[24px]">
            Order Information
          </p>
          <ul className="list-disc ml-6">
            <li className="font-bold lg:text-2xl">Bank:</li>
            <li className="font-bold lg:text-2xl">Account Number:</li>
          </ul>
        </div>
      </section>
      <footer className="w-full h-[194px] lg:h-[294px] bg-primary-50 mt-[50px] lg:mt-[106px]">
        <div className="max-w-[1320px] mx-auto px-6 flex flex-col justify-center h-full gap-[24px] lg:gap-[44px]">
          <p className="text-primary-500 font-medium text-[32px]">
            InternPulse
          </p>
          <p className="text-[14px] lg:text-[20px]">
            Getting you equipped for a full time <br /> role through real life
            experience
          </p>
        </div>
      </footer>
    </main>
  );
};

export default OrderConfirmation;
