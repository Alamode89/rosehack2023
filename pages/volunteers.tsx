import React from "react";
import type { NextPage } from "next";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PinkHeart from "../public/pink_heart.webp";
import Image from "next/image";
import Machine3 from "../public/machine_3.webp";

const volunteers: NextPage = () => {
  return (
    <div className="drop-shadow-lg w-full flex justify-center items-center flex-col font-lexend bg-gradient-to-r from-header-left to-header-right text-white">
      <div className="w-10/12 flex justify-center items-center flex-col">
        <div className=" flex justify-center items-center flex-row my-16">
          <Image
            src={PinkHeart}
            alt=""
            className="w-5 md:w-10 transform drop-shadow-pink"
          />
          <p className="text-xl md:text-3xl font-medium m-8 text-center drop-shadow-pink">
            Join Rosehack as a Volunteer or Mentor!
          </p>
          <Image
            src={PinkHeart}
            alt=""
            className="w-5 md:w-10 transform drop-shadow-pink"
          />
        </div>
        <div className="w-10/12 flex flex-col md:flex-row justify-between items-center pb-12 my-6">
          <Image
            src={Machine3}
            alt=""
            className="w-1/4 transform drop-shadow-lg"
          />
          <p className="w-2/3 text-justify text-lg mt-4">
            Rose Hack is UC Riverside&apos;s women-center hackathon happening on
            January 14-15, 2023. Thank you for showing interest in becoming a
            volunteer or mentor, we truly appreciate all the help we can get.
            All volunteers and mentors will be provided meals during breakfast,
            lunch and dinner hours.
          </p>
        </div>

        <Row className="w-full flex justify-center items-start">
          <Col
            xs={12}
            md={6}
            className="flex justify-center items-center flex-col"
          >
            <p className="text-3xl font-medium text-white drop-shadow-pink my-4">
              Volunteers
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdaYzF8Zq8wki1SX9hmqg4glKBt6rt_SlB-TTr0hM1ybiRRUg/viewform"
              target="_blank"
              rel="noreferrer"
              className="bg-transparent hover:!bg-rose-pink border-2 border-white drop-shadow-pink text-lg text-white no-underline px-4 py-2 rounded-2xl hover:scale-105"
            >
              Become a Volunteer
            </a>
            <p className="m-2 text-base text-white drop-shadow-pink">
              Signups close January 12th
            </p>
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
            <p className="text-3xl font-medium text-white drop-shadow-blue my-4">
              Mentors
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeHkULTC1m92z_XBEP5NbuLAYBMG8nkv2kVMQyytGdAkKjaIQ/viewform"
              target="_blank"
              rel="noreferrer"
              className="bg-transparent hover:!bg-rose-blue border-2 border-white drop-shadow-blue text-lg text-white no-underline px-4 py-2 rounded-2xl hover:scale-105"
            >
              Become a Mentor
            </a>
            <p className="m-2 text-base text-white drop-shadow-blue">
              Signups close January 12th
            </p>
            <ul className="list-disc leading-10 m-4 text-lg">
              <li>Inspire hackers to come up with creative solutions</li>
              <li>Share knowledge and experience with new hackers</li>
              <li>Join virtually over Zoom/Discord or attend in person</li>
            </ul>
          </Col>
        </Row>
        <p className="text-lg text-center my-12">
          Have additional questions? Contact us at{" "}
          <a
            href="mailto:rosehackucr@gmail.com"
            className="no-underline text-rose-pink hover:text-rose-blue"
          >
            rosehackucr@gmail.com
          </a>
        </p>
      </div>
      <title>Rose Hack Volunteer</title>
    </div>
  );
};

export default volunteers;
