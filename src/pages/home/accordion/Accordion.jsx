import React, { useState } from "react";

function AccordionItem({ title, content, isOpen, toggleAccordion }) {
  return (
    <div>
      <div
        className="accordion-header flex justify-between items-center cursor-pointer border-b-[1.5px] border-primary-500 p-4"
        onClick={toggleAccordion}
      >
        <div className=" text-xl">{title}</div>
        <div className="rounded-full border border-primary-500 w-8 h-8 flex items-center justify-center ">
          <span className="text-primary-700 m-3">{isOpen ? "-" : "+"}</span>
        </div>
      </div>
      <div className={`accordion-content p-4 ${isOpen ? "block" : "hidden"}`}>
        {content}
      </div>
    </div>
  );
}

function Accordion({ items }) {
  const [openItemIndex, setOpenItemIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenItemIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={index === openItemIndex}
          toggleAccordion={() => handleToggle(index)}
        />
      ))}
    </div>
  );
}

export default Accordion;
