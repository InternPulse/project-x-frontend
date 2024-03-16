import React from "react";
import { Spinner } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../../slices/userApiSlice";
import { setCredentials } from "../../slices/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import signInImage from "../../assets/Rectangle 39.svg";
import internPulseLogo from "../../assets/InternPulseLogo.svg";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [userInfo, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      toast.success("login Successful");
      navigate("/home");
    } catch (err) {
      console.log(err);
      toast.error(err?.data?.message || "Invalid email or password");
    }
  };

  return (
    <main className="h-screen flex gap-16">
      <div className="h-[700px] w-[500px] hidden md:block lg:block">
        <img className="h-full w-full object-cover" src={signInImage} alt="" />
      </div>
      <div className="flex flex-col items-center h-full w-full md:w-1/2 lg:w-1/2   bg-neutral-30 md:bg-inherit lg:bg-inherit">
        <Link
          to={"/"}
          className="py-3 px-6 lg:py-5 w-full flex items-center lg:justify-center mb-[45px] lg:mb-[70px] bg-white"
        >
          <img src={internPulseLogo} alt="Intern Pulse Logo" />
        </Link>
        <div className="px-6 w-full">
          <div className="w-full mx-auto lg:w-546">
            <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold">
              Sign in to InternPulse
            </h1>

            <form
              onSubmit={(e) => handleSubmit(e)}
              className="mt-[32px] lg:mt-[45px]"
            >
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
                    placeholder="Joepaul@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    placeholder="*************"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="rounded-2xl bg-primary-500 w-full text-white p-3  hover:bg-primary-700 mt-[40px] lg:mt-[46px]"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Spinner size="sm" />
                    <span className="pl-3">Loading...</span>
                  </>
                ) : (
                  "Sign In"
                )}
              </button>
            </form>

            <div className="mt-[40px] lg:mt-[20px]">
              <p className="mb-[16px] lg:mt-[10px]">
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

export default SignIn;
