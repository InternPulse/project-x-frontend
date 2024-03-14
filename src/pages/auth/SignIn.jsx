import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Alert, Spinner } from "flowbite-react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../../redux/user/userSlice";
import { Link, useNavigate } from "react-router-dom";

import signInImage from "../../assets/Rectangle 39.svg";
import internPulseLogo from "../../assets/InternPulseLogo.svg";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error: errorMessage } = useSelector((state) => state.user);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Required please"),
    password: Yup.string().required("Required"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      dispatch(signInStart());
      const response = await axios.post(
        "https://project-x-backend-lbglg.ondigitalocean.app/api/v1/login",
        values
      );

      const data = response.data;
      if (data.success === false) {
        dispatch(signInFailure(data.message));
      } else {
        dispatch(signInSuccess(data));
        navigate("/");

        dispatch(signInFailure(null));
      }
    } catch (error) {
      if (error.response) {
        const errorMessage = error.response.data.message || "An error occurred";
        dispatch(signInFailure(errorMessage));
      } else {
        dispatch(signInFailure("Network error. Please try again later."));
      }
    }
    setSubmitting(false);
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
            {errorMessage && (
              <Alert className="mt-5" color="failure">
                {errorMessage}
              </Alert>
            )}
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="mt-[32px] lg:mt-[45px]">
                  <div className="flex flex-col" style={{ gap: "30px" }}>
                    <div className="flex flex-col">
                      <label
                        style={{ marginBottom: "14px" }}
                        htmlFor="email"
                        className="font-bold"
                      >
                        Enter Email Address
                      </label>
                      <Field
                        type="email"
                        name="email"
                        placeholder="Joepaul@gmail.com"
                        className="rounded-md p-3"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-500 mt-1"
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
                      <Field
                        type="password"
                        name="password"
                        placeholder="*************"
                        className="rounded-md p-3"
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="text-red-500 mt-1"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="rounded-2xl bg-primary-500 w-full text-white p-3  hover:bg-primary-700 mt-[40px] lg:mt-[46px]"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Spinner size="sm" />
                        <span className="pl-3">Loading...</span>
                      </>
                    ) : (
                      "Sign In"
                    )}
                  </button>
                </Form>
              )}
            </Formik>
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
