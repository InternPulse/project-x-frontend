import hireTalentImg from "../../assets/hire-talent-img.svg";
import internPulseLogo from "../../assets/InternPulseLogo.svg";
// import dragIcon from "../../assets/drag-icon.svg";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSnackbar } from "notistack";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

const HireTalent = () => {
  const [formData, setFormData] = useState({
    company_name: "",
    company_mail: "",
    company_website: "",
    company_requirements: "",
    job_position: "",
    proposed_salary: "",
  });

  const [loading, setLoading] = useState(false);
  const [timerComplete, setTimerComplete] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (timerComplete) {
      // Navigate to the home page
      navigate("/");
    }
  }, [timerComplete, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "https://project-x-backend-lbglg.ondigitalocean.app/api/v1/talent-request",
        formData
      );
      // Handle the response, e.g., display a success message, redirect, etc.
      console.log(response.data);
      enqueueSnackbar(response.data.message, { variant: "success" });
      setLoading(false);
      setTimeout(() => {
        setTimerComplete(true);
      }, 3000);
    } catch (error) {
      // Handle errors, e.g., display an error message
      setLoading(false);
      console.error("Signup failed:", error.response.data);
      enqueueSnackbar(error.response.data.message, { variant: "error" });
    }
  };

  return (
    <main className="h-screen flex flex-row-reverse">
      <div className="h-full w-1/2 hidden md:block lg:block">
        <img
          className="h-full w-full object-cover"
          src={hireTalentImg}
          alt="hire talent image"
        />
      </div>
      <div className="flex flex-col items-center h-full w-full md:w-1/2 lg:w-1/2 overflow-y-scroll bg-neutral-30 md:bg-inherit lg:bg-inherit hire-talent pb-6">
        <div className="py-3 px-6 lg:px-0 lg:py-5 w-full lg:w-[543px] flex items-center mb-[45px] lg:mb-[70px] bg-white">
          <img src={internPulseLogo} alt="Intern Pulse Logo" />
        </div>
        <div className="px-6 w-full">
          <div className="w-full mx-auto lg:w-[543px]">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold lg:flex flex-col gap-4">
              <span>Discover Top Tech</span> <span>Talent with </span>
              <span className="text-primary-500">InternPulse</span>
            </h1>
            <p className="text-neutral-600 mt-5">
              Discovering the right talent is key to unlocking your company{"'"}
              s success. We empower companies to trust in their talent search by
              providing a streamlined process for finding exceptional tech
              professionals.
            </p>
            <form onSubmit={handleSubmit} className="mt-[32px] lg:mt-[52px]">
              <div className="flex flex-col" style={{ gap: "30px" }}>
                <div className="flex flex-col">
                  <label
                    style={{ marginBottom: "14px" }}
                    htmlFor="companyName"
                    className="font-bold"
                  >
                    Company Name
                  </label>
                  <input
                    className="rounded-md p-3"
                    type="text"
                    id="companyName"
                    placeholder="Colney.inc"
                    name="company_name"
                    value={formData.company_name}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    style={{ marginBottom: "14px" }}
                    htmlFor="companyEmail"
                    className="font-bold"
                  >
                    Company Email
                  </label>
                  <input
                    className="rounded-md p-3"
                    type="email"
                    id="companyEmail"
                    placeholder="example123@colney.inc"
                    name="company_mail"
                    value={formData.company_mail}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    style={{ marginBottom: "14px" }}
                    htmlFor="companyWebsite"
                    className="font-bold"
                  >
                    Company Website
                  </label>
                  <input
                    className="rounded-md p-3"
                    type="text"
                    id="companyWebsite"
                    placeholder="www.colney.inc"
                    name="company_website"
                    value={formData.company_website}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    style={{ marginBottom: "14px" }}
                    htmlFor="companyRequirement"
                    className="font-bold"
                  >
                    Company Requirement
                  </label>
                  <textarea
                    className="rounded-md p-3"
                    id="companyRequirement"
                    cols="30"
                    rows="5"
                    name="company_requirements"
                    value={formData.company_requirements}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="flex flex-col">
                  <label
                    style={{ marginBottom: "14px" }}
                    htmlFor="jobPosition"
                    className="font-bold"
                  >
                    Job Position
                  </label>
                  <input
                    className="rounded-md p-3"
                    type="text"
                    id="jobPosition"
                    placeholder="Frontend developer"
                    name="job_position"
                    value={formData.job_position}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    style={{ marginBottom: "14px" }}
                    htmlFor="salariesIncentives"
                    className="font-bold"
                  >
                    Salaries / Incentives
                  </label>
                  <textarea
                    className="rounded-md p-3"
                    id="salariesIncentives"
                    cols="30"
                    rows="5"
                    name="proposed_salary"
                    value={formData.proposed_salary}
                    onChange={handleChange}
                  ></textarea>
                </div>
                {/* <div className="flex flex-col">
                  <label
                    style={{ marginBottom: "14px" }}
                    htmlFor="jobRequirement"
                    className="font-bold"
                  >
                    Upload Job Requirement document
                    <span className="text-neutral-400"> (Optional)</span>
                  </label>
                  <input
                    type="file"
                    name="jobRequirement"
                    id="jobRequirement"
                    className="rounded-md border border-dashed border-black p-8"
                  />
                  <input
                    type="file"
                    className="rounded-md border border-dashed border-black p-8"
                    id="salariesIncentives"
                  >
                    <div className="flex font-md">
                      <img src={dragIcon} alt="" />
                      <span className="text-neutral-500 ml-1">
                        Drag here or
                      </span>
                      <span className="ml-1 cursor-pointer">Browse</span>
                    </div>
                    <p className="text-neutral-500 mt-2">
                      Allowed Type(s): .pdf, .doc. .docx, . docx, .png
                    </p>
                  </input>
                </div> */}
              </div>
              <button className="rounded-2xl bg-primary-500 w-full text-white p-3 md:p-4 lg:p-4 hover:bg-primary-700 mt-[40px] lg:mt-[50px]">
                {loading ? <ClipLoader color={"white"} size={25} /> : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HireTalent;
