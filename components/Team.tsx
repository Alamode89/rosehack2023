import React from "react";
import Profile from "./Profile";
import { Row, Col } from "react-bootstrap";
import { profiles, commitee } from "./data/team";
import { FaCircle } from "react-icons/fa";

const Team = () => {
  return (
    <section
      id="board"
      className="bg-gradient-to-b from-team-top to-team-bottom flex justify-center items-center flex-col"
    >
      <div className="w-10/12 flex justify-center items-center flex-col">
        <div className="flex justify-between items-center w-full m-5">
          <img src="PINK_HEART1.png" className="h-10 w-10 transform" />
          <FaCircle className="drop-shadow-blue text-white hidden md:flex" />
          <FaCircle className="drop-shadow-blue text-white hidden md:flex" />
          <FaCircle className="drop-shadow-blue text-white hidden lg:flex" />
          <FaCircle className="drop-shadow-blue text-white" />

          <p className="drop-shadow-blue font-pixel text-4xl p-0 m-0 text-white text-center">
            Meet the Team
          </p>
          <FaCircle className="drop-shadow-blue text-white hidden md:flex" />
          <FaCircle className="drop-shadow-blue text-white hidden md:flex" />
          <FaCircle className="drop-shadow-blue text-white hidden lg:flex" />
          <FaCircle className="drop-shadow-blue text-white" />
          <img src="PINK_HEART1.png" className="h-10 w-10 " />
        </div>
        <Row className="flex justify-center items-initial">
          {profiles.map((profile, index) => (
            <Col lg={3} md={4} xs={6} key={index} className=" p-3">
              <Profile
                name={profile.name}
                position={profile.position}
                shadow={profile.shadow}
                image={profile.image}
                linkedin={profile.linkedin}
              />
            </Col>
          ))}
        </Row>
        <div className="flex justify-between items-center w-full m-5">
          <img src="BLUE_HEART1.png" className="h-10 w-10 transform" />
          <FaCircle className="drop-shadow-blue text-white hidden md:flex" />
          <FaCircle className="drop-shadow-blue text-white hidden md:flex" />
          <FaCircle className="drop-shadow-blue text-white hidden lg:flex" />
          <FaCircle className="drop-shadow-blue text-white" />

          <p className="drop-shadow-blue font-pixel text-4xl p-0 m-0 text-white text-center">
            Committee Members
          </p>
          <FaCircle className="drop-shadow-blue text-white hidden md:flex" />
          <FaCircle className="drop-shadow-blue text-white hidden md:flex" />
          <FaCircle className="drop-shadow-blue text-white hidden lg:flex" />
          <FaCircle className="drop-shadow-blue text-white" />
          <img src="BLUE_HEART1.png" className="h-10 w-10 " />
        </div>
        <div className="flex justify-center items-stretch flex-col p-2 w-full">
          <div
            className={`shadow-team-yellow shadow-[20px_-16px_0px_0px] rounded-[2rem] w-full`}
          >
            <div className="border-white bg-white border-8 rounded-3xl">
              <Row className="w-full p-3 flex justify-left items-center">
                {commitee.map((member, index) => (
                  <Col
                    key={index}
                    xl={3}
                    xs={6}
                    className="flex justify-left items-center"
                  >
                    <p className="p-0 m-2 text-lg font-semibold text-black font-lexend">
                      {member}
                    </p>
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full justify-center">
        <img draggable="false" src="pixel5.png" />
      </div>
    </section>
  );
};

export default Team;
