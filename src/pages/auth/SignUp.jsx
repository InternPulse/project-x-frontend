import internPulseLogo from "../../assets/InternPulseLogo.svg";
import signUpImg from "../../assets/sign-up-image.png";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <main className="h-screen flex">
      <div className="h-full w-1/2 hidden md:block lg:block">
        <img className="h-full w-full object-cover" src={signUpImg} alt="" />
      </div>
      <div className="flex flex-col items-center h-full w-full md:w-1/2 lg:w-1/2 overflow-y-scroll  bg-neutral-30 md:bg-inherit lg:bg-inherit">
        <Link to={'/'} className="py-3 px-6 lg:py-5 w-full flex items-center lg:justify-center mb-[45px] lg:mb-[70px] bg-white">
          <img src={internPulseLogo} alt="Intern Pulse Logo" />
        </Link>
        <div className="px-6 w-full">
          <div className="w-full mx-auto lg:w-546">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">
              Sign up to InternPulse
            </h1>
            <form action="" className="mt-[32px] lg:mt-[52px]">
              <div className="flex flex-col" style={{ gap: "30px" }}>
                <div className="flex flex-col">
                  <label
                    style={{ marginBottom: "14px" }}
                    htmlFor="email"
                    className="font-bold"
                  >
                    Enter Email Address
                  </label>
                  <input
                    className="rounded-md p-3 placeholder-gray-400"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Joepaul@gmail.com"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    style={{ marginBottom: "14px" }}
                    htmlFor="fullname"
                    className="font-bold"
                  >
                    Full Name
                  </label>
                  <input
                    className="rounded-md p-3 placeholder-gray-400"
                    type="text"
                    id="fullname"
                    name="fullname"
                    placeholder="Joe Paul"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    style={{ marginBottom: "14px" }}
                    htmlFor="number"
                    className="font-bold"
                  >
                    Phone Number
                  </label>
                  <input
                    className="rounded-md p-3 placeholder-gray-400"
                    type="number"
                    id="number"
                    name="number"
                    placeholder="+2348031104192"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    style={{ marginBottom: "14px" }}
                    htmlFor="country"
                    className="font-bold"
                  >
                    Phone Number
                  </label>
                  <select
                    name="country"
                    id="country"
                    className="rounded-md p-3 placeholder-gray-400"
                  >
                    <option value="Country" selected disabled>
                      Country
                    </option>
                    <option value="Nigeria">Nigeria</option>
                    <option value="Ghana">Ghana</option>
                    <option value="South Africa">South Africa</option>
                    <option value="Kenya">Kenya</option>
                    <option value="Morocco">Morocco</option>
                    <option value="Senegal">Senegal</option>
                    <option value="others">others</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label
                    style={{ marginBottom: "14px" }}
                    htmlFor="career"
                    className="font-bold"
                  >
                    Phone Number
                  </label>
                  <select
                    name="career"
                    id="career"
                    className="rounded-md p-3 placeholder-gray-400"
                  >
                    <option value="Choose Career" selected disabled>
                      Choose Career
                    </option>
                    <option value="Frontend Development">
                      Frontend Development
                    </option>
                    <option value="Backend Development">
                      Backend Development
                    </option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Product Management">
                      Product Management
                    </option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label
                    style={{ marginBottom: "14px" }}
                    htmlFor="linkedIn"
                    className="font-bold"
                  >
                    LinkedIn URL
                  </label>
                  <input
                    className="rounded-md p-3 placeholder-gray-400"
                    type="text"
                    id="linkedIn"
                    name="linkedIn"
                    placeholder="www.linkedin.com/JoePaul"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    style={{ marginBottom: "14px" }}
                    htmlFor="portfolioURL"
                    className="font-bold"
                  >
                    Github/Notion/Behance URL
                  </label>
                  <input
                    className="rounded-md p-3 placeholder-gray-400"
                    type="text"
                    id="portfolioURL"
                    name="portfolioURL"
                    placeholder="Portfolio URL"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    style={{ marginBottom: "14px" }}
                    htmlFor="X-URL"
                    className="font-bold"
                  >
                    X URL
                  </label>
                  <input
                    className="rounded-md p-3 placeholder-gray-400"
                    type="text"
                    id="URL"
                    name="URL"
                    placeholder="www.x.com/JoePaul"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    style={{ marginBottom: "14px" }}
                    htmlFor="occupation"
                    className="font-bold"
                  >
                    Occupation
                  </label>
                  <input
                    className="rounded-md p-3 placeholder-gray-400"
                    type="text"
                    id="occupation"
                    name="occupation"
                    placeholder="Student"
                  />
                </div>
              </div>
              <div className="mt-[40px] lg:mt-[25px]">
                <p>
                  Would you Kindly consent to allowing us to store your
                  information? Rest assured, your information will not be sold
                  or misused.
                </p>
                <span className="flex items-center gap-3 mt-[20px]">
                  <input type="checkbox" name="" id="" />
                  <p className="font-bold">I agree</p>
                </span>
                <button className="rounded-2xl bg-primary-500 w-full text-white p-3 md:p-4 lg:p-4 hover:bg-primary-700 mt-[40px] lg:mt-[50px]">
                  Sign Up
                </button>
              </div>
            </form>
            <div className="mt-[20px] lg:mt-[42px]">
              <p className="mb-[16px] lg:mt-[30px]">
                <span className="font-bold">* </span>
                <span className="text-neutral-700 font-normal">
                  Already have an account with us?
                </span>
                <Link to={"/SignIn"} className="font-semibold ml-1">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignUp;
