import React, { useState } from "react";
import internPulseLogo from "../../assets/InternPulseLogo.svg";
import signUpImg from "../../assets/sign-up-image.svg";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Spinner } from "flowbite-react";
import { useCreateProfileMutation } from "../../slices/userApiSlice";
import { setCredentials } from "../../slices/authSlice";
import { useDispatch, useSelector } from "react-redux";

import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect } from "react";

const ProfileForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [agreed, setAgreed] = useState(false);

  const initialValues = {
    address: "",
    number: "",
    country: "",
    state: "",
    city: "",
    zip_code: "",
    career_path: "",
    linkedin_url: "",
    github_url: "",
    x_url: "",
    occupation: "",
  };

  const validationSchema = Yup.object().shape({
    address: Yup.string().required("Address is required"),
    number: Yup.string().required("Phone number is required"),
    country: Yup.string().required("Country is required"),
    state: Yup.string(),
    city: Yup.string(),
    zip_code: Yup.string(),
    career_path: Yup.string().required("Career path is required"),
    linkedin_url: Yup.string()
      .url("Invalid URL")
      .required("LinkedIn URL is required"),
    github_url: Yup.string().url("Invalid URL"),
    x_url: Yup.string().url("Invalid URL"),
    occupation: Yup.string().required("Occupation is required"),
  });

  const [createProfile, { isLoading }] = useCreateProfileMutation();
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      toast.info("please complete your registratioin");
      navigate("/profileform");
    }
  }, [navigate, userInfo]);

  const handleSubmit = async (values, { setSubmitting }) => {
    const {
      address,
      number,
      country,
      state,
      city,
      zip_code,
      career_path,
      linkedin_url,
      github_url,
      x_url,
      occupation,
    } = values;

    try {
      const res = await createProfile({
        address,
        number,
        country,
        state,
        city,
        zip_code,
        career_path,
        linkedin_url,
        github_url,
        x_url,
        occupation,
      }).unwrap();

      dispatch(setCredentials({ ...res }));
      navigate("/dashboard");
    } catch (err) {
      console.log(err);
      if (err.status === "PARSING_ERROR") {
        toast.error("An unexpected error occurred. Please try again later.");
      } else if (err.status === 400 && err.data && err.data.errors) {
        const validationErrors = Object.values(err.data.errors).flat();
        validationErrors.forEach((error) => {
          toast.error(error);
        });
      } else {
        toast.error(
          err?.data?.message ||
            err.error ||
            "An error occurred. Please try again."
        );
      }
    }

    setSubmitting(false);
  };

  return (
    <main className="h-screen flex">
      <div className="h-[800px]  w-[560px] hidden md:block lg:block">
        <img className="h-full w-full " src={signUpImg} alt="" />
      </div>
      <div className="flex flex-col items-center h-full w-full md:w-1/2 lg:w-1/2  bg-neutral-30 md:bg-inherit lg:bg-inherit">
        <div className="py-3 px-6 lg:py-5 w-full flex items-center lg:justify-center mb-[45px] lg:mb-[70px] bg-white">
          <img src={internPulseLogo} alt="Intern Pulse Logo" />
        </div>
        <div className="px-6 w-full">
          <div className="w-full mx-auto lg:w-546">
            <h1 className="text-2xl md:text-4xl lg:text-4xl font-bold">
              Create Your InternPulse Profile
            </h1>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting }) =>
                handleSubmit(values, setSubmitting)
              }
            >
              {({ isSubmitting }) => (
                <Form className="mt-[32px] lg:mt-[52px]">
                  <div className="flex flex-col" style={{ gap: "30px" }}>
                    <Field
                      name="address"
                      type="text"
                      placeholder="Address"
                      className="rounded-md p-3 placeholder-gray-400"
                    />
                    <ErrorMessage
                      name="address"
                      component="div"
                      className="text-red-500"
                    />

                    <Field
                      name="number"
                      type="text"
                      placeholder="Phone Number"
                      className="rounded-md p-3 placeholder-gray-400"
                    />
                    <ErrorMessage
                      name="number"
                      component="div"
                      className="text-red-500"
                    />

                    <Field
                      name="country"
                      type="text"
                      placeholder="Country"
                      className="rounded-md p-3 placeholder-gray-400"
                    />
                    <ErrorMessage
                      name="country"
                      component="div"
                      className="text-red-500"
                    />

                    <Field
                      name="state"
                      type="text"
                      placeholder="State"
                      className="rounded-md p-3 placeholder-gray-400"
                    />
                    <ErrorMessage
                      name="state"
                      component="div"
                      className="text-red-500"
                    />

                    <Field
                      name="city"
                      type="text"
                      placeholder="City"
                      className="rounded-md p-3 placeholder-gray-400"
                    />
                    <ErrorMessage
                      name="city"
                      component="div"
                      className="text-red-500"
                    />

                    <Field
                      name="zip_code"
                      type="text"
                      placeholder="ZIP Code"
                      className="rounded-md p-3 placeholder-gray-400"
                    />
                    <ErrorMessage
                      name="zip_code"
                      component="div"
                      className="text-red-500"
                    />

                    <Field
                      name="career_path"
                      type="text"
                      placeholder="Career Path"
                      className="rounded-md p-3 placeholder-gray-400"
                    />
                    <ErrorMessage
                      name="career_path"
                      component="div"
                      className="text-red-500"
                    />

                    <Field
                      name="linkedin_url"
                      type="text"
                      placeholder="LinkedIn URL"
                      className="rounded-md p-3 placeholder-gray-400"
                    />
                    <ErrorMessage
                      name="linkedin_url"
                      component="div"
                      className="text-red-500"
                    />

                    <Field
                      name="github_url"
                      type="text"
                      placeholder="GitHub URL"
                      className="rounded-md p-3 placeholder-gray-400"
                    />
                    <ErrorMessage
                      name="github_url"
                      component="div"
                      className="text-red-500"
                    />

                    <Field
                      name="x_url"
                      type="text"
                      placeholder="X URL"
                      className="rounded-md p-3 placeholder-gray-400"
                    />
                    <ErrorMessage
                      name="x_url"
                      component="div"
                      className="text-red-500"
                    />

                    <Field
                      name="occupation"
                      type="text"
                      placeholder="Occupation"
                      className="rounded-md p-3 placeholder-gray-400"
                    />
                    <ErrorMessage
                      name="occupation"
                      component="div"
                      className="text-red-500"
                    />

                    {/* Agreement checkbox */}
                    <div className="mt-[40px] lg:mt-[25px]">
                      <p>
                        Would you Kindly consent to allowing us to store your
                        information? Rest assured, your information will not be
                        sold or misused.
                      </p>
                      <div className="flex items-center gap-3 mt-[20px]">
                        <input
                          type="checkbox"
                          name="agreement"
                          id="agreement"
                          checked={agreed}
                          onChange={(e) => setAgreed(e.target.checked)}
                        />
                        <label htmlFor="agreement" className="font-bold">
                          I agree
                        </label>
                      </div>
                      <button
                        type="submit"
                        disabled={!agreed || isSubmitting}
                        className="rounded-2xl bg-primary-500 w-full text-white p-3 md:p-4 lg:p-4 hover:bg-primary-700 mt-[40px] lg:mt-[50px]"
                      >
                        {isLoading ? (
                          <>
                            <Spinner size="sm" />
                            <span className="pl-3">Loading...</span>
                          </>
                        ) : (
                          "Create Profile"
                        )}
                      </button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProfileForm;
