import React from "react";
import Profile from "./Profile";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { profiles, commitee } from "./data/team";
import { FaCircle } from "react-icons/fa";
import PinkHeart from "../public/pink_heart.webp";
import Image from "next/image";
import Ashley from "../public/ashley.webp";
import Hallie from "../public/hallie.webp";
import Annabelle from "../public/annabelle.webp";
import Angie from "../public/angie.webp";
import Samarth from "../public/samarth.webp";
import Nicole from "../public/nicole.webp";
import Bonnie from "../public/bonnie.webp";
import Samantha from "../public/samantha.webp";
import Cindy from "../public/cindy.webp";
import Andre from "../public/andre.webp";
import Divyank from "../public/divyank.webp";
import Pixels from "../public/pixels_5.webp";

const images = [
  Ashley,
  Hallie,
  Annabelle,
  Angie,
  Samarth,
  Nicole,
  Bonnie,
  Samantha,
  Cindy,
  Andre,
  Divyank,
];

const Team = () => {
  return (
    <section
      id="board"
      className="bg-gradient-to-b from-team-top to-team-bottom flex justify-center items-center flex-col scroll-my-[10vh]"
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
            THE TEAM
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
          {profiles.map((profile, index) => (
            <Col lg={3} md={4} xs={6} key={index} className=" p-3">
              <Profile
                name={profile.name}
                position={profile.position}
                shadow={profile.shadow}
                image={images[index]}
                linkedin={profile.linkedin}
              />
            </Col>
          ))}
        </Row>
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

          <p className=" font-pixel text-2xl p-0 m-0 text-white text-center w-full md:w-auto">
            COMMITTEE MEMBERS
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
        <div className="flex justify-center items-stretch flex-col p-2 w-10/12">
          <div
            className={`shadow-team-yellow shadow-[20px_-16px_0px_0px] rounded-[2rem] w-full drop-shadow-lg`}
          >
            <div className="border-white bg-white border-8 rounded-3xl drop-shadow-lg">
              <div className="m-2 rounded-[2rem] bg-fourPointStarts">
                <Row className="w-full p-3 flex justify-left items-center">
                  {commitee.map((member, index) => (
                    <Col
                      key={index}
                      xl={3}
                      xs={12}
                      className="flex justify-left items-center"
                    >
                      <p className="p-0 m-2 text-lg text-center w-full font-semibold text-black font-lexend">
                        {member}
                      </p>
                    </Col>
                  ))}
                </Row>
              </div>
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

export default Team;
