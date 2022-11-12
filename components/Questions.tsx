import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { FaMinus, FaPlus } from "react-icons/fa";

const QA = [
  {
    question: "What is a Rose Hack?",
    answer:
      "Rose Hack is Inland Empire’s first women-centric hackathon. Our goal is to bring together underrepresented groups in STEM, such as females and people of color, to encourage a unique network and create innovative projects through their shared passion in STEM.",
  },
  {
    question: "Who can attend Rose Hack?",
    answer:
      "We welcome anyone from any undergrad college to come out and hack with us.",
  },
  {
    question: "How do I register?",
    answer: "Registration is accessible on the website.",
  },
  {
    question: "When are applications due?",
    answer:
      "Applications are due by midnight on Friday, January 13, 2023. In order to participate, be sure to submit an application before the deadline.",
  },
  {
    question: "Is Rose Hack free?",
    answer:
      "Of course! You will be allowed to attend workshops, listen to some wonderful speakers, and best of all, win great prizes. And fine, we won’t stop you if your other reason for attending will be for the free food and swag that is provided.",
  },
  {
    question: "How long is Rose Hack?",
    answer:
      "Rose Hack will take place over the course of 2 days, running from January 14 to January 15.",
  },
  {
    question: "Where is Rose Hack?",
    answer:
      "Rose Hack will take place in Winston Chung Hall at the University of California, Riverside.",
  },
  {
    question: "What if I have never been to a hackathon before?",
    answer:
      "It’s more the reason to come and experience a hackathon! You can learn from the various workshops, speakers, and mentors, and they can help guide a personal project of your choice if you want!",
  },
  {
    question: "What will I need to bring to Rose Hack?",
    answer:
      "Just yourself, your device of choice (i.e your PC or laptop), and don’t forget a charger.",
  },
  {
    question: "Can I turn in a project I have already done?",
    answer:
      "No, your project must be brand new and started only once the event has started at 9AM PST. Projects started before that time or have been submitted to other hackathons will be disqualified. It’s your time to start a project fresh and unique to Rose Hack, so get creative and have fun with it. ",
  },
  {
    question: "Do I need a team to participate?",
    answer:
      "No, you can work independently if you wish.  If you do want to join a team, there is a limit of 4 people per team!",
  },
];

const FaqItem = ({ index, element }: any) => {
  const [clicked, setClicked] = useState(false);
  return (
    <Accordion.Item
      className={` focus:!shadow-none font-poppins !bg-transparent !outline-none !border-none m-0 p-0 `}
      id={`element${index}`}
      eventKey={index}
    >
      <div
        className={`h-full w-auto border-b-2 border-faq-question !bg-transparent ${
          index == 0 ? "border-t-2" : ""
        }`}
      >
        <Accordion.Button
          onClick={() => setClicked(!clicked)}
          className={`!bg-faq-middle !border-green-500 font-poppins !shadow-blue-500 !text-faq-question after:!bg-none focus:!shadow-none !rounded-none`}
        >
          {clicked ? (
            <FaMinus className="pr-2 text-2xl " />
          ) : (
            <FaPlus className="pr-2 text-2xl " />
          )}
          {element.question}
        </Accordion.Button>
      </div>
      <Accordion.Body
        className={`bg-faq-middle !border-transparent font-poppins text-faq-answer !pt-6 !pb-8`}
      >
        {element.answer}
      </Accordion.Body>
    </Accordion.Item>
  );
};

const FAQQuestions = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col mt-5">
      <Accordion
        className="flex flex-col content-center w-8/12 py-5 bg-faq-middle rounded-3xl !border-transparent"
        flush
        alwaysOpen
      >
        {QA.map((element, index) => (
          <FaqItem
            key={index}
            className=" focus:!shadow-none m-0 p-0"
            element={element}
            index={index}
          />
        ))}
      </Accordion>
    </div>
  );
};
export default FAQQuestions;
