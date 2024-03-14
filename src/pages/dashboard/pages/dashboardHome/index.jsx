import React from "react";
import Line from "../../../../assets/icons/Line.png";
import message from "../../../../assets/icons/message.png";
import notification from "../../../../assets/icons/notify.png";
import tasks from "../../../../assets/icons/tasks-icon.svg";
import stage from "../../../../assets/icons/stage-icon.svg";
import peers from "../../../../assets/icons/peers-icon.svg";

const DashboardHome = () => {
  return (
    <div>
      <div className="flex justify-between items-center mt-[12px]">
        {" "}
        <h1 className=" ml-[84px] text-4xl">Dashboard</h1>
        <div className="flex justify-between mr-[84px]">
          <img
            src={message}
            alt="Message"
            className=" object-contain w-[20%]"
          />
          <img
            src={notification}
            alt="Notification"
            className=" object-contain w-[20%]"
          />
        </div>
      </div>

      <img src={Line} />

      {/* Body */}
      <div className=" ml-[84px] w-[55%] mt-[18px]">
        <div className="bg-[#2967BC] pl-[67px] pr-[150px] pt-[25px] pb-[42px] text-white rounded-[25px]">
          <p className=" text-3xl pb-[10px]">Welcome Back Daniel!</p>
          <p className=" text-1xl">Role: Product Manager</p>
        </div>
        <div className=" mt-[18px] flex gap-[13px]">
          <div className=" border border-solid border-gray-500 w-[140px] h-[140px] rounded-[7px] flex flex-col justify-between items-center py-[7px] ">
            <img src={peers} className=" object-contain w-[30%]" />
            <p>Peers</p>
            <p>20</p>
          </div>
          <div className=" border border-solid border-gray-500 w-[140px] h-[140px] rounded-[7px] flex flex-col justify-between items-center py-[7px] ">
            <img src={stage} className=" object-contain w-[30%]" />
            <p>Sttage</p>
            <p>0</p>
          </div>
          <div className=" border border-solid border-gray-500 w-[140px] h-[140px] rounded-[7px] flex flex-col justify-between items-center py-[7px] ">
            <img src={tasks} className=" object-contain w-[30%]" />
            <p>Task</p>
            <p>3</p>
          </div>
        </div>
        <div className=" border border-solid border-gray-500 mt-[32px] py-[12px] px-[7px] rounded-[16px] leading-6">
          <p className=" text-[12px]">
            Welcome to InternPulse a pathway to gaining real-life experience
            through collaboration, Hand-on tasks working more interaction are
            done on slack{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
