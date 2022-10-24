import React from "react";
import { Col, Row } from "react-bootstrap";
import FAQHeader from "./FAQHeader";
import Questions from "./Questions";

const FAQ = () => {
  return (
    <section
      id="faq"
      className="bg-rosehack-primary-darkpurple w-full flex justify-center items-center flex-col py-[11vh] scroll-m-[11vh]"
    >
      <Row className="w-11/12">
        <Col lg={5}>
          <FAQHeader />
        </Col>
        <Col lg={7}>
          <Questions />
        </Col>
      </Row>
    </section>
  );
};

export default FAQ;
