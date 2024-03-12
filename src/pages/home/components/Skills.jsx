import Group1 from "../../../assets/Group1.png";
import Group2 from "../../../assets/Group2.png";
import Group3 from "../../../assets/Group3.png";
import Group4 from "../../../assets/Group4.png";
import Group5 from "../../../assets/Group5.png";
import Group6 from "../../../assets/Group6.png";
import Group7 from "../../../assets/Group7.png";
import Group8 from "../../../assets/Group8.png";
import Ornament from "../../../assets/Ornament.svg";

const Skills = () => {
  return (
    <section className="p-[3rem] md:p-[5rem]">
      <div>
        <h2 className="text-2xl font-bold text-center mb-2">
          What You’ll Gain
        </h2>
        <p className="text-center text-lg mb-10 px-0 lg:px-[15rem]">
          Put theory into practice and work on real projects alongside
          experienced professionals in your field.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-10 lg:mx-[6rem] mx-0">
        {[
          {
            img: Group1,
            text: "Expand your knowledge base at an accelerated pace",
          },
          {
            img: Group2,
            text: "Master the ability to effectively collaborate and meet deadlines in a dynamic team.",
          },
          {
            img: Group3,
            text: "Access to our exclusive talent network for potential job opportunities",
          },
          {
            img: Group4,
            text: "Certificate of completion to validate your participation",
          },
          {
            img: Group5,
            text: "Introduction to new/secret paths to monetize your skills.",
          },
          {
            img: Group6,
            text: "A spot on our public alumni page viewed by recruiters",
          },
          {
            img: Group7,
            text: "Network with other tech talents like yourself.",
          },
          {
            img: Group8,
            text: "Tangible evidence of your skills through live projects",
          },
        ].map((item, index) => (
          <SkillItem key={index} img={item.img} text={item.text} />
        ))}
      </div>
    </section>
  );
};

const SkillItem = ({ img, text }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex justify-center items-center ">
        <img src={img} alt="" className="w-[100%] h-[70px] mb-5" />
      </div>
      <p className="text-center text-[0.77rem] mb-5 ">{text}</p>
    </div>
  );
};

export default Skills;
