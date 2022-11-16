import React from "react";
import Profile from "./Profile";
import { Row, Col } from "react-bootstrap";
import { profiles, commitee } from "./data/team";

const Team = () => {
  return (
    <section
      id="board"
      className="bg-gradient-to-b from-team-top to-team-bottom flex justify-center items-center flex-col pt-[11vh] scroll-m-[2vh]"
    >
      <div className="w-10/12 flex justify-center items-center flex-col">
        <p className="font-pixel text-4xl text-white text-center">
          Meet the Team
        </p>
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
        <p className="font-pixel text-4xl text-white text-center">
          Committee Members
        </p>
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
