import Group1 from "../../../assets/Group1.png";
import Group2 from "../../../assets/Group2.png";
import Group3 from "../../../assets/Group3.png";
import Group4 from "../../../assets/Group4.png";
import Group5 from "../../../assets/Group5.png";
import Group6 from "../../../assets/Group6.png";
import Group7 from "../../../assets/Group7.png";
import Group8 from "../../../assets/Group8.png";

const Skills = () => {
  return (
    <section className="   p-[3rem] md:p-[5rem]">
      <div>
        <h2 className="text-2xl font-bold text-center mb-8">
          What You’ll Gain
        </h2>
        <p className="text-gray-700 text-center mb-10">
          Put theory into practice and work on real projects alongside
          experienced professionals in your field.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4   gap-2  lg:gap-8 ">
        <SkillItem
          img={Group1}
          text="Expand your knowledge base at an accelerated pace"
        />
        <SkillItem
          img={Group2}
          text="Expand your knowledge base at an accelerated pace"
        />
        <SkillItem
          img={Group3}
          text="Expand your knowledge base at an accelerated pace"
        />
        <SkillItem
          img={Group4}
          text="Expand your knowledge base at an accelerated pace"
        />
        <SkillItem
          img={Group5}
          text="Expand your knowledge base at an accelerated pace"
        />
        <SkillItem
          img={Group6}
          text="Expand your knowledge base at an accelerated pace"
        />
        <SkillItem
          img={Group7}
          text="Expand your knowledge base at an accelerated pace"
        />
        <SkillItem
          img={Group8}
          text="Expand your knowledge base at an accelerated pace"
        />
      </div>
    </section>
  );
};

const SkillItem = ({ img, text }) => {
  return (
    <div className="flex flex-col items-center justify-center  ">
      <div>
        <img src={img} alt="" className="w-20 h-20" />
      </div>
      <p className="text-center text-sm  mb-5">{text}</p>
    </div>
  );
};

export default Skills;
