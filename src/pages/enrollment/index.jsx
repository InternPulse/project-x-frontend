import axios from "axios";
import man from "../../assets/enrollmentImage.png";
import Header from "../../components/header/Header";
import { useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { Spinner } from "flowbite-react";

const EnrollmentScreen = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    has_experience_programming: false,
    worked_on_real_life_problems: false,
    reason_for_joining_Internpulse: "",
    importance_of_work_exp: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (
      !formData.has_experience_programming ||
      !formData.worked_on_real_life_problems ||
      formData.reason_for_joining_Internpulse.trim() === "" ||
      formData.importance_of_work_exp.trim() === ""
    ) {
      toast.error("Please fill out all the fields");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        "https://project-x-backend-lbglg.ondigitalocean.app/api/v1/questionnaire",
        formData
      );

      if (response.status === 201) {
        toast.success("Form submitted successfully");
        setFormData({
          has_experience_programming: null,
          worked_on_real_life_problems: null,
          reason_for_joining_Internpulse: "",
          importance_of_work_exp: "",
        });
        navigate("/signup");
      } else {
        toast.error("Failed to submit form. Please try again later.");
      }
      console.log(response.data);
    } catch (error) {
      if (error.response) {
        toast.error(`Error: ${error.response.data.message}`);
      } else if (error.request) {
        toast.error("Error: No response received from server.");
      } else {
        toast.error("Error: Request setup failed.");
      }
      console.error("Error submitting form:", error);
    }
    setLoading(false);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
  };

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
              Kindly fill out this little Survey to proceed
            </h3>
            <form onSubmit={handleSubmit}>
              <div className=" pt-[32px]">
                <ol>
                  <li>
                    1. Do you have any prior experience either through courses,
                    <br className=" hidden lg:block" />
                    bootcamps, or self-learning?
                    <div className=" flex gap-[30px] pt-[20px] ">
                      <div>
                        <input
                          type="checkbox"
                          name="has_experience_programming"
                          checked={formData.has_experience_programming}
                          onChange={handleChange}
                          className="m-2"
                        />
                        <label>Yes</label>
                      </div>
                    </div>
                  </li>
                  <li className=" pt-[40px]">
                    2. Have you worked on any real-world solutions that solve
                    <br className=" hidden lg:block" />
                    business problems?
                    <div className=" flex gap-[30px] pt-[20px] ">
                      <div>
                        <input
                          type="checkbox"
                          name="worked_on_real_life_problems"
                          checked={formData.worked_on_real_life_problems}
                          onChange={handleChange}
                          className="m-2"
                        />
                        <label>Yes</label>
                      </div>
                    </div>
                  </li>
                  <li className=" pt-[40px]">
                    3. Why do you want to join us (to gain real-world
                    experience, <br className=" hidden lg:block" />
                    to land your first tech job or opportunity, etc.)?
                    <div className=" flex gap-[30px] pt-[20px] ">
                      <div>
                        <input
                          type="text"
                          name="reason_for_joining_Internpulse"
                          placeholder="Answer"
                          value={formData.reason_for_joining_Internpulse}
                          onChange={handleChange}
                          className=" lg:w-[570px] md:w-[528px] lg:h-[158px] md:h-[88px]   rounded-[5px] border-[1px]  border-solid border-[#63696E]"
                        />
                      </div>
                    </div>

                  </li>
                  <li className=" pt-[40px]">
                    4. On a scale of 1-10, why is gaining evidence of
                    skills/gaining <br /> real-world experience important to
                    you?
                    <div className=" flex gap-[30px] pt-[20px] ">
                      <div>
                        <input
                          type="text"
                          name="importance_of_work_exp"
                          placeholder="Answer"
                          value={formData.importance_of_work_exp}
                          onChange={handleChange}
                          className=" lg:w-[570px] md:w-[528px] lg:h-[158px] md:h-[88px]   rounded-[5px] border-[1px]  border-solid border-[#63696E]"
                        />
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
              <div className="flex gap-4  mt-[66px] ">
                <button
                  type="submit"
                  className="bg-primary-500 hover:bg-primary-700 text-white  py-2 px-4 rounded-xl mr-2"
                >
                  {loading ? (
                    <>
                      <Spinner size="sm" />
                      <span className="pl-3">Loading...</span>
                    </>
                  ) : (
                    "Enroll Now"
                  )}
                </button>
                <button className="bg-neutral-200 hover:bg-neutral-100 border border-solid border-primary-500 text-neutral-700 py-2 px-4 rounded-xl">
                  Learn More
                </button>
              </div>
            </form>

          </div>
          <div className="  lg:w-[50%] hidden lg:block ">
            <img src={man} alt="Enrollment Man" />
          </div>
        </div>
      </div>
    </>
  );
};

export default EnrollmentScreen;
