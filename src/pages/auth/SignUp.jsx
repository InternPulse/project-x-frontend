import internPulseLogo from "../../assets/InternPulseLogo.svg";
import signUpImg from "../../assets/sign-up-image.png";
import { Alert, Spinner } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    agreement: false, // Add a field to track agreement checkbox
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    first_name: Yup.string().required("First name is required"),
    last_name: Yup.string().required("Last name is required"),
    password: Yup.string()
      .required("Password is required")
      .matches(
        /^(?=.*[a-z])/,
        "Password must contain at least one lowercase letter"
      ),
    agreement: Yup.boolean().oneOf(
      [true],
      "Please agree to terms and conditions"
    ), // Validate agreement checkbox
  });

  const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
    try {
      const response = await axios.post(
        "https://project-x-backend-lbglg.ondigitalocean.app/api/v1/signup",
        values
      );
      if (response.status === 201) {
        navigate("/signin");
      }
    } catch (error) {
      if (error.response && error.response.data.errors) {
        const errors = error.response.data.errors;
        Object.keys(errors).forEach((fieldName) => {
          setFieldError(fieldName, errors[fieldName][0]);
        });
      } else {
        setFieldError("password", "An error occurred. Please try again later.");
      }
    }
    setSubmitting(false);
  };

  return (
    <main className="h-screen w-[100%] flex justify-center items-start gap-14">
      <div className="h-[800px]  w-[560px] hidden md:block lg:block">
        <img className="h-full w-full " src={signUpImg} alt="" />
      </div>
      <div className="flex flex-col items-center h-full w-full md:w-1/2 lg:w-1/2 o  bg-neutral-30 md:bg-inherit lg:bg-inherit">
        <Link
          to={"/"}
          className="py-3 px-6 lg:py-5 w-full flex items-center lg:justify-center mb-[45px] lg:mb-[64px] bg-white"
        >
          <img src={internPulseLogo} alt="Intern Pulse Logo" />
        </Link>
        <div className="px-6 w-full">
          <div className="w-full mx-auto lg:w-546">
            <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold">
              Sign up to InternPulse
            </h1>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="mt-[32px] lg:mt-[30px]" autoComplete="off">
                  <div className="flex flex-col" style={{ gap: "30px" }}>
                    <div className="flex flex-col">
                      <label
                        style={{ marginBottom: "8px" }}
                        htmlFor="email"
                        className="font-bold"
                      >
                        Enter Email Address
                      </label>
                      <Field
                        className="rounded-md p-3 placeholder-gray-400"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Joepaul@gmail.com"
                      />
                      <ErrorMessage
                        name="email"
                        component="p"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label
                        style={{ marginBottom: "8px" }}
                        htmlFor="first_name"
                        className="font-bold"
                      >
                        First Name
                      </label>
                      <Field
                        className="rounded-md p-3 placeholder-gray-400"
                        type="text"
                        name="first_name"
                        id="first_name"
                        placeholder="First Name"
                      />
                      <ErrorMessage
                        name="first_name"
                        component="p"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label
                        style={{ marginBottom: "8px" }}
                        htmlFor="last_name"
                        className="font-bold"
                      >
                        Last Name
                      </label>
                      <Field
                        className="rounded-md p-3 placeholder-gray-400"
                        type="text"
                        name="last_name"
                        id="last_name"
                        placeholder="Last Name"
                      />
                      <ErrorMessage
                        name="last_name"
                        component="p"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label
                        style={{ marginBottom: "14px" }}
                        htmlFor="password"
                        className="font-bold"
                      >
                        Password
                      </label>
                      <Field
                        className="rounded-md p-3 placeholder-gray-400"
                        type="password"
                        name="password"
                        id="password"
                        placeholder="*************"
                      />
                      <ErrorMessage
                        name="password"
                        component="p"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                    <div className="flex items-center gap-3 mt-[20px]">
                      <Field
                        type="checkbox"
                        name="agreement"
                        id="agreement"
                        className="mr-2"
                      />
                      <label htmlFor="agreement" className="font-bold">
                        I agree to the terms and conditions
                      </label>
                      <ErrorMessage
                        name="agreement"
                        component="p"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="rounded-2xl bg-primary-500 w-full text-white p-3 md:p-4 lg:p-3 hover:bg-primary-700 mt-[40px] lg:mt-[50px]"
                  >
                    {isSubmitting ? (
                      <>
                        <Spinner size="sm" />
                        <span className="pl-3">Loading...</span>
                      </>
                    ) : (
                      "Sign Up"
                    )}
                  </button>
                </Form>
              )}
            </Formik>
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
