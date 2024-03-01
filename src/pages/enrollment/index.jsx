import React from "react";
import man from "../../assets/enrollmentImage.png";
import Header from "../../components/Header";

const EnrollmentScreen = () => {
  return (
    <>
      <Header />
      <div className="max-w-[1200px] mx-auto">
        <div className=" flex w-full justify-between">
          <div className=" w-[60%] mt-[51px]">
            <h1 className=" text-5xl leading-normal">
              Be the Hero of Your Story <br /> Shape Your Future with <br />
              <span className=" text-primary-500"> InternPluse.</span> 
            </h1>
          </div>
          <div className=" w-[50%] ">
            <img src={man} />
          </div>
        </div>
      </div>
    </>
  );
};

export default EnrollmentScreen;
