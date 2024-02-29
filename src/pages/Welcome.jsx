import welcomeImage from "../assets/Rectangle 40.svg";
import internPulseLogo from "../assets/InternPulse logo 32px.svg";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <main className="h-screen flex">
      <div className="h-full w-1/2 hidden md:block lg:block">
        <img className="h-full w-full object-cover" src={welcomeImage} alt="" />
      </div>
      <div className="flex flex-col items-center h-full w-full md:w-1/2 lg:w-1/2 overflow-y-scroll bg-neutral-30 md:bg-inherit lg:bg-inherit">
        <div className="py-3 px-6 lg:py-5 w-full flex items-center lg:justify-center mb-[45px] lg:mb-[70px] bg-white">
          <img src={internPulseLogo} alt="Intern Pulse Logo" />
        </div>
        <div className="px-6 w-full">
          <div className="w-full mx-auto lg:w-546">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">
              Welcome to InternPulse
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
                    className="rounded-md p-3"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="joepaul@gmail.com"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    style={{ marginBottom: "14px" }}
                    htmlFor="password"
                    className="font-bold"
                  >
                    Enter Password
                  </label>
                  <input
                    className="rounded-md p-3"
                    type="password"
                    id="password"
                    name="password"
                    placeholder="********"
                  />
                </div>
              </div>
              <button className="rounded-2xl bg-primary-500 w-full text-white p-3 md:p-4 lg:p-4 hover:bg-primary-700 mt-[40px] lg:mt-[50px]">
                Login
              </button>
            </form>
            <div className="mt-[40px] lg:mt-[72px]">
              <p className="mb-[16px] lg:mt-[30px]">
                <span className="font-bold">* </span>
                <span className="text-neutral-700 font-normal">
                  Don{"'"}t have an account?
                </span>
                <Link to={"/SignUp"} className="font-semibold ml-1">
                  Create Account
                </Link>
              </p>
              <p>
                <span className="font-bold">* </span>
                <span className="text-neutral-700 font-normal">
                  Forgot Password?
                </span>
                <span className="font-semibold"> Reset Password</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Welcome;
