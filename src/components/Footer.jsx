import React from "react";
import LinkedIn from "../assets/LinkedIn.png";
import Facebook from "../assets/Facebook.png";
import Twitter from "../assets/Twitter.png";
import Instagram from "../assets/Instagram.png";

const Footer = () => {
  return (
    <footer className="p-6 sm:p-10 bg-primary-500">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-between gap-10 mb-[4rem]">
        <div className="w-full sm:w-[411px]">
          <h2 className="text-white text-2xl font-bold mb-4">InternPulse</h2>
          <div className="mb-4">
            <p className="text-white text-sm sm:text-base mb-4">
              We help new developers, product designers, & managers gain real
              working experience within 8 weeks
            </p>
            <div className="flex gap-4">
              <a href="/">
                <img src={LinkedIn} alt="" />
              </a>
              <a href="/">
                <img src={Twitter} alt="" />
              </a>
              <a href="/">
                <img src={Instagram} alt="" />
              </a>
              <a href="/">
                <img src={Facebook} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-auto">
          <h2 className="text-white  font-semibold mb-4">Useful Links</h2>
          <div className="flex flex-col sm:items-start items-start justify-start sm:justify-center  gap-2">
            <a href="#" className="text-white text-sm">
              Home
            </a>
            <a href="#" className="text-white text-sm">
              About us
            </a>
            <a href="#" className="text-white text-sm">
              Programs
            </a>
            <a href="#" className="text-white text-sm">
              Hire Talent
            </a>
            <a href="#" className="text-white text-sm">
              Contact Us
            </a>
          </div>
        </div>
        <div className="w-full sm:w-auto">
          <p className="text-white text-sm mb-4">
            Subscribe to our Newsletter for latest trends and information
          </p>

          <form className="mb-4">
            <label htmlFor="search" className="sr-only">
              Search
            </label>
            <div className="relative">
              <input
                type="search"
                id="search"
                className="block w-full p-3 pr-10 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email"
                required
              />

              <button
                type="submit"
                className="absolute top-0 right-0 bottom-0 px-5  m-[1.5px] py-2 bg-primary-500 hover:bg-primary-700 text-white rounded-lg text-sm focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
      <hr className="bg-primary-300 mb-4" />

      <div className="flex  flex-row items-center sm:items-center justify-between sm:gap-4 gap-2  text-[0.6rem] sm:text-base">
        <div className="text-white">&copy; 2024 . All rights reserved.</div>
        <div className="flex flex-row items-center justify-between gap-4">
          <div className="text-white ">Privacy Policy</div>
          <div className="text-white ">Terms and Conditions</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
