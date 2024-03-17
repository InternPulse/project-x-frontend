import React from "react";
import message from "../../../../assets/icons/message.png";
import notification from "../../../../assets/icons/notify.png";
import tasks from "../../../../assets/icons/tasks-icon.svg";
import stage from "../../../../assets/icons/stage-icon.svg";
import peers from "../../../../assets/icons/peers-icon.svg";
import MobileNavbar from "../../components/mobilenav";
import { Link } from "react-router-dom";

const DashboardHome = () => {
  return (
    <div>
      <MobileNavbar />
      <div className="flex justify-between items-center mt-[12px]">
        <h1 className="lg:ml-[84px] ml-[40px] lg:text-4xl text-2xl">
          Dashboard
        </h1>
        <div className="flex justify-between mr-[84px]">
          <img
            src={message}
            alt="Message"
            className="object-contain w-[20%] hidden lg:block"
          />
          <img
            src={notification}
            alt="Notification"
            className="object-contain w-[20%] hidden lg:block"
          />
        </div>
      </div>

      {/* Line underneath Dashboard text and Notification icons */}
      <hr
        className="hidden lg:block"
        style={{
          width: "100%",
          marginTop: "8px",
          marginBottom: "8px",
        }}
      />

      {/* Body */}
      <div className="lg:ml-[84px] lg:w-[55%] w-[80%] mt-[18px] mx-[auto]">
        <div className="bg-[#2967BC] lg:pl-[67px] pl-[9px] py-[14px] lg:pr-[150px] lg:pt-[25px] lg:pb-[42px] text-white lg:rounded-[25px] rounded-[5px]">
          <p className="lg:text-2xl text-[16px] pb-[10px]">
            Welcome Back Daniel!
          </p>
          <p className="lg:text-1xl text-[12px]">Role: Product Manager</p>
        </div>
        <div className="mt-[18px] flex gap-[13px]">
          <Link to="/dashboard/team">
            <div className="border border-solid border-gray-300 w-[110px] h-[110px] rounded-[7px] flex flex-col justify-between items-center py-[7px] cursor-pointer">
              <img src={peers} className="object-contain w-[30%]" alt="Peers" />
              <p>Peers</p>
              <p>20</p>
            </div>
          </Link>
          <div className="border border-solid border-gray-300 w-[110px] h-[110px] rounded-[7px] flex flex-col justify-between items-center py-[7px] cursor-pointer">
            <img src={stage} className="object-contain w-[30%]" alt="Stage" />
            <p>Stage</p>
            <p>0</p>
          </div>
          <div className="border border-solid border-gray-300 w-[110px] h-[110px] rounded-[7px] flex flex-col justify-between items-center py-[7px] cursor-pointer">
            <img src={tasks} className="object-contain w-[30%]" alt="Task" />
            <p>Task</p>
            <p>3</p>
          </div>
        </div>
        <div className="border border-solid border-gray-500 mt-[32px] py-[12px] px-[7px] rounded-[16px] leading-6">
          <p className="text-[12px]">
            Welcome to InternPulse a pathway to gaining real-life experience
            through collaboration, Hand-on tasks working more interaction are
            done on slack
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
