import React from "react";
import HeroImage from "../../assets/HeroImage.png";
import Man from "../../assets/Man.png";
import PrettyLady from "../../assets/PrettyLady.png";
import ExcitedMan from "../../assets/ExcitedMan.png";
import Curve from "../../assets/Curve.png";
import Skills from "./components/Skills";
import Programs from "./components/Programs";
import Slider from "./components/Slider";
import AccordionC from "./components/AccordionC";
import Layout from "../../components/layout/Layout";

const Home = () => {
  return (
    <Layout>
      <div className="max-w-[1440px] ">
        <section className="flex flex-col lg:flex-row  gap-4 justify-between h-[500px] lg:h-[700px]     px-[1rem] sm:px-[8rem]  ">
          <div className="md:mt-[110px] flex flex-col items-center lg:items-start mt-[50px] lg:w-[480px] min-h-[204px] ">
            <div className="text-center  lg:text-left ">
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

            <div className="mt-8 flex gap-4 justify-start md:justify-center items-center">
              <button className="bg-primary-500 hover:bg-primary-700 text-white  py-2 px-4 rounded-xl mr-2">
                Enroll Now
              </button>
              <button className="bg-neutral-200 hover:bg-neutral-100 border border-solid border-primary-500 text-neutral-700 py-2 px-4 rounded-xl">
                Learn More
              </button>
            </div>
          </div>
          <div className="hidden lg:flex ">
            <img src={HeroImage} alt="Hero Image" className="w-[100%] " />
          </div>
          <div className="absolute bottom-[-215px] left-[22rem] hidden lg:flex ">
            <img src={Curve} alt="" className="w-[80%]" />
          </div>
        </section>
        <section className=" flex gap-[50px] flex-col justify-between items-center  lg:flex-row     p-[3rem] md:p-[5rem]">
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
          <div className="relative bg-blue-50 h-[340px] w-[420px] mx-auto">
            <div className="absolute left-[30px] top-[80px]  rounded-tr-[7.5rem]  rounded-tl-[7.5rem] bg-accent-200 p-4 h-[250px] w-[220px] max-w-full">
              <img
                src={PrettyLady}
                alt=""
                className="absolute bottom-[15px] right-[0px] "
              />
            </div>
            <div className="absolute top-[0px] left-[240px] rounded-tr-[5rem] bg-accent-200  h-[200px] min-w-[170px]">
              <img
                src={Man}
                alt=""
                className="absolute bottom-[14px] right-[18px] h-[100%] w-[100%]"
              />
            </div>
          </div>
        </section>

        <Skills />

        <section className="relative flex flex-col md:flex-row items-center justify-between gap-[6rem]    p-[3rem] md:p-[5rem] ">
          <div className="relative w-[90%]  sm:w-[300px] md:w-[400px] h-[185px] lg:h-[400px] mt-[8rem] sm:mt-[50px] rounded-tr-[14rem] rounded-tl-[14rem] rounded-b-[12rem] bg-primary-300">
            <img
              src={ExcitedMan}
              alt="Excited Young Man"
              className="w-full   object-center absolute bottom-[10px] sm:bottom-[40px] left-[20px] lg:left-[40px]"
            />
          </div>
          <div className="text-center md:text-left lg:w-[483px]  lg:text-left  ">
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
            <button className="bg-primary-500 hover:bg-primary-700 text-white  py-2 px-4 rounded-xl mt-8">
              Enroll Now
            </button>
          </div>
        </section>
        <Programs />
        <section className="   p-[3rem] md:p-[5rem] ">
          <div className="text-center   ">
            <h2 className="text-2xl font-bold text-center mb-8">
              Frequently Asked Questions
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
                <button className="w-auto bg-gradient-to-b from-primary-500 to-purple-800 hover:bg-purple-800 text-white text-sm px-3 py-[0.26rem] rounded-xl transition-colors duration-[3s]">
                  Enroll Now
                </button>
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
                <button className="w-auto text-black bg-gradient-to-b text-sm from-yellow-300 to-yellow-400 hover:bg-yellow-700  px-3 py-[0.26rem] rounded-xl transition-colors duration-[3s]">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="  bg-neutral-50 p-[3rem] md:p-[5rem]">
          <div className="text-center mb-[2rem] sm:mb-8  ">
            <h2 className="text-2xl font-bold text-center ">
              Our Testimonials
            </h2>
            <p>See what people are saying about InternPulse!</p>
          </div>
          <Slider />
        </section>
        <section className=" p-[3rem] md:p-[5rem]">
          <h2 className="text-2xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h2>
          <AccordionC />
        </section>
      </div>
    </Layout>
  );
};

export default Home;
