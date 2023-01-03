import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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
        className={`h-full w-auto border-b-2 border-faq-question !bg-transparent`}
      >
        <Accordion.Button
          onClick={() => setClicked(!clicked)}
          className={`!bg-transparent !border-none font-lexend !shadow-blue-500 !text-faq-question after:!bg-none focus:!shadow-none !rounded-none`}
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
        className={`!border-transparent font-lexend text-faq-answer !pt-6 !pb-8`}
      >
        {element.answer}
      </Accordion.Body>
    </Accordion.Item>
  );
};

const FAQQuestions = () => {
  return (
    <div className="w-full flex items-start">
      <Row className="w-full m-0 p-0">
        <Col className="flex items-start justify-center" xs={12} md={6}>
          <Accordion
            className="flex flex-col content-center w-10/12 py-0 drop-shadow-lg"
            flush
            alwaysOpen
          >
            {QA.slice(0, QA.length / 2 + 1).map((element, index) => (
              <FaqItem
                key={index}
                className=" focus:!shadow-none m-0 p-0"
                element={element}
                index={index}
              />
            ))}
          </Accordion>
        </Col>
        <Col className="flex items-start justify-center" xs={12} md={6}>
          <Accordion
            className="flex flex-col content-center w-10/12 py-0 drop-shadow-lg"
            flush
            alwaysOpen
          >
            {QA.slice(QA.length / 2 + 1, QA.length).map((element, index) => (
              <FaqItem
                key={index}
                className=" focus:!shadow-none m-0 p-0"
                element={element}
                index={index}
              />
            ))}
          </Accordion>
        </Col>
      </Row>
    </div>
  );
};
export default FAQQuestions;
