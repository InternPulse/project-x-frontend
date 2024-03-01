import React from "react";
import logo from "../../assets/InternPulse.png";

const Loading = () => {
  return (
    <div className="grid place-items-center w-full h-screen">
      <div className="flex justify-center items-center">
        <img
          src={logo}
          alt="logo"
          className="object-contain w-full md:w-1/2 lg:w-full"
        />
      </div>
    </div>
  );
};

export default Loading;
