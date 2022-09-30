import React from "react";
import { Row, Col } from "react-bootstrap";

const Landing = () => {
  return (
    <section
      style={{ backgroundImage: `url('RH_HOME_5.png')` }}
      className="flex justify-center items-center py-5 min-h-[90vh]"
      id="home"
    >
      <Row className="p-0 m-0 w-11/12 flex justify-center items-center">
        <Col
          md={6}
          sm={12}
          className="flex flex-col justify-center sm:items-start  items-center"
        >
          <img src="RH_WEBSITE_HOME_ASSET_TITLE.png" className="w-2/4 mb-5" />
          <img
            src="RH_WEBSITE_HOME_ASSET.png"
            className="w-1/3 my-4 mt-0 hidden sm:block"
          />
          <img
            src="RH_WEBSITE_HOME_ASSET_TEXT.png"
            className="w-1/2 my-4 mt-0 block sm:hidden"
          />
          <div className="cursor-default flex flex-col justify-center sm:items-start items-center">
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
              rel="noreferrer"
              className="w-1/2 lg:w-1/3 h-full p-0 m-0"
            >
              <img
                src="RH_ASSET_21.png"
                className="w-full cursor-pointer sm:m-0 hover:scale-105"
              />
            </a>
          </div>
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
