import React from "react";
import man from "../../assets/enrollmentImage.png";
import Header from "../../components/Header";

const EnrollmentScreen = () => {
  return (
    <>
      <Header />
      <div className="max-w-[1200px] mx-auto">
        <div className=" flex w-full justify-between">
          <div className=" lg:w-[60%] md:w-full mt-[51px]">
            <h1 className=" text-5xl leading-normal">
              Be the Hero of Your Story <br /> Shape Your Future with <br />
              <span className=" text-primary-500"> InternPluse.</span> 
            </h1>
            <h3 className=" pt-[32px]">
              Kindly fill out this little Survey to proceed{" "}
            </h3>
            <div className=" pt-[32px]">
              <ol>
                <li>
                  1. Do you have any prior experience either through courses,{" "}
                  <br />
                  bootcamps, or self-learning?
                  <div className=" flex gap-[30px] pt-[20px] ">
                    <div>
                      <input type="radio" value={""} /> <label>Yes</label>
                    </div>
                    <div>
                      <input type="radio" value={""} /> <label>No</label>
                    </div>
                  </div>
                </li>
                <li className=" pt-[40px]">
                  2. Have you worked on any real-world solutions that solve{" "}
                  <br />
                  business problems?
                  <div className=" flex gap-[30px] pt-[20px] ">
                    <div>
                      <input type="radio" value={""} /> <label>Yes</label>
                    </div>
                    <div>
                      <input type="radio" value={""} /> <label>No</label>
                    </div>
                  </div>
                </li>
                <li className=" pt-[40px]">
                  3. Why do you want to join us (to gain real-world experience,{" "}
                  <br />
                  to land your first tech job or opportunity, etc.)?
                  <div className=" flex gap-[30px] pt-[20px] ">
                    <div>
                      <input
                        type="text"
                        placeholder="Answer"
                        value={""}
                        style={{
                          width: "570px",
                          height: "158px",
                          borderRadius: "5px",
                          border: " 1px solid #63696E",
                        }}
                      />
                    </div>
                  </div>
                </li>
                <li className=" pt-[40px]">
                  4. On a scale of 1-10, why is gaining evidence of
                  skills/gaining <br /> real-world experience important to you?
                  <div className=" flex gap-[30px] pt-[20px] ">
                    <div>
                      <input
                        type="text"
                        placeholder="Answer"
                        value={""}
                        style={{
                          width: "570px",
                          height: "158px",
                          borderRadius: "5px",
                          border: " 1px solid #63696E",
                        }}
                      />
                    </div>
                  </div>
                </li>
              </ol>
            </div>
          </div>
          <div className="  lg:w-[50%] ">
            <img src={man} />
          </div>
        </div>
      </div>
    </>
  );
};

export default EnrollmentScreen;
