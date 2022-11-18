import React from "react";
import { FaCircle } from "react-icons/fa";
import { Row, Col } from "react-bootstrap";
import { sponsors } from "./data/sponsors";

const Sponsors = () => {
  return (
    <section
      id="sponsors"
      className="bg-gradient-to-b from-sponsors-top to-sponsors-bottom w-full flex justify-center items-center flex-col scroll-m-[2vh]"
    >
      <div className="w-10/12 flex justify-center items-center flex-col">
        <div className="flex justify-between items-center w-full m-5">
          <img
            src="PINK_HEART1.png"
            className="h-10 w-10 transform hidden md:flex"
          />
          <FaCircle className="drop-shadow-blue text-white hidden md:flex" />
          <FaCircle className="drop-shadow-blue text-white hidden md:flex" />
          <FaCircle className="drop-shadow-blue text-white hidden lg:flex" />
          <FaCircle className="drop-shadow-blue text-white hidden md:flex" />

          <p className="drop-shadow-blue font-pixel text-4xl p-0 m-0 text-white text-center w-full md:w-auto">
            SPONSORS
          </p>
          <FaCircle className="drop-shadow-blue text-white hidden md:flex" />
          <FaCircle className="drop-shadow-blue text-white hidden md:flex" />
          <FaCircle className="drop-shadow-blue text-white hidden lg:flex" />
          <FaCircle className="drop-shadow-blue text-white hidden md:flex" />
          <img src="PINK_HEART1.png" className="h-10 w-10 hidden md:flex" />
        </div>
        <Row>
          {sponsors.map((sponsor, index) => (
            <Col lg={3} md={4} xs={6} key={index} className="p-4">
              <div>
                <div className={`rounded-full hover:-translate-y-2`}>
                  <a href={sponsor.link} target="_blank" rel="noreferrer">
                    <img
                      src={sponsor.pic}
                      className="border-about-right drop-shadow-blue border-4 rounded-full "
                    />
                  </a>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
      <div className="w-full justify-center">
        <img draggable="false" src="pixel6.png" />
      </div>
    </section>
  );
};

export default Sponsors;
