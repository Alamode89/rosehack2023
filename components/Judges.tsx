import React from "react";
import Profile from "./Profile";
import { Row, Col } from "react-bootstrap";
import { judge } from "./data/judges";
import { FaCircle } from "react-icons/fa";

const Judges = () => {
  return (
    <section
      id="judges"
      className="bg-gradient-to-b from-judges-top to-judges-bottom flex justify-center items-center flex-col scroll-my-[10vh]"
    >
      <div className="w-10/12 flex justify-center items-center flex-col">
        <div className="flex justify-between items-center w-full m-5 drop-shadow-white">
          <img
            src="pink_heart.webp"
            className="h-10 w-10 transform hidden md:flex"
          />
          <FaCircle className="text-white hidden md:flex" />
          <FaCircle className="text-white hidden md:flex" />
          <FaCircle className="text-white hidden lg:flex" />
          <FaCircle className="text-white hidden md:flex" />

          <p className="font-pixel text-4xl p-0 m-0 text-white text-center w-full md:w-auto">
            JUDGES
          </p>
          <FaCircle className="text-white hidden md:flex" />
          <FaCircle className="text-white hidden md:flex" />
          <FaCircle className="text-white hidden lg:flex" />
          <FaCircle className="text-white hidden md:flex" />
          <img src="pink_heart.webp" className="h-10 w-10 hidden md:flex" />
        </div>
        <Row className="flex justify-center items-initial">
          {judge.map((judge, index) => (
            <Col lg={3} md={4} xs={6} key={index} className=" p-3">
              <Profile
                name={judge.name}
                position={judge.position}
                shadow={judge.shadow}
                image={judge.image}
                linkedin={judge.linkedin}
              />
            </Col>
          ))}
        </Row>
        <div className="flex justify-between items-center w-full m-5 drop-shadow-white">
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
        </div>
      </div>
    </section>
  );
};

export default Judges;
