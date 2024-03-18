import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import data from "../data/data";
import Slack from "../../../assets/icons/slack.svg";
import InterpulseMobileNav from "../../../assets/icons/InternPulseNAV.png";
import hamburger from "../../../assets/icons/hamBurger.png";
import ProfileImage from "../../../assets/icons/profile-image.png";

const MobileNavbar = () => {
  const location = useLocation();

  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav className="lg:hidden bg-white text-white p-4 fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center">
        <Link to="/" className=" w-[30%]">
          <img src={InterpulseMobileNav} className=" object-contain" />
        </Link>
        <button onClick={() => setIsNavOpen(!isNavOpen)} className="">
          {isNavOpen ? (
            <FiX />
          ) : (
            <img src={hamburger} className=" w-[45%] object-contain" />
          )}
        </button>
      </div>
      <div
        className={`fixed top-0 right-0 h-full w-[25%] bg-[#E6EEFA] ${
          isNavOpen ? "block" : "hidden"
        } z-40 transition-all duration-300 ease-in-out`}
        style={{
          transitionProperty: "width, visibility",
        }}
      >
        <ul className="font-barslow text-white flex flex-col mt-8">
          <li>
            <button
              className="text-white focus:outline-none focus:text-white float-right mb-[10px]"
              onClick={() => setIsNavOpen(false)}
            >
              <FiX size="30px" color="#63696E" />
            </button>
          </li>
          {data.map((nav, index) => (
            <div
              key={index}
              className={`flex justify-center mb-[30px] items-center cursor-pointer align-middle mx-[auto] ${
                location.pathname === nav.url
                  ? "bg-[#193D71] rounded-[3px] px-[5px] py-[3px]"
                  : "px-[5px] py-[3px] bg-white rounded-[3px]"
              } w-[32px] h-[32px]`}
            >
              <Link to={nav.url}>
                <img
                  src={nav.svg}
                  alt=""
                  className="w-[100%] h-[100%] object-contain flex justify-center items-center"
                />
              </Link>
            </div>
          ))}
          <div className="pl-[35px]">
            <div
              className={`flex absolute bottom-[100px] items-center justify-center cursor-pointer font-Montserrat font-[400] ${
                location.pathname === "/dashboard/slack"
                  ? "bg-[#193D71] rounded-[3px] px-[5px] py-[3px]"
                  : "px-[5px] py-[3px] bg-white rounded-[3px]"
              } w-[32px] h-[32px]`}
            >
              <Link to="/dashboard/slack">
                <img
                  src={Slack}
                  alt=""
                  className="w-[100%] h-[100%] object-contain flex justify-center items-center"
                />
              </Link>
            </div>
            <div
              className={`flex absolute bottom-[30px] items-center justify-center px-[5px] py-[3px] cursor-pointer font-Montserrat font-[400]`}
            >
              <Link to="/dashboard/profile">
                <img src={ProfileImage} alt="" className="w-[50%]" />
              </Link>
            </div>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default MobileNavbar;
