import man from "../../assets/enrollmentImage.png";
import Header from "../../components/Header";

const EnrollmentScreen = () => {
  return (
    <>
      <Header />
      <div className="lg:max-w-[1200px] pl-[24px] pr-[24px] mx-auto mb-[160px]">
        <div className=" flex w-full justify-between">
          <div className=" lg:w-[60%] md:w-full mt-[51px]">
            <h1 className=" text-2xl lg:text-5xl leading-normal lg:leading-normal">
              Be the Hero of Your Story <br /> Shape Your Future with <br />
              <span className=" text-primary-500"> InternPulse.</span>
            </h1>
            <h3 className=" pt-[32px]">
              Kindly fill out this little Survey to proceed{" "}
            </h3>
            <div className=" pt-[32px]">
              <ol>
                <li>
                  1. Do you have any prior experience either through courses,
                  <br className=" hidden lg:block" />
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
                  2. Have you worked on any real-world solutions that solve
                  <br className=" hidden lg:block" />
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
                  <br className=" hidden lg:block" />
                  to land your first tech job or opportunity, etc.)?
                  <div className=" flex gap-[30px] pt-[20px] ">
                    <div>
                      <input
                        type="text"
                        placeholder="Answer"
                        value={""}
                        className=" lg:w-[570px] md:w-[528px] lg:h-[158px] md:h-[88px]   rounded-[5px] border-[1px]  border-solid border-[#63696E]"
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
                        className=" lg:w-[570px] md:w-[528px] lg:h-[158px] md:h-[88px]   rounded-[5px] border-[1px]  border-solid border-[#63696E]"
                      />
                    </div>
                  </div>
                </li>
              </ol>
            </div>
          </div>
          <div className="  lg:w-[50%] hidden lg:block ">
            <img src={man} />
          </div>
        </div>
        <div className="flex gap-4  mt-[66px] ">
          <button className="bg-primary-500 hover:bg-primary-700 text-white  py-2 px-4 rounded-xl mr-2">
            Enroll Now
          </button>
          <button className="bg-neutral-200 hover:bg-neutral-100 border border-solid border-primary-500 text-neutral-700 py-2 px-4 rounded-xl">
            Learn More
          </button>
        </div>
      </div>
    </>
  );
};

export default EnrollmentScreen;
