import React from "react";
import { Link, useLocation } from "react-router-dom";
import internPulseLogo from "../../../assets/Rectangle 58.png";
import data from "../data/data";

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="min-h-screen w-[80px] relative bg-[#E6EEFA] ">
      <nav className="h-full fixed mx-[16px] ">
        <div className="pb-10 sm:w-[45%] ">
          <img src={internPulseLogo} alt="Invoice Pulse" className="w-[100%]" />
        </div>
        <div className="flex flex-col px-[16px] space-y-[16px] font-Montserrat font-[600]">
          {data.map((nav, index) => (
            <div
              key={index}
              className={`flex justify-center items-center cursor-pointer align-middle p-[1px]  ${
                location.pathname === nav.url ? "bg-black rounded-[3px]" : ""
              } w-[28px] h-[28px]`}
            >
              <Link to={nav.url}>
                <img
                  src={nav.svg}
                  alt=""
                  className="w-[100%] h-[100%] object-contain"
                />
              </Link>
            </div>
          ))}
        </div>
        {/* <div className="flex absolute bottom-[30px] items-center mt-[420px] p-6 space-x-3 font-Montserrat font-[400]">
          <img src={question} alt="" />
          <Link to="/help">Help</Link>
        </div> */}
      </nav>
    </div>
  );
}
