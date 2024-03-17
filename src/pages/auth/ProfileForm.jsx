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
import { logout } from "../../slices/authSlice";

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
    can_share_PI: false,
  };

  const validationSchema = Yup.object().shape({
    address: Yup.string().required("Address is required"),
    number: Yup.string().required("Phone number is required"),
    country: Yup.string().required("Country is required"),
    state: Yup.string().required("State is required"),
    city: Yup.string().required("city is required "),
    zip_code: Yup.string().required("zip code is required"),
    career_path: Yup.string().required("Career path is required"),
    linkedin_url: Yup.string()
      .url("Invalid URL")
      .required("LinkedIn URL is required"),
    github_url: Yup.string().url("Invalid URL"),
    x_url: Yup.string().url("Invalid URL"),
    occupation: Yup.string().required("Occupation is required"),
    can_share_PI: Yup.boolean().required("This option is required"),
  });

  const { access } = useSelector((state) => state.auth.userInfo.data);

  const [createProfile, { isLoading }] = useCreateProfileMutation({
    headers: {
      Authorization: `JWT ${access}`,
    },
  });

  console.log(access);
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
      can_share_PI,
    } = values;

    // Create a new FormData object
    const formData = new FormData();

    // Append form fields to FormData
    formData.append("address", address);
    formData.append("number", number);
    formData.append("country", country);
    formData.append("state", state);
    formData.append("city", city);
    formData.append("zip_code", zip_code);
    formData.append("career_path", career_path);
    formData.append("linkedin_url", linkedin_url);
    formData.append("github_url", github_url);
    formData.append("x_url", x_url);
    formData.append("occupation", occupation);
    formData.append("can_share_PI", can_share_PI);

    try {
      const res = await createProfile({
        data: formData,
        access,
      }).unwrap();

      dispatch(setCredentials({ ...res }));
      navigate("/dashboard");
    } catch (err) {
      console.log(err);
      if (err.status === 401) {
        // Unauthorized error (invalid or expired token)
        dispatch(logout());
        navigate("/SignIn"); // Redirect to login page
        toast.error("Session expired. Please log in again.");
      } else if (err.status === "PARSING_ERROR") {
        // Parsing error
        toast.error("An unexpected error occurred. Please try again later.");
      } else if (err.status === 400 && err.data && err.data.errors) {
        // Validation errors
        const validationErrors = Object.values(err.data.errors).flat();
        validationErrors.forEach((error) => {
          toast.error(error);
        });
      } else {
        // Other errors
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
    <main className="h-screen  flex  gap-14">
      <div className="h-[800px]   w-[550px]  hidden md:block lg:block">
        <img className="h-full w-full " src={signUpImg} alt="" />
      </div>
      <div className="flex flex-col items-center h-full w-full md:w-1/2 lg:w-1/2 o  bg-neutral-30 md:bg-inherit lg:bg-inherit">
        <div className="py-3 px-6 lg:py-5 w-full flex items-center lg:justify-center mb-[45px] lg:mb-[64px] bg-white">
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
                <Form
                  className="mt-[32px] lg:mt-[52px] "
                  encType="multipart/form-data"
                >
                  <div className="flex flex-col" style={{ gap: "30px" }}>
                    <div className="flex flex-col">
                      <label htmlFor="address">Address</label>
                      <Field
                        name="address"
                        type="text"
                        placeholder="Address"
                        className="rounded-md p-3 placeholder-gray-400"
                        disabled={isLoading}
                      />
                      <ErrorMessage
                        name="address"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="address">Phone Number</label>

                      <Field
                        name="number"
                        type="text"
                        placeholder="Phone Number"
                        className="rounded-md p-3 placeholder-gray-400"
                        disabled={isLoading}
                      />
                      <ErrorMessage
                        name="number"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="address">Country</label>

                      <Field
                        name="country"
                        type="text"
                        placeholder="Country"
                        className="rounded-md p-3 placeholder-gray-400"
                        disabled={isLoading}
                      />
                      <ErrorMessage
                        name="country"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="address">State</label>

                      <Field
                        name="state"
                        type="text"
                        placeholder="State"
                        className="rounded-md p-3 placeholder-gray-400"
                        disabled={isLoading}
                      />
                      <ErrorMessage
                        name="state"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="address">City</label>

                      <Field
                        name="city"
                        type="text"
                        placeholder="City"
                        className="rounded-md p-3 placeholder-gray-400"
                        disabled={isLoading}
                      />
                      <ErrorMessage
                        name="city"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="address">ZIP Code</label>

                      <Field
                        name="zip_code"
                        type="text"
                        placeholder="ZIP Code"
                        className="rounded-md p-3 placeholder-gray-400"
                        disabled={isLoading}
                      />
                      <ErrorMessage
                        name="zip_code"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="address">Career Path</label>

                      <Field
                        name="career_path"
                        type="text"
                        placeholder="Career Path"
                        className="rounded-md p-3 placeholder-gray-400"
                        disabled={isLoading}
                      />
                      <ErrorMessage
                        name="career_path"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="address">LinkedIn URL</label>

                      <Field
                        name="linkedin_url"
                        type="text"
                        placeholder="LinkedIn URL"
                        className="rounded-md p-3 placeholder-gray-400"
                        disabled={isLoading}
                      />
                      <ErrorMessage
                        name="linkedin_url"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="address">GitHub URL</label>

                      <Field
                        name="github_url"
                        type="text"
                        placeholder="GitHub URL"
                        className="rounded-md p-3 placeholder-gray-400"
                        disabled={isLoading}
                      />
                      <ErrorMessage
                        name="github_url"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="address">X URL</label>

                      <Field
                        name="x_url"
                        type="text"
                        placeholder="X URL"
                        className="rounded-md p-3 placeholder-gray-400"
                        disabled={isLoading}
                      />
                      <ErrorMessage
                        name="x_url"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="address">Occupation</label>
                      <Field
                        name="occupation"
                        type="text"
                        placeholder="Occupation"
                        className="rounded-md p-3 placeholder-gray-400"
                        disabled={isLoading}
                      />
                      <ErrorMessage
                        name="occupation"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="address">can_share_PI</label>

                      <Field
                        name="can_share_PI"
                        as="select"
                        className="rounded-md p-3 placeholder-gray-400"
                        disabled={isLoading}
                      >
                        <option value="false">False</option>
                        <option value="true">True</option>
                      </Field>
                      <ErrorMessage
                        name="can_share_PI"
                        component="div"
                        className="text-red-500"
                      />
                    </div>

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
                          name="checkbox"
                          id="checkbox"
                          checked={agreed}
                          onChange={(e) => setAgreed(e.target.checked)}
                        />
                        <label htmlFor="checkbox" className="font-bold">
                          I agree
                        </label>
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
                          "Sign up"
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
