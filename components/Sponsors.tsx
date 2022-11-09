import React from "react";
import { FaCircle } from "react-icons/fa";
import { Row, Col } from "react-bootstrap";

const sponsors = [
  "triad.jpeg",
  "desmos.png",
  "balsamiq.jpg",
  "ripplematch.png",
  "wolfram.png",
  "badabeanbadaboom.jpeg",
  "echo3d.webp",
];

const Sponsors = () => {
  return (
    <div className="bg-gradient-to-b from-sponsors-top to-sponsors-bottom w-full flex justify-center items-center flex-col">
      <div className="w-10/12 flex justify-center items-center flex-col">
        <div className="w-1/2">
          <div className="flex justify-between items-center  mt-4">
            <FaCircle className="text-white" />
            <img src="PURPLE_HEART.png" className="h-10 w-10 " />
            <FaCircle className="text-white" />
            <img src="PURPLE_HEART.png" className="h-10 w-10 " />
            <FaCircle className="text-white" />
            <img src="PURPLE_HEART.png" className="h-10 w-10 " />
            <FaCircle className="text-white" />
          </div>
          <div className="flex justify-between items-center my-3">
            <img src="PURPLE_HEART.png" className="h-8" />
            <div className="font-pixel text-4xl w-1/2 p-0 m-0 text-white text-center">
              Sponsors
            </div>
            <img src="PURPLE_HEART.png" className="w-8" />
          </div>
          <div className="flex justify-between items-center mb-4">
            <FaCircle className="text-white" />
            <img src="PURPLE_HEART.png" className="h-10 w-10 " />
            <FaCircle className="text-white" />
            <img src="PURPLE_HEART.png" className="h-10 w-10 " />
            <FaCircle className="text-white" />
            <img src="PURPLE_HEART.png" className="h-10 w-10 " />
            <FaCircle className="text-white" />
          </div>
        </div>
        <Row>
          {sponsors.map((sponsor, index) => (
            <Col xl={3} key={index} className="p-4">
              <div>
                <div className={`rounded-full hover:-translate-y-2`}>
                  <img
                    src={sponsor}
                    className="border-team-green border-8 rounded-full "
                  />
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Sponsors;
