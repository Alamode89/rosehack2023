import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const volunteers = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col font-lexend bg-gradient-to-r from-header-left to-header-right text-white">
      <div className="w-10/12 flex justify-center items-center flex-col">
        <p className="text-4xl font-medium m-8 text-center">
          Join Rosehack as a Volunteer or Mentor!
        </p>
        <p className="w-10/12 text-center text-lg">
          Rose Hack is UC Riverside&apos;s women-center hackathon happening on
          January 14-15, 2023. Thank you for showing interest in becoming a
          volunteer or mentor, we truly appreciate all the help we can get. All
          volunteers and mentors will be provided meals during breakfast, lunch
          and dinner hours.
        </p>
        <Row className="w-full flex justify-center items-start">
          <Col
            xs={12}
            md={6}
            className="flex justify-center items-center flex-col"
          >
            <p className="text-3xl font-medium">Volunteers</p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdaYzF8Zq8wki1SX9hmqg4glKBt6rt_SlB-TTr0hM1ybiRRUg/viewform"
              target="_blank"
              rel="noreferrer"
              className="bg-blue-900 text-lg text-white no-underline px-4 py-2 rounded hover:scale-105"
            >
              Become a Volunteer
            </a>
            <p className="m-2 text-lg">Signups close January 12th</p>
            <ul className="list-disc leading-10 m-4 text-lg">
              <li>Assist with in-person hackathon operations</li>
              <li>Facilitate workshop and providing technological support</li>
              <li>Distribute hackathon swag and meals</li>
            </ul>
          </Col>
          <Col
            xs={12}
            md={6}
            className="flex justify-start items-center flex-col"
          >
            <p className="text-3xl font-medium">Mentors</p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeHkULTC1m92z_XBEP5NbuLAYBMG8nkv2kVMQyytGdAkKjaIQ/viewform"
              target="_blank"
              rel="noreferrer"
              className="bg-blue-900 text-lg text-white no-underline px-4 py-2 rounded hover:scale-105"
            >
              Become a Mentor
            </a>
            <p className="m-2 text-lg">Signups close January 12th</p>
            <ul className="list-disc leading-10 m-4 text-lg">
              <li>Inspire hackers to come up with creative solutions</li>
              <li>Share knowledge and experience with new hackers</li>
              <li>Join virtually over Zoom/Discord or attend in person</li>
            </ul>
          </Col>
        </Row>
        <p className="text-lg text-center">
          Have additional questions? Contact us at{" "}
          <a
            href="mailto:rosehackucr@gmail.com"
            className="no-underline text-white"
          >
            rosehackucr@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default volunteers;
