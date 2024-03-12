import React from "react";
import Accordion from "./Accordion";

function AccordionData() {
  const accordionItems = [
    {
      title: "What is InternPulse Internship all about?",
      content: `InternPulse helps people gather evidence of skills, learn how to
        work in teams, deal with pressure, quickly expand their knowledge,
        and network effectively. This prepares them to secure their first
        job or opportunity in the tech industry`,
    },
    {
      title: " What Benefits can I get from the InternPulse internship?",
      content: `Benefits upon completion includes access to our exclusive talent network, access to job opportunities, Linkedin profile optimisation, resume and cover letter review, certificate of completion, letter of recommendation, and listing on our public alumni page.`,
    },
    {
      title: "When will the internship start? ",
      content: "April 2024",
    },
    {
      title: "How long does the internship last? ",
      content: "About 8 weeks",
    },
    {
      title: "   Will I be employed upon completion of the internship? ",
      content:
        "You will be added to our exclusive talent network, and recommended to potential employers.",
    },
    {
      title: "How often do we build new projects? ",
      content:
        "Every week new projects are assigned to interns as tasks to complete and present to be promoted to the next sprint.",
    },
    {
      title:
        " Do you accept payment via PayStack, Selar, PayPal, Crypto or Bank Transfer?",
      content: "Yes, we do! Kindly chat with our team for payment details.",
    },
    {
      title: "Who is the founder?",
      content: (
        <>
          <img src="" alt="John's photo" />
          <p className="mb-8">
            Hi, I’m John Diginee, a Software Engineer with 7+ years of
            experience working professionally with web and cloud technologies.
          </p>
          <p className="mb-8">
            Passionate about using web technologies to build amazing products
            and focusing on solving problems for different industries.
          </p>
          <p className="mb-8">
            <strong>Skills & Technologies:</strong> Python (Django), JavaScript
            (Vue), MySQL, Postgres, Redis, Docker, Kubernetes, Github Action,
            Jenkins, AWS CodePipeline, Agile, Scrum, AWS, PHP
            (WordPress/Elementor), Web Scraping.
          </p>
          <div>
            <p>
              <span className="flex-grow">
                Didn’t find the answer you were looking for ? {"  "}
              </span>
              <a href="/" className="text-primary-500 hover:underline">
                Click Here To Chat With Our Team.
              </a>
            </p>
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="App">
      <Accordion items={accordionItems} />
    </div>
  );
}

export default AccordionData;
