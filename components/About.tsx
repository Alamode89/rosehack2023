import React from "react";
import { FaCircle } from "react-icons/fa";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import PinkHeart from "../public/pink_heart.webp";
import BlueHeart from "../public/blue_heart.webp";
import Pixels from "../public/pixels_2.webp";
import Button from "../public/plus_button.webp";
import Machine1 from "../public/machine_1.webp";
import Machine2 from "../public/machine_2.webp";

const About = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-about-top to-about-bottom w-full flex justify-center items-center flex-col scroll-my-[10vh]"
    >
      <div className="flex justify-between items-center w-10/12 mt-5 drop-shadow-white">
        <Image
          src={PinkHeart}
          alt=""
          width={55}
          className="transform hidden md:flex"
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
        <Image src={PinkHeart} alt="" width={55} className="hidden md:flex" />
      </div>

      <Row className="mt-5 md:mt-0 sm:w-9/12 w-10/12 flex justify-evenly items-center flex-row-reverse sm:flex-row">
        <Col
          xl={7}
          md={6}
          className="md:px-4 px-0 flex justify-center items-center flex-col"
        >
          <div className="flex justify-between items-center mb-4 w-full">
            <Image
              src={PinkHeart}
              alt=""
              width={55}
              className="drop-shadow-pink"
            />
            <FaCircle className="text-white drop-shadow-pink text-sm md:text-base" />
            <Image
              src={PinkHeart}
              alt=""
              width={55}
              className="drop-shadow-pink"
            />
            <FaCircle className="text-white drop-shadow-pink text-sm md:text-base" />
            <Image
              src={PinkHeart}
              alt=""
              width={55}
              className="drop-shadow-pink"
            />
          </div>
          <p className="drop-shadow-pinksmall py-0 md:py-5 font-lexend text-base md:text-xl w-11/12 p-0 m-0 text-white text-justify">
            Rose Hack is UC Riverside&#39;s 24-hour hackathon, one of the few
            women-centric hackathons in California! Founded by the female
            leaders of the Women in Computing (WINC) and the Society of Women
            Engineers (SWE).
          </p>

          <div className="flex justify-between items-center mt-4 w-full">
            <Image
              src={PinkHeart}
              alt=""
              width={55}
              className="drop-shadow-pink"
            />
            <FaCircle className="text-white drop-shadow-pink text-sm md:text-base" />
            <Image
              src={PinkHeart}
              alt=""
              width={55}
              className="drop-shadow-pink"
            />
            <FaCircle className="text-white drop-shadow-pink text-sm md:text-base" />
            <Image
              src={PinkHeart}
              alt=""
              width={55}
              className="drop-shadow-pink"
            />
          </div>
        </Col>
        <Col xl={3} md={5} className="flex items-center justify-center p-8">
          <div className="w-2/5 md:w-10/12 pt-5 md:pt-0">
            <Image src={Machine2} alt="Arcade Machine" />
          </div>
        </Col>
      </Row>
      <Row className="mt-1 sm:w-9/12 w-10/12 flex justify-evenly items-center flex-col-reverse md:flex-row-reverse">
        <Col xl={3} md={5} className="flex items-center justify-center">
          <div className="w-2/5 md:w-10/12 pt-5 md:pt-0">
            <Image src={Machine1} alt="Arcade Machine" />
          </div>
        </Col>
        <Col
          xl={7}
          md={6}
          className="md:px-5 px-0 flex justify-center items-center flex-col"
        >
          <div className="flex justify-between items-center mb-4 w-full">
            <Image
              src={BlueHeart}
              alt=""
              width={55}
              className="drop-shadow-blue"
            />
            <FaCircle className="text-white drop-shadow-blue text-sm md:text-base" />
            <Image
              src={BlueHeart}
              alt=""
              width={55}
              className="drop-shadow-blue"
            />
            <FaCircle className="text-white drop-shadow-blue text-sm md:text-base" />
            <Image
              src={BlueHeart}
              alt=""
              width={55}
              className="drop-shadow-blue"
            />
          </div>
          <p className="drop-shadow-bluesmall py-0 md:py-5 text-abse md:text-xl font-lexend w-11/12 p-0 m-0 text-white text-justify">
            Rose Hack&#39;s mission is to encourage individuals from
            underrepresented groups in STEM to gain experience, create strong
            networks, and build amazing projects through their shared passions
            in science and technology.
          </p>
          <div className="flex justify-between items-center mt-4 w-full">
            <Image
              src={BlueHeart}
              alt=""
              width={55}
              className="drop-shadow-blue"
            />
            <FaCircle className="text-white drop-shadow-blue text-sm md:text-base" />
            <Image
              src={BlueHeart}
              alt=""
              width={55}
              className="drop-shadow-blue"
            />
            <FaCircle className="text-white drop-shadow-blue text-sm md:text-base" />
            <Image
              src={BlueHeart}
              alt=""
              width={55}
              className="drop-shadow-blue"
            />
          </div>
        </Col>
      </Row>
      <div className="drop-shadow-lg bg-gradient-to-r from-about-left to-about-right md:w-1/2 w-10/12 rounded-3xl m-5 flex justify-center items-center flex-col">
        <div className="bg-about-top m-3 rounded-3xl drop-shadow-lg">
          <p className="bg-formalInvitation drop-shadow-bluesmall font-lexend text-base md:text-xl py-5 px-4 text-white text-center rounded-3xl m-0">
            Rose Hack welcomes both undergraduate and high school students for a
            lively weekend filled with innovation, discovery, networking,
            mentorship, and so much more!
          </p>
        </div>
        <div className="flex justify-between md:px-5 !px-2 my-3 w-10/12">
          <div className="w-3/12 md:w-2/12 drop-shadow-lg">
            <Image src={Button} alt="Play Button" />
          </div>
          <div className="w-2/12 flex justify-between items-center">
            <div className="h-full flex justify-center items-end">
              <FaCircle className="text-about-pink text-3xl md:text-5xl drop-shadow-lg" />
            </div>
            <div className="flex h-full justify-center items-start">
              <FaCircle className="text-about-blue text-3xl md:text-5xl drop-shadow-lg" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full justify-center mt-20">
        <Image src={Pixels} alt="Pixels" className="w-[100vw]" />
      </div>
    </section>
  );
};

export default About;
