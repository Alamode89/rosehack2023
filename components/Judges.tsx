import React from "react";
import Profile from "./Profile";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { judges } from "./data/judges";
import { FaCircle } from "react-icons/fa";
import Image from "next/image";
import PinkHeart from "../public/pink_heart.webp";
import Pixels from "../public/pixels_6.webp";
import Jiasi from "../public/Jiasi.webp";
import Yihan from "../public/Yihan.webp";
import Allan from "../public/Allan.webp";
import Craig from "../public/craig.webp";
import Sasya from "../public/sas.webp";
import Lavi from "../public/Lavi.webp";
import Stephen from "../public/Stephen.webp";
import Aishwarya from "../public/aish.webp";
import Audrey from "../public/audrey.webp";
import Jacob from "../public/Jacob.webp";
import Madhumitha from "../public/Madhumitha.webp";
import Kevin from "../public/Kevin.webp";
import Omar from "../public/Omar.webp";
import Pratap from "../public/pratappic.webp";
import Xin from "../public/Xin.webp";

const images = [
  Jiasi,
  Yihan,
  Allan,
  Craig,
  Sasya,
  Lavi,
  Stephen,
  Aishwarya,
  Audrey,
  Jacob,
  Madhumitha,
  Kevin,
  Omar,
  Pratap,
  Xin,
];

const Judges = () => {
  return (
    <section
      id="judges"
      className="bg-gradient-to-b from-judges-top to-judges-bottom flex justify-center items-center flex-col scroll-my-[10vh]"
    >
      <div className="w-10/12 flex justify-center items-center flex-col">
        <div className="flex justify-between items-center w-full m-5 drop-shadow-white">
          <Image
            src={PinkHeart}
            alt=""
            width={55}
            className="transform hidden md:flex"
          />
          <FaCircle className="text-white hidden md:flex" />
          <FaCircle className="text-white hidden md:flex" />
          <FaCircle className="text-white hidden lg:flex" />
          <FaCircle className="text-white hidden md:flex" />

          <p className="font-pixel text-2xl p-0 m-0 text-white text-center w-full md:w-auto">
            JUDGES
          </p>
          <FaCircle className="text-white hidden md:flex" />
          <FaCircle className="text-white hidden md:flex" />
          <FaCircle className="text-white hidden lg:flex" />
          <FaCircle className="text-white hidden md:flex" />
          <Image
            src={PinkHeart}
            alt=""
            width={55}
            className="transform hidden md:flex"
          />
        </div>
        <Row className="flex justify-center items-initial">
          {judges.map((judge, index) => (
            <Col lg={3} md={4} xs={6} key={index} className=" p-3">
              <Profile
                name={judge.name}
                position={judge.position}
                shadow={judge.shadow}
                image={images[index]}
                linkedin={judge.linkedin}
              />
            </Col>
          ))}
        </Row>
        {/* <div className="flex justify-between items-center w-full m-5 drop-shadow-white">
          <img
            src="pink_heart.webp"
            className="h-14 w-14 transform hidden md:flex"
          />
          <FaCircle className="text-white hidden md:flex" />
          <img
            src="pink_heart.webp"
            className="h-14 w-14 transform hidden md:flex"
          />
          <FaCircle className="text-white hidden md:flex" />
          <img
            src="pink_heart.webp"
            className="h-14 w-14 transform hidden md:flex"
          />
          <FaCircle className="text-white hidden lg:flex" />
          <img
            src="pink_heart.webp"
            className="h-14 w-14 transform hidden md:flex"
          />
          <FaCircle className="text-white hidden md:flex" />
          <img
            src="pink_heart.webp"
            className="h-14 w-14 transform hidden md:flex"
          />
        </div> */}
      </div>

      <div className="w-full justify-center mt-20">
        <Image src={Pixels} alt="Pixels" />
      </div>
    </section>
  );
};

export default Judges;
