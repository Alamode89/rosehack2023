import React from "react";
import { Row, Col } from "react-bootstrap";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

interface props {
  className: string;
  name: string;
  pronouns: string;
  position: string;
  game: string;
  linkedin: string;
  instagram: string;
  github: string;
  image: string;
}

const Profile = ({
  className,
  name,
  pronouns,
  position,
  game,
  linkedin,
  instagram,
  github,
  image,
}: props) => {
  return (
    <div className={`rounded-2xl m-2 ` + className}>
      <Row className="m-0">
        <Col
          xs={4}
          className="flex justify-center items-center flex-col p-0 m-0 w-full border-r-2 border-black"
        >
          <img src={image} className="rounded-tl-2xl" />
        </Col>

        <Col
          xs={8}
          className="font-poppins font-thin p-0 m-0 flex justify-evenly items-center flex-col"
        >
          <div className="pl-2 pt-2 w-full h-2/3 flex justify-center items-center">
            <div className=" flex justify-start items-center w-full ">
              <div className="text-xl flex justify-center items-start font-bold p-1 flex-col">
                {name.toUpperCase()}
                <div className="font-thin text-sm m-0 p-0">
                  {pronouns.toUpperCase()}
                </div>
              </div>
            </div>
          </div>

          <div className="pl-2 w-full h-1/3 flex justify-center items-center border-t-2 border-black">
            <p className="text-xl w-full font-bold inline m-0 p-1">
              {position.toUpperCase()}
            </p>
          </div>
        </Col>

        <Col
          xs={12}
          className="flex justify-start items-center border-t-2  border-black m-0 p-0"
        >
          <div className="flex justify-evenly border-r-2 border-black items-center w-1/3 m-0 p-0 h-full ">
            {linkedin === "" ? (
              <></>
            ) : (
              <a
                href={linkedin}
                className="text-black"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="text-2xl hover:text-gray-600" />
              </a>
            )}

            {instagram === "" ? (
              <></>
            ) : (
              <a
                href={instagram}
                className="text-black"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram className="text-2xl hover:text-gray-600" />
              </a>
            )}

            {github === "" ? (
              <></>
            ) : (
              <a
                href={github}
                className="text-black"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="text-2xl hover:text-gray-600" />
              </a>
            )}
          </div>
          <div className="h-full p-2">
            <p className=" text-base h-full pl-1  inline">
              favorite game: {game}
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Profile;
