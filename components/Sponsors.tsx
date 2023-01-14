import React from "react";
import { FaCircle } from "react-icons/fa";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { sponsors } from "./data/sponsors";
import PinkHeart from "../public/pink_heart.webp";
import Pixels from "../public/pixels_6.webp";
import Image from "next/image";
import Triad from "../public/triad.webp";
import Desmos from "../public/desmos.webp";
import Balsamiq from "../public/balsamiq.webp";
import Ripplematch from "../public/ripplematch.webp";
import Wolfram from "../public/wolfram.webp";
import Badabeanbadaboom from "../public/badabeanbadaboom.webp";
import Echo3d from "../public/echo3d.webp";
import Winc from "../public/winc.webp";
import Acm from "../public/acm.webp";
import Swe from "../public/swe.webp";
import Bcoe from "../public/ucreng.webp";
import Gcap from "../public/gcap.webp";
import Google from "../public/googlecloud.webp";
import Hackster from "../public/hackster.webp";
import Sponsor from "./Sponsor";

const images = [
  Triad,
  Desmos,
  Balsamiq,
  Ripplematch,
  Wolfram,
  Badabeanbadaboom,
  Echo3d,
  Winc,
  Acm,
  Swe,
  Bcoe,
  Gcap,
  Google,
  Hackster,
];

const Sponsors = () => {
  return (
    <section
      id="sponsors"
      className="bg-gradient-to-b from-sponsors-top to-sponsors-bottom w-full flex justify-center items-center flex-col scroll-m-[10vh]"
    >
      <div className="w-11/12 flex justify-center items-center flex-col">
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
            SPONSORS
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
        <Row className="w-8/12">
          {sponsors.map((sponsor, index) => (
            <Col lg={3} md={4} xs={6} key={index} className="p-4">
              <Sponsor
                link={sponsor.link}
                image={images[index]}
                index={index}
                key={index}
              />
            </Col>
          ))}
        </Row>
      </div>
      <div className="w-full justify-center mt-20">
        <Image src={Pixels} alt="Pixels" className="w-[100vw]" />
      </div>
    </section>
  );
};

export default Sponsors;
