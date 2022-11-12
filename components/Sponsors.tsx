import React from "react";
import { FaCircle } from "react-icons/fa";
import { Row, Col } from "react-bootstrap";

const sponsors = [
  {
    pic: "triad.jpeg",
    link: "https://www.triadmagnetics.com/",
    color:"#F5BB2C"
  },
  {
    pic: "desmos.png",
    link: "https://www.desmos.com",
    color:"#148B47"
  },
  {
    pic: "balsamiq.jpg",
    link: "https://balsamiq.com/",
    color:"#AF040A"
  },
  {
    pic: "ripplematch.png",
    link: "https://ripplematch.com/",
    color:"#3B8BEA"
  },
  {
    pic: "wolfram.png",
    link: "https://www.wolframalpha.com/",
    color:"#FD755D"
  },
  {
    pic: "badabeanbadaboom.jpeg",
    link: "https://www.badabeansnacks.com/",
    color:"#6C2310"
  },
  {
    pic: "echo3d.webp",
    link: "https://www.echo3d.com/",
    color:"#002D64"
  },
];

const Sponsors = () => {
  return (
    <section
      id="sponsors"
      className="bg-gradient-to-b from-sponsors-top to-sponsors-bottom w-full flex justify-center items-center flex-col py-[11vh] scroll-m-[2vh]"
    >
      <div className="w-10/12 flex justify-center items-center flex-col">
        <div className="w-1/2">
          <div className="flex justify-between items-center mt-4">
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
            <Col lg={3} md={4} xs={6} key={index} className="p-4">
              <div>
                <div className={`rounded-full hover:-translate-y-2`}>
                  <a
                    href={sponsor.link}
                    target="_blank"
                    rel="noreferrer"
                  >
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
    </section>
  );
};

export default Sponsors;
