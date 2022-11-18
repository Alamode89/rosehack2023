import React from "react";
import { FaCircle } from "react-icons/fa";
import { Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-about-top to-about-bottom w-full flex justify-center items-center flex-col scroll-my-[10vh]"
    >
      <div className="flex justify-between items-center w-10/12 m-5">
        <img
          src="PINK_HEART1.png"
          className="h-10 w-10 transform hidden md:flex"
        />
        <FaCircle className="drop-shadow-blue text-white hidden md:flex" />
        <FaCircle className="drop-shadow-blue text-white hidden md:flex" />
        <FaCircle className="drop-shadow-blue text-white hidden lg:flex" />
        <FaCircle className="drop-shadow-blue text-white hidden md:flex" />

        <p className="drop-shadow-blue font-pixel text-4xl p-0 m-0 text-white text-center w-full md:w-auto">
          ABOUT US
        </p>
        <FaCircle className="drop-shadow-blue text-white hidden md:flex" />
        <FaCircle className="drop-shadow-blue text-white hidden md:flex" />
        <FaCircle className="drop-shadow-blue text-white hidden lg:flex" />
        <FaCircle className="drop-shadow-blue text-white hidden md:flex" />
        <img src="PINK_HEART1.png" className="h-10 w-10 hidden md:flex" />
      </div>

      <Row className="sm:w-9/12 w-10/12 flex justify-center items-center flex-row-reverse sm:flex-row">
        <Col
          xl={8}
          md={6}
          className="md:px-5 px-0 flex justify-center items-center flex-col"
        >
          <div className="flex justify-between items-center mb-4 w-full">
            <img
              src="PINK_HEART1.png"
              className="h-6 w-6 md:h-10 md:w-10 drop-shadow-pink"
            />
            <FaCircle className="text-white drop-shadow-pink text-sm md:text-base" />
            <img
              src="PINK_HEART1.png"
              className="h-6 w-6 md:h-10 md:w-10 drop-shadow-pink"
            />
            <FaCircle className="text-white drop-shadow-pink text-sm md:text-base" />
            <img
              src="PINK_HEART1.png"
              className="h-6 w-6 md:h-10 md:w-10 drop-shadow-pink"
            />
          </div>
          <p className="drop-shadow-pinksmall py-0 md:py-5 font-lexend text-xl md:text-2xl w-full p-0 m-0 text-white text-center">
            Rose Hack is UC Riverside&#39;s 24-hour hackathon, one of the few
            women-centric hackathons in California! Founded by the female
            leaders of the Women in Computing (WINC) and the Society of Women
            Engineers (SWE).
          </p>

          <div className="flex justify-between items-center mt-4 w-full">
            <img
              src="PINK_HEART1.png"
              className="h-6 w-6 md:h-10 md:w-10 drop-shadow-pink"
            />
            <FaCircle className="text-white drop-shadow-pink text-sm md:text-base" />
            <img
              src="PINK_HEART1.png"
              className="h-6 w-6 md:h-10 md:w-10 drop-shadow-pink"
            />
            <FaCircle className="text-white drop-shadow-pink text-sm md:text-base" />
            <img
              src="PINK_HEART1.png"
              className="h-6 w-6 md:h-10 md:w-10 drop-shadow-pink"
            />
          </div>
        </Col>
        <Col xl={4} md={6} className="flex items-center justify-center">
          <img
            className="w-1/3 md:w-full pt-5 md:pt-0"
            src="MACHINE_3.png"
          ></img>
        </Col>
      </Row>
      <Row className="mt-5 sm:w-9/12 w-10/12 flex justify-center items-center flex-col-reverse md:flex-row-reverse">
        <Col xl={4} md={6} className="flex items-center justify-center">
          <img className="w-1/3 md:w-full pt-5 md:pt-0" src="MACHINE_2.png" />
        </Col>
        <Col
          xl={8}
          md={6}
          className="md:px-5 px-0 flex justify-center items-center flex-col"
        >
          <div className="flex justify-between items-center mb-4 w-full">
            <img
              src="BLUE_HEART1.png"
              className="h-6 w-6 md:h-10 md:w-10 drop-shadow-blue"
            />
            <FaCircle className="text-white drop-shadow-blue text-sm md:text-base" />
            <img
              src="BLUE_HEART1.png"
              className="h-6 w-6 md:h-10 md:w-10 drop-shadow-blue"
            />
            <FaCircle className="text-white drop-shadow-blue text-sm md:text-base" />
            <img
              src="BLUE_HEART1.png"
              className="h-6 w-6 md:h-10 md:w-10 drop-shadow-blue"
            />
          </div>
          <p className="drop-shadow-bluesmall py-0 md:py-5 text-xl md:text-2xl font-lexend w-full p-0 m-0 text-white text-center">
            Rose Hack&#39;s mission is to encourage individuals from
            underrepresented groups in STEM to gain experience, create strong
            networks, and build amazing projects through their shared passions
            in science and technology.
          </p>
          <div className="flex justify-between items-center mt-4 w-full">
            <img
              src="BLUE_HEART1.png"
              className="h-6 w-6 md:h-10 md:w-10 drop-shadow-blue"
            />
            <FaCircle className="text-white drop-shadow-blue text-sm md:text-base" />
            <img
              src="BLUE_HEART1.png"
              className="h-6 w-6 md:h-10 md:w-10 drop-shadow-blue"
            />
            <FaCircle className="text-white drop-shadow-blue text-sm md:text-base" />
            <img
              src="BLUE_HEART1.png"
              className="h-6 w-6 md:h-10 md:w-10 drop-shadow-blue"
            />
          </div>
        </Col>
      </Row>
      <div className="bg-gradient-to-r from-about-left to-about-right md:w-1/2 w-10/12 rounded-3xl m-5">
        <p className="bg-about-bottom px-0 md:py-5 font-lexend text-xl md:text-2xl  p-5 m-4 text-white text-center rounded-3xl">
          Rose Hack welcomes both undergraduate and high school students for a
          lively weekend filled with innovation, discovery, networking,
          mentorship, and so much more!
        </p>
        <div className="flex justify-between mx-20 my-3">
          <img className="w-4/12 md:w-2/12" src="RH_SPONSORS_BUTTON1.png"></img>
          <div className="w-2/12 flex justify-between items-center">
            <div className="h-full flex justify-center items-end">
              <FaCircle className="text-about-pink text-5xl" />
            </div>
            <div className="flex h-full justify-center items-start">
              <FaCircle className="text-about-blue text-5xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
