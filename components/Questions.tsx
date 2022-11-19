import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { FaMinus, FaPlus } from "react-icons/fa";
import { QA } from "./data/QA";

const FaqItem = ({ index, element }: any) => {
  const [clicked, setClicked] = useState(false);
  return (
    <Accordion.Item
      className={` focus:!shadow-none font-lexend !bg-transparent !outline-none !border-none m-0 p-0 `}
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
          className={`!bg-faq-middle !border-green-500 font-lexend !shadow-blue-500 !text-faq-question after:!bg-none focus:!shadow-none !rounded-none`}
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
        className={`bg-faq-middle !border-transparent font-lexend text-faq-answer !pt-6 !pb-8`}
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
        className="flex flex-col content-center w-full py-5 bg-faq-middle rounded-3xl !border-transparent"
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
