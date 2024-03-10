import HeroImage from "../../assets/HeroImage.png";
import Man from "../../assets/man-home.svg";
import PrettyLady from "../../assets/prettyLady.svg";
import ExcitedMan from "../../assets/excitedMan.svg";
import Curve from "../../assets/Curve.png";
import Skills from "./components/Skills";
import Programs from "./components/Programs";
import Slider from "./components/Slider";
import AccordionData from "./accordion/AccordionData";
import InternFrame from "../../assets/InternFrame.svg";
import JaneDoe from "../../assets/JaneDoe.svg";

import Layout from "../../components/layout/Layout";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Layout>
      <div className="max-w-[1440px] ">
        <section className="flex flex-col lg:flex-row  gap-10 justify-between  sm:min-h-[80%]  h-[650px]   lg:mb-[4rem] mb-[-10rem] px-[1rem] sm:px-[8rem]  ">
          <div className="relative md:mt-[80px] flex flex-col items-center lg:items-start mt-[50px] lg:w-[480px] min-h-[204px] ">
            <div className="text-center lg:text-left ">
              <h2 className="text-4xl font-bold mb-8 leading-[1.3]">
                Looking for{" "}
                <span className="text-primary-500">Opportunity</span> to gain
                Relevant Work{" "}
                <span className="text-accent-700">Experience?</span>
              </h2>

              <p className="text-gray-700 mb-5 bg-neut">
                At InternPulse, you explore exciting opportunities to gain
                hands-on experience on real-life projects that can be tailored
                to your resume and portfolio.
              </p>
            </div>

            <div className="mt-8 flex gap-4 justify-start md:justify-center items-center ">
              <Link to="/enrollment">
                <button className="bg-primary-500 hover:bg-primary-700 text-white py-2 px-4 rounded-xl mr-2">
                  Enroll Now
                </button>
              </Link>
              <button className="bg-neutral-200 hover:bg-neutral-100 border border-solid border-primary-500 text-neutral-700 py-2 px-4 rounded-xl">
                Learn More
              </button>
            </div>

            <div className="absolute bottom-[0px] left-[227px] hidden lg:flex ">
              <img src={Curve} alt="" className="w-[70%]" />
            </div>
          </div>

          <div className="hidden lg:flex w-[315px] animate-bounce-custom ">
            <img
              src={HeroImage}
              alt="Hero Image"
              className="h-[100%] w-full "
            />
          </div>
        </section>
        <section className=" flex gap-[4rem] flex-col justify-center items-center  lg:flex-row   p-[3rem] md:p-[5rem]">
          <div className="lg:w-[483px]  text-center lg:text-left">
            <h2 className="text-2xl font-bold mb-8">
              The Hard Truth: Degrees and courses alone won’t cut it!
            </h2>
            <p className="text-gray-700 mb-8">
              While completing tech courses, bootcamps, or even a computer
              science degree is a commendable achievement, it’s often not enough
              to secure your first tech job or opportunity. Employers/Businesses
              don’t care about your certificates, bootcamps, your todo apps,
              AirBnB clone, Netflix clone, or Instagram clone. They only care
              about how you can build real-world solutions that solve their
              business problems.
            </p>
          </div>
          <div className="flex justify-center  w-[21rem] sm:w-[30rem] h-[20rem] relative">
            <img
              src={JaneDoe}
              alt=""
              className="sm:w-[170px] w-[130px] absolute top-[-1rem] sm:top-[-3rem] right-[3.1rem] sm:right-[4.4rem]"
            />

            <div className="absolute bg-neutral-50 rounded-[4px] h-[255px] top-[20px] left-[5px] w-[170px] sm:w-[230px]  z-50">
              <div className="absolute left-[24px] sm:left-[52px] top-[50px]  rounded-tr-[3.8rem]  rounded-tl-[3.8rem] bg-accent-200 p-2 h-[165px] sm:h-[185px] w-[138px] sm:w-[160px] z-50">
                <img
                  src={PrettyLady}
                  alt=""
                  className="absolute bottom-[15px] left-[-7px] "
                />
              </div>
            </div>
            <div className="absolute bg-neutral-50 rounded-[4px] h-[260px] w-[175px] sm:w-[220px] right-[20px]  sm:right-[68px]">
              <img
                src={JaneDoe}
                alt=""
                className="w-[130px] md:w-[170px] absolute bottom-[-3.5rem] right-[10rem] md:right-[13rem] z-50"
              />
              <div className="absolute top-[7px] left-[20px] sm:left-[25px] rounded-tr-[60px] bg-accent-200 h-[150px] sm:h-[170px] w-[130px] sm:w-[150px] z-50">
                <img
                  src={Man}
                  alt=""
                  className="absolute left-[-15px] sm:left-[-20px] bottom-[-2px] h-fit w-[100%]    "
                />
              </div>
            </div>
          </div>
        </section>
        <Skills />

        <section className="relative flex flex-col md:flex-row items-center justify-center gap-[4rem]    p-[1rem] md:p-[5rem] ">
          <div className="  relative ">
            <img
              src={ExcitedMan}
              alt="Excited Young Man"
              className=" w-[500px]"
            />
            <img
              className="absolute lg:right-[-3.5rem] right-[1rem]  lg:bottom-12  bottom-[-1rem]  w-[70%] md:w-[50%]"
              src={InternFrame}
              alt=""
            />
          </div>
          <div className="text-center md:text-left lg:w-[483px] pb-[3rem]  lg:text-left  ">
            <h2 className="text-xl md:text-2xl font-bold mb-8">
              Become the Tech Talent Recruiters and Employers seek!
            </h2>
            <p className="mb-4">
              Upon completion of our intensive 8-week internship program, you
              will have transformed into a highly sought-after tech talent,
              attracting recruiters and employers.
            </p>
            <p>
              Your impressive portfolio of real-world projects coupled with your
              refined professional presence will set you apart from the
              competition.
            </p>
            <Link to="/enrollment">
              <button className="bg-primary-500 hover:bg-primary-700 text-white  py-2 px-4 rounded-xl mt-8">
                Enroll Now
              </button>
            </Link>
          </div>
        </section>
        <Programs />
        <section className="   p-[3rem] md:p-[5rem] ">
          <div className="text-center   ">
            <h2 className="text-2xl font-bold text-center mb-8">
              Secure your spot today
            </h2>
            <p className="mb-12 ">
              Join our program and embark on a journey to unlock new
              opportunities and advance your career.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-[4rem] items-center justify-center">
            <div className="rounded-xl  overflow-hidden w-[320px] h-[320px] bg-white shadow-md">
              <div className="bg-gradient-to-b from-primary-500 to-purple-800 h-[50%] flex flex-col items-center justify-center gap-7 text-white mb-7 p-4">
                <p className="border-b border-primary-300 pb-6 text-xl">
                  One Month Payment
                </p>
                <p className="text-2xl font-bold">$9 (N5,000)</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-7 p-4">
                <p>Monthly payment</p>
                <Link to="/enrollment">
                  <button className="w-auto bg-gradient-to-b from-primary-500 to-purple-800 hover:bg-purple-800 text-white text-sm px-3 py-[0.26rem] rounded-xl transition-colors duration-[3s]">
                    Enroll Now
                  </button>
                </Link>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden w-[320px] h-[320px] bg-white shadow-md">
              <div className="bg-gradient-to-b from-yellow-300 to-yellow-400 h-[50%] flex flex-col items-center justify-center text-black gap-7 mb-7 p-4">
                <p className="border-b border-yellow-600 pb-6 text-xl">
                  One Time Payment
                </p>
                <p className="text-2xl font-bold">$5 (N9,000)</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-7 p-4">
                <p>One time payment</p>
                <Link to="/enrollment">
                  <button className="w-auto text-black bg-gradient-to-b text-sm from-yellow-300 to-yellow-400 hover:bg-yellow-700  px-3 py-[0.26rem] rounded-xl transition-colors duration-[3s]">
                    Enroll Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section
          id="testimonial"
          className="  bg-neutral-50 px-[3rem] md:px-[5rem] py-[1.5rem]"
        >
          <div className="text-center mb-[2rem] sm:mb-8  ">
            <h2 className="text-2xl font-bold text-center ">
              Our Testimonials
            </h2>
            <p>See what people are saying about InternPulse!</p>
          </div>
          <Slider />
        </section>
        <section className=" p-[3rem] md:p-[12rem]">
          <h2 className="text-2xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h2>
          <AccordionData />
        </section>
      </div>
    </Layout>
  );
};

export default Home;
