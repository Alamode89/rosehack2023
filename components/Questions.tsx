import React from "react";
import Accordion from "react-bootstrap/Accordion";

const QA = [
  {
    question: "Woah whats this?",
    answer: "haha idk",
  },
  {
    question: "does this work?",
    answer: "haha no",
  },
];

const FaqItem = ({ index, element }: any) => {
  return (
    <Accordion.Item
      className={`bg-rosehack-primary-darkpurple focus:!shadow-none font-poppins m-0 p-0`}
      id={`element${index}`}
      eventKey={index}
    >
      <Accordion.Button
        className={`!bg-rosehack-primary-darkestpurple font-poppins !text-rosehack-secondary-salmon !rounded-t-lg -mt-3.5 after:!bg-arrow focus:!shadow-none`}
      >
        {element.question}
      </Accordion.Button>
      <Accordion.Body
        className={`bg-rosehack-primary-darkestpurple font-poppins text-rosehack-secondary-white rounded-b-lg !pt-6 !pb-8`}
        // eventKey={index}
      >
        {element.answer}
      </Accordion.Body>
    </Accordion.Item>
  );
};

const FAQQuestions = () => {
  return (
    <div className=" w-full mt-3">
      <Accordion
        className="flex flex-col justify-center mx-auto w-11/12"
        flush
        alwaysOpen
      >
        {QA.map((element, index) => (
          <FaqItem
            key={index}
            className="!bg-rosehack-black focus:!shadow-none m-0 p-0"
            element={element}
            index={index}
          />
        ))}
      </Accordion>
    </div>
  );
};

export default FAQQuestions;
