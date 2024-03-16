import internPulseLogo from "../../assets/InternPulseLogo.svg";
import signUpImg from "../../assets/sign-up-image.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Spinner } from "flowbite-react";
import { useSignupMutation } from "../../slices/userApiSlice";
import { setCredentials } from "../../slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect } from "react";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    questionnaire_id: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    first_name: Yup.string().required("First name is required"),
    last_name: Yup.string().required("Last name is required"),
    password: Yup.string().required("Password is required"),
  });

  const [signup, { isLoading }] = useSignupMutation();
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      toast.info("please complete your registratioin");
      navigate("/profileform");
    }
  }, [navigate, userInfo]);

  const handleSubmit = async (values) => {
    const { email, first_name, last_name, password, questionnaire_id } = values;
    try {
      const res = await signup({
        email,
        first_name,
        last_name,
        password,
      }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate("/home");
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
        console.log(err);
        toast.error(
          err?.data?.message ||
            err.error ||
            "An error occured. please try again "
        );
      }
    }
  };

  return (
    <main className="h-screen w-[100%] flex justify-center items-start gap-14">
      <div className="h-[800px]  w-[560px] hidden md:block lg:block">
        <img className="h-full w-full " src={signUpImg} alt="" />
      </div>
      <div className="flex flex-col items-center h-full w-full md:w-1/2 lg:w-1/2 o  bg-neutral-30 md:bg-inherit lg:bg-inherit">
        <div className="py-3 px-6 lg:py-5 w-full flex items-center lg:justify-center mb-[45px] lg:mb-[64px] bg-white">
          <img src={internPulseLogo} alt="Intern Pulse Logo" />
        </div>
        <div className="px-6 w-full">
          <div className="w-full mx-auto lg:w-546">
            <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold">
              Sign up to InternPulse
            </h1>

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(e) => handleSubmit(e)}
            >
              <Form className="mt-[32px] lg:mt-[30px]" autoComplete="off">
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
                      className="rounded-md p-3"
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
                      style={{ marginBottom: "14px" }}
                      htmlFor="first_name"
                      className="font-bold"
                    >
                      First Name
                    </label>
                    <Field
                      className="rounded-md p-3"
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
                      style={{ marginBottom: "14px" }}
                      htmlFor="last_name"
                      className="font-bold"
                    >
                      Last Name
                    </label>
                    <Field
                      className="rounded-md p-3"
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
                      Enter Your Password
                    </label>
                    <Field
                      className="rounded-md p-3"
                      type="password"
                      name="password"
                      id="password"
                      placeholder="**********"
                    />
                    <ErrorMessage
                      name="password"
                      component="p"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                  {/* <div className="flex flex-col">
                    <label
                      style={{ marginBottom: "14px" }}
                      htmlFor="password"
                      className="font-bold"
                    >
                      questionnaire id
                    </label>
                    <Field
                      className="rounded-md p-3"
                      type="text"
                      name="questionnaire_id"
                      id="questionnaire_id"
                      placeholder="questionnaire_id"
                    />
                    <ErrorMessage
                      name="questionnaire_id"
                      component="p"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div> */}
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
              </Form>
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
