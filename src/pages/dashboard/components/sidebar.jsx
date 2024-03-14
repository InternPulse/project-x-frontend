import React from "react";
import { Link, useLocation } from "react-router-dom";
import internPulseLogo from "../../../assets/Rectangle 58.png";
import data from "../data/data";
import Slack from "../../../assets/icons/slack.svg";
import ProfileImage from "../../../assets/icons/profile-image.png";

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="min-h-screen w-[100px] relative bg-[#E6EEFA] ">
      <nav className="h-full fixed px-[16px] ">
        <div className="pb-10 sm:w-[45%] ">
          <img src={internPulseLogo} alt="Invoice Pulse" className="w-[100%]" />
        </div>
        <div className="flex flex-col px-[16px] space-y-[16px] font-Montserrat font-[600]">
          {data.map((nav, index) => (
            <div
              key={index}
              className={`flex justify-center items-center cursor-pointer  align-middle ${
                location.pathname === nav.url
                  ? "bg-[#193D71] rounded-[3px] px-[5px] py-[3px]"
                  : ""
              } w-[28px] h-[28px]`}
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
        </div>

        <div
          className={`flex absolute bottom-[100px] items-center  justify-center   cursor-pointer font-Montserrat font-[400] ${
            location.pathname === "/dashboard/slack"
              ? "bg-[#193D71] rounded-[3px] px-[5px] py-[3px]"
              : ""
          } w-[28px] h-[28px]`}
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
          className={`flex absolute bottom-[30px]  items-center  justify-center  px-[5px] py-[3px] cursor-pointer font-Montserrat font-[400]  `}
        >
          <Link to="/dashboard/slack">
            <img src={ProfileImage} alt="" className=" w-[60%]" />
          </Link>
        </div>
      </nav>
    </div>
  );
}
