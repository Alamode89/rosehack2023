import React from "react";
import { Col, Row } from "react-bootstrap";
import FAQHeader from "./FAQHeader";
import Questions from "./Questions";

const FAQ = () => {
  return (
    <section
      id="faq"
      className="bg-rosehack-primary-darkpurple w-full flex justify-center items-center flex-col py-5"
    >
      <Row className="w-11/12">
        <Col lg={6} className="">
          <FAQHeader />
        </Col>
        <Col lg={6} className="">
          <Questions />
        </Col>
      </Row>
    </section>
  );
};

export default FAQ;
