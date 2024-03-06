import internPulseLogo from "../../assets/InternPulseLogo.svg";
import resetPasswordImg from "../../assets/reset-password-img.svg";

const ResetPassword = () => {
  return (
    <main className="h-screen flex">
      <div className="h-full w-1/2 hidden md:block lg:block">
        <img
          className="h-full w-full object-cover"
          src={resetPasswordImg}
          alt=""
        />
      </div>
      <div className="flex flex-col items-center h-full w-full md:w-1/2 lg:w-1/2 overflow-y-scroll  bg-neutral-30 md:bg-inherit lg:bg-inherit">
        <div className="py-3 px-6 lg:py-5 w-full flex items-center lg:justify-center mb-[45px] lg:mb-[70px] bg-white shadow-lg md:shadow-none lg:shadow-none">
          <img src={internPulseLogo} alt="Intern Pulse Logo" />
        </div>
        <div className="px-6 w-full">
          <div className="w-full mx-auto lg:w-546">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">
              Reset Password
            </h1>
            <form action="" className="mt-[32px] lg:mt-[52px]">
              <div className="flex flex-col" style={{ gap: "30px" }}>
                <div className="flex flex-col">
                  <label
                    style={{ marginBottom: "14px" }}
                    htmlFor="password"
                    className="font-bold"
                  >
                    Enter your new Password
                  </label>
                  <input
                    className="rounded-md p-3"
                    type="password"
                    id="password"
                    name="password"
                    placeholder="*************"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    style={{ marginBottom: "14px" }}
                    htmlFor="password"
                    className="font-bold"
                  >
                    Confirm Password
                  </label>
                  <input
                    className="rounded-md p-3"
                    type="password"
                    id="password"
                    name="password"
                    placeholder="*************"
                  />
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

export default ResetPassword;
