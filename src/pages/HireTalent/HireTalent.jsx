import hireTalentImg from "../../assets/hire-talent-img.svg";
import internPulseLogo from "../../assets/InternPulse logo 32px.svg";
import dragIcon from "../../assets/drag-icon.svg";

const HireTalent = () => {
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
            <form action="" className="mt-[32px] lg:mt-[52px]">
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
                    name="companyName"
                    id="companyName"
                    placeholder="Colney.inc"
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
                    name="companyEmail"
                    placeholder="example123@colney.inc"
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
                    name="companyWebsite"
                    id="companyWebsite"
                    placeholder="www.colney.inc"
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
                    name="companyRequirement"
                    id="companyRequirement"
                    cols="30"
                    rows="5"
                  ></textarea>
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
                    name="salariesIncentives"
                    id="salariesIncentives"
                    cols="30"
                    rows="5"
                  ></textarea>
                </div>
                <div className="flex flex-col">
                  <label
                    style={{ marginBottom: "14px" }}
                    htmlFor="salariesIncentives"
                    className="font-bold"
                  >
                    Upload Job Requirement document
                    <span className="text-neutral-400"> (Optional)</span>
                  </label>

                  <div
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
                  </div>
                </div>
              </div>
              <button className="rounded-2xl bg-primary-500 w-full text-white p-3 md:p-4 lg:p-4 hover:bg-primary-700 mt-[40px] lg:mt-[50px]">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HireTalent;
