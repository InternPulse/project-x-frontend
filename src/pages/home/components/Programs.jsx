import ManagerIcon from "../../../assets/ManagerIcon.png";
import Telephone from "../../../assets/Telephone.png";
import Tv from "../../../assets/Tv.png";
import Computer from "../../../assets/Computer.png";

const Programs = () => {
  return (
    <section className="bg-[#F7F7FC]   p-[3rem] md:p-[5rem]">
      <div className="text-center   ">
        <h2 className="text-2xl font-bold text-center ">Our Programs</h2>
        <p className="mb-8 mx-0 sm:mx-[8rem] text-center">
          We have four tracks that focus on participants with prior experience
          either through courses, bootcamps or self-learning. You must have
          prior coding or design skills/knowledge.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4  lg:gap-4 ">
        <div className="bg-white rounded-xl p-10 ]">
          <div className="mb-4">
            <img src={Computer} alt="" />
          </div>
          <h2 className="text-xl md:text-2xl font-bold mb-6">
            Frontend Development
          </h2>
          <p className="mb-4">
            This path focuses on using ReactJS to build high quality web
            applications. Applicant should possess basic skills and a computer
            to develop web applications. Knowledge of HTML/CSS is required.
          </p>
          <p className="font-semibold">HTML | CSS | Javascript | ReactJs</p>
        </div>
        <div className="bg-white rounded-xl p-10 ">
          <div className="mb-4">
            <img src={Tv} alt="" />
          </div>
          <h2 className="text-xl md:text-2xl font-bold mb-6">
            Backend Development
          </h2>
          <p className="mb-4">
            We are not particularly focused on the particular language used in
            this track. The requirements are provided and participants are free
            to select the backend technology that works the best for them.
          </p>
          <p className="font-semibold">Python | NodeJS | PHP | Go</p>
        </div>
        <div className="bg-white rounded-xl p-10">
          <div className="mb-4">
            <img src={Telephone} alt="" />
          </div>
          <h2 className="text-xl md:text-2xl font-bold mb-6">UI/UX Design</h2>
          <p className="mb-4">
            This track is for people showing lots of promise in design. We
            challenge the participants to create beautiful designs for web
            applications. We use Figma for design.
          </p>
          <p className="font-semibold">| Figma |</p>
        </div>
        <div className="bg-white rounded-xl p-10">
          <div className="mb-4">
            <img src={ManagerIcon} alt="" />
          </div>
          <h2 className="text-xl md:text-2xl font-bold mb-6">
            Product Management
          </h2>
          <p className="mb-4">
            The product management path is focused on people who want to learn
            how to manage teams and deliver products. Each product manager will
            dealing with a relatively large team, and will be responsible for
            bringing the team to success.
          </p>
          <p className="font-semibold">Excel | Notion | Linear</p>
        </div>
      </div>
    </section>
  );
};

export default Programs;
