"use client";

import { Accordion } from "flowbite-react";

function AccordionC() {
  return (
    <Accordion collapseAll>
      <Accordion.Panel>
        <Accordion.Title>
          What is InternPulse Internship all about?
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            InternPulse helps people gather evidence of skills, learn how to
            work in teams, deal with pressure, quickly expand their knowledge,
            and network effectively. This prepares them to secure their first
            job or opportunity in the tech industry.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>
          What Benefits can I get from the InternPulse internship?
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Benefits upon completion includes access to our exclusive talent
            network, access to job opportunities, Linkedin profile optimisation,
            resume and cover letter review, certificate of completion, letter of
            recommendation, and listing on our public alumni page.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>When will the internship start?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">April 2024</p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>How long does the internship last?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">About 8 weeks</p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>
          Will I be employed upon completion of the internship?
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            You will be added to our exclusive talent network, and recommended
            to potential employers.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>How often do we build new projects?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Every week new projects are assigned to interns as tasks to complete
            and present to be promoted to the next sprint.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>
          Do you accept payment via PayStack, Selar, PayPal, Crypto or Bank
          Transfer?
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Yes, we do! Kindly chat with our team for payment details.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Who is the founder?</Accordion.Title>
        <Accordion.Content>
          <img src="" alt="" />
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
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
}

export default AccordionC;
