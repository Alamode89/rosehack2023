import React from "react";
import { Row, Col } from "react-bootstrap";

const Landing = () => {
  return (
    <section
      style={{ backgroundImage: `url('RH_HOME_5.png')` }}
      className="flex justify-center items-center py-5"
    >
      <Row className="p-0 m-0 w-11/12 flex justify-center items-center">
        <Col
          md={6}
          sm={12}
          className="flex flex-col justify-center sm:items-start  items-center"
        >
          <img src="RH_HOME_3.png" className="w-2/3" />
          <img src="RH_HOME_4.png" className="w-1/2 my-4 mt-0" />
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
            rel="noreferrer"
            className="cursor-default flex flex-col justify-center sm:items-start items-center"
          >
            <img
              src="RH_ASSET_20.png"
              className="w-1/2 lg:w-1/3 my-5 mb-2 cursor-pointer hover:scale-105"
            />
          </a>

          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
            rel="noreferrer"
            className="cursor-default flex flex-col justify-center sm:items-start items-center"
          >
            <img
              src="RH_ASSET_21.png"
              className="w-1/2 lg:w-1/3 cursor-pointer sm:m-0 mb-5 hover:scale-105"
            />
          </a>
        </Col>

        <Col
          md={6}
          sm={12}
          className="flex justify-center items-end bg-rosehack-primary-pink p-4 pb-0 rounded-xl border-black border-2 m-0"
        >
          <img src="RH_HOME_2.png" className="w-1/2" />
          <img src="RH_HOME_1.png" className="w-1/2" />
        </Col>
      </Row>
    </section>
  );
};

export default Landing;
