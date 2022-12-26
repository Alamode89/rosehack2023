import React from "react";
import { FaCircle } from "react-icons/fa";
import { Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-about-top to-about-bottom w-full flex justify-center items-center flex-col scroll-my-[10vh]"
    >
      <div className="flex justify-between items-center w-10/12 mt-5 drop-shadow-white">
        <img
          src="pink_heart.webp"
          className="h-10 w-10 transform hidden md:flex"
        />
        <FaCircle className=" text-white hidden md:flex" />
        <FaCircle className=" text-white hidden md:flex" />
        <FaCircle className=" text-white hidden lg:flex" />
        <FaCircle className=" text-white hidden md:flex" />

        <p className="font-pixel text-2xl p-0 m-0 text-white text-center w-full md:w-auto">
          ABOUT US
        </p>
        <FaCircle className=" text-white hidden md:flex" />
        <FaCircle className=" text-white hidden md:flex" />
        <FaCircle className=" text-white hidden lg:flex" />
        <FaCircle className=" text-white hidden md:flex" />
        <img src="pink_heart.webp" className="h-10 w-10 hidden md:flex" />
      </div>

      <Row className="mt-5 md:mt-0 sm:w-9/12 w-10/12 flex justify-evenly items-center flex-row-reverse sm:flex-row">
        <Col
          xl={7}
          md={6}
          className="md:px-4 px-0 flex justify-center items-center flex-col"
        >
          <div className="flex justify-between items-center mb-4 w-full">
            <img
              src="pink_heart.webp"
              className="h-6 w-6 md:h-10 md:w-10 drop-shadow-pink"
            />
            <FaCircle className="text-white drop-shadow-pink text-sm md:text-base" />
            <img
              src="pink_heart.webp"
              className="h-6 w-6 md:h-10 md:w-10 drop-shadow-pink"
            />
            <FaCircle className="text-white drop-shadow-pink text-sm md:text-base" />
            <img
              src="pink_heart.webp"
              className="h-6 w-6 md:h-10 md:w-10 drop-shadow-pink"
            />
          </div>
          <p className="drop-shadow-pinksmall py-0 md:py-5 font-lexend text-base md:text-xl w-11/12 p-0 m-0 text-white text-justify">
            Rose Hack is UC Riverside&#39;s 24-hour hackathon, one of the few
            women-centric hackathons in California! Founded by the female
            leaders of the Women in Computing (WINC) and the Society of Women
            Engineers (SWE).
          </p>

          <div className="flex justify-between items-center mt-4 w-full">
            <img
              src="pink_heart.webp"
              className="h-6 w-6 md:h-10 md:w-10 drop-shadow-pink"
            />
            <FaCircle className="text-white drop-shadow-pink text-sm md:text-base" />
            <img
              src="pink_heart.webp"
              className="h-6 w-6 md:h-10 md:w-10 drop-shadow-pink"
            />
            <FaCircle className="text-white drop-shadow-pink text-sm md:text-base" />
            <img
              src="pink_heart.webp"
              className="h-6 w-6 md:h-10 md:w-10 drop-shadow-pink"
            />
          </div>
        </Col>
        <Col xl={3} md={5} className="flex items-center justify-center p-8">
          <img
            className="w-2/5 md:w-10/12 pt-5 md:pt-0"
            src="machine_2.webp"
          ></img>
        </Col>
      </Row>
      <Row className="mt-1 sm:w-9/12 w-10/12 flex justify-evenly items-center flex-col-reverse md:flex-row-reverse">
        <Col xl={3} md={5} className="flex items-center justify-center">
          <img className="w-2/5 md:w-10/12 pt-5 md:pt-0" src="machine_1.webp" />
        </Col>
        <Col
          xl={7}
          md={6}
          className="md:px-5 px-0 flex justify-center items-center flex-col"
        >
          <div className="flex justify-between items-center mb-4 w-full">
            <img
              src="blue_heart.webp"
              className="h-6 w-6 md:h-10 md:w-10 drop-shadow-blue"
            />
            <FaCircle className="text-white drop-shadow-blue text-sm md:text-base" />
            <img
              src="blue_heart.webp"
              className="h-6 w-6 md:h-10 md:w-10 drop-shadow-blue"
            />
            <FaCircle className="text-white drop-shadow-blue text-sm md:text-base" />
            <img
              src="blue_heart.webp"
              className="h-6 w-6 md:h-10 md:w-10 drop-shadow-blue"
            />
          </div>
          <p className="drop-shadow-bluesmall py-0 md:py-5 text-abse md:text-xl font-lexend w-11/12 p-0 m-0 text-white text-justify">
            Rose Hack&#39;s mission is to encourage individuals from
            underrepresented groups in STEM to gain experience, create strong
            networks, and build amazing projects through their shared passions
            in science and technology.
          </p>
          <div className="flex justify-between items-center mt-4 w-full">
            <img
              src="blue_heart.webp"
              className="h-6 w-6 md:h-10 md:w-10 drop-shadow-blue"
            />
            <FaCircle className="text-white drop-shadow-blue text-sm md:text-base" />
            <img
              src="blue_heart.webp"
              className="h-6 w-6 md:h-10 md:w-10 drop-shadow-blue"
            />
            <FaCircle className="text-white drop-shadow-blue text-sm md:text-base" />
            <img
              src="blue_heart.webp"
              className="h-6 w-6 md:h-10 md:w-10 drop-shadow-blue"
            />
          </div>
        </Col>
      </Row>
      <div className="bg-gradient-to-r from-about-left to-about-right md:w-1/2 w-10/12 rounded-3xl m-5 flex justify-center items-center flex-col">
        <p className="bg-about-top font-lexend text-base md:text-xl py-5 px-4 m-3 text-white text-center rounded-3xl">
          Rose Hack welcomes both undergraduate and high school students for a
          lively weekend filled with innovation, discovery, networking,
          mentorship, and so much more!
        </p>
        <div className="flex justify-between md:px-5 !px-2 my-3 w-10/12">
          <img className="w-3/12 md:w-2/12" src="plus_button.webp"></img>
          <div className="w-2/12 flex justify-between items-center">
            <div className="h-full flex justify-center items-end">
              <FaCircle className="text-about-pink text-3xl md:text-5xl" />
            </div>
            <div className="flex h-full justify-center items-start">
              <FaCircle className="text-about-blue text-3xl md:text-5xl" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full justify-center mt-20">
        <img draggable="false" src="pixels_2.webp" />
      </div>
    </section>
  );
};

export default About;
