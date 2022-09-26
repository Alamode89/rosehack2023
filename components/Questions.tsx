import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { FaMinus, FaPlus } from "react-icons/fa";

const QA = [
  {
    question: "do we have a working website?",
    answer: "haha idk",
  },
  {
    question: "do we have a working website?",
    answer: "haha no",
  },
  {
    question: "do we have a working website?",
    answer: "haha no",
  },
  {
    question: "do we have a working website?",
    answer: "haha no",
  },
  {
    question: "do we have a working website?",
    answer: "haha no",
  },
  {
    question: "do we have a working website?",
    answer: "haha no",
  },
];

const FaqItem = ({ index, element }: any) => {
  const [clicked, setClicked] = useState(false);

  return (
    <Accordion.Item
      className={` focus:!shadow-none font-poppins !rounded-3xl m-0 p-0`}
      id={`element${index}`}
      eventKey={index}
    >
      <Accordion.Button
        onClick={() => setClicked(!clicked)}
        className={`!bg-rosehack-primary-darkestpurple font-poppins !text-rosehack-secondary-salmon !rounded-t-lg -mt-3.5 after:!bg-none focus:!shadow-none`}
      >
        {clicked ? (
          <FaMinus className="pr-2 text-2xl" />
        ) : (
          <FaPlus className="pr-2 text-2xl" />
        )}
        {element.question}
      </Accordion.Button>
      <Accordion.Body
        className={`bg-rosehack-primary-darkestpurple font-poppins text-rosehack-secondary-white !rounded-b-lg !pt-6 !pb-8`}
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
        className=" flex flex-col justify-center mx-auto w-11/12"
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
