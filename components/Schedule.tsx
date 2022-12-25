import React from "react";
import { FaCircle } from "react-icons/fa";
import { workshops, events, events2, activities } from "./data/schedule";
import { Row, Col, Container } from "react-bootstrap";
import Image from "next/image";

import pixels from "../public/pixels_4.webp";

const Schedule = () => {
  return (
    <section className="flex flex-col w-full bg-gradient-to-b from-schedule-top to-schedule-bottom">
      <div className="drop-shadow-blue flex flex-row items-center justify-center p-4">
        <FaCircle className="text-white" />
        <div className="bg-gradient-to-b from-schedule-purple border-[8px] rounded-[36px] m-3 drop-shadow-blue/50">
          <p className="pt-4 px-4 font-pixel text-white text-4xl">SCHEDULE</p>
        </div>
        <FaCircle className="text-white" />
      </div>
      <div className="md:ml-16 flex justify-left items-center text-center">
        {/* <FaCircle className="text-white text-sm text-center" /> */}
        <p className="p-2 font-pixel text-3xl text-white drop-shadow-blue">
          DAY ONE - JANUARY 14
        </p>
      </div>
      <div className="flex flex-row items-center justify-center text-center">
        <Row className="w-9/12">
          <Col>
            <p className="drop-shadow-bluesmall font-lexend text-3xl underline underline-offset-4 text-white">
              Workshops
            </p>
            {workshops.map((workshop, index) => (
              <Col key={index}>
                <div className="bg-gradient-to-b from-schedule-purple/25 drop-shadow-blue border-4 rounded-3xl m-3 p-3 text-white font-lexend">
                  <Row class="g-0">
                    <Row>
                      <p className="text-2xl">{workshop.title}</p>
                    </Row>
                    <Row>
                      <p>{workshop.time}</p>

                      <hr></hr>
                    </Row>
                    <Row>
                      <p className="drop-shadow-pinksmall"> {workshop.lead}</p>

                      <hr className="text-white"></hr>
                    </Row>
                    <Row>
                      <p>{workshop.loc}</p>
                    </Row>
                  </Row>
                </div>
              </Col>
            ))}
          </Col>

          <Col>
            <p className="drop-shadow-bluesmall font-lexend text-3xl text-white underline underline-offset-4">
              Events
            </p>
            {events.map((event, index) => (
              <Col>
                <div className="bg-gradient-to-b from-schedule-purple/25 drop-shadow-blue border-4 rounded-3xl m-3 p-3 text-white font-lexend">
                  <Row class="g-0">
                    <Row>
                      <p className="text-2xl">{event.title}</p>
                    </Row>
                    <Row>
                      <p>{event.time}</p>
                      <hr></hr>
                    </Row>

                    <Row>
                      <p>{event.loc}</p>
                    </Row>
                  </Row>
                </div>
              </Col>
            ))}
          </Col>

          <Col>
            <p className="drop-shadow-bluesmall font-lexend text-3xl underline underline-offset-4 text-white">
              Activities
            </p>
            {activities.map((act, index) => (
              <Col>
                <div className="bg-gradient-to-b from-schedule-purple/25 drop-shadow-blue border-4 rounded-3xl m-3 p-3 text-white font-lexend">
                  <Row class="g-0">
                    <Row className="text-2xl">
                      <p>{act.title}</p>
                    </Row>
                    <Row>
                      <p>{act.time}</p>
                      <hr></hr>
                    </Row>

                    <Row>
                      <p>{act.loc}</p>
                    </Row>
                  </Row>
                </div>
              </Col>
            ))}
          </Col>
        </Row>
      </div>
      <div className="md:ml-16 flex justify-left items-center text-center mt-4">
        {/* <FaCircle className="text-white text-sm text-center" /> */}
        <p className="md:mt-12 p-2 font-pixel text-3xl text-white drop-shadow-blue">
          DAY TWO - JANUARY 15
        </p>
      </div>
      <div className="flex flex-row items-center justify-center text-center">
        <Row className="w-9/12 md:w-1/3">
          <Col>
            <p className="drop-shadow-bluesmall font-lexend text-3xl underline underline-offset-4 text-white">
              Events
            </p>
            {events2.map((event, index) => (
              <Col>
                <div className="bg-gradient-to-b from-schedule-purple/25 drop-shadow-blue border-4 rounded-3xl m-3 p-3 text-white font-lexend">
                  <Row class="g-0">
                    <Row className="text-2xl">
                      <p>{event.title}</p>
                    </Row>
                    <Row>
                      <p>{event.time}</p>
                      <hr></hr>
                    </Row>
                    <Row>
                      <p>{event.loc}</p>
                    </Row>
                  </Row>
                </div>
              </Col>
            ))}
          </Col>
        </Row>
      </div>

      <Image src={pixels} alt="" draggable="false" className="w-[100vw]" />
    </section>
  );
};

export default Schedule;
