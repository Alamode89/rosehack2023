import React from "react";
import { FaCircle } from "react-icons/fa";
import { workshops, events, events2, activities } from "./data/schedule";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Schedule = () => {
  return (
    <section className="flex flex-col w-full bg-gradient-to-b from-schedule-top to-schedule-bottom">
      <div className="drop-shadow-blue flex flex-row items-center justify-center p-4">
        <FaCircle className="text-white" />
        <div className="py-2 px-4 font-pixel text-white text-2xl bg-gradient-to-b from-schedule-purple/50 border-[6px] rounded-xl m-3 drop-shadow-blue/50">
          SCHEDUL
        </div>
        <FaCircle className="text-white" />
      </div>
      <div className="md:ml-16 flex justify-left items-center text-center">
        <p className="p-2 font-pixel text-2xl text-white drop-shadow-pink">
          DAY ONE - JANUARY 14
        </p>
      </div>
      <div className="flex flex-row items-center justify-center text-center">
        <Row className="w-9/12">
          <Col>
            <p className="drop-shadow-pink font-lexend text-3xl text-white">
              Workshops
            </p>
            {workshops.map((workshop, index) => (
              <Col key={index}>
                <div className="bg-white drop-shadow-pink rounded-3xl m-3  text-white font-lexend">
                  <p className="text-rose-pink text-xl pt-2 mb-0 p-0">
                    {workshop.title}
                  </p>
                  <p className="text-rose-pink text-base mt-0 mb-1 m-0 p-0">
                    {workshop.time}
                  </p>
                  <div className="h-[2px] w-full bg-rose-pink " />
                  <p className="text-rose-pink mt-2 mb-2"> {workshop.lead}</p>
                  <div className="h-[2px] w-full bg-rose-pink " />
                  <p className="text-rose-pink text-xl mt-1 pb-2">
                    {workshop.loc}
                  </p>
                </div>
              </Col>
            ))}
          </Col>

          <Col>
            <p className="drop-shadow-pink font-lexend text-3xl text-white">
              Events
            </p>
            {events.map((event, index) => (
              <Col
                key={index}
                className="bg-gradient-to-b from-schedule-purple/25 drop-shadow-pink border-4 rounded-3xl m-3 p-3 text-white font-lexend"
              >
                <p className="text-2xl">{event.title}</p>
                <p>{event.time}</p>
                <hr />
                <p>{event.loc}</p>
              </Col>
            ))}
          </Col>

          <Col>
            <p className="drop-shadow-pink font-lexend text-3xl text-white">
              Activities
            </p>
            {activities.map((act, index) => (
              <Col
                key={index}
                className="bg-white drop-shadow-pink rounded-3xl m-3  text-white font-lexend"
              >
                <p className="text-rose-pink text-xl pt-2 mb-0 p-0">
                  {act.title}
                </p>
                <p className="text-rose-pink text-base mt-0 mb-1 m-0 p-0">
                  {act.time}
                </p>
                <div className="h-[2px] w-full bg-rose-pink " />
                <p className="text-rose-pink text-xl mt-1 pb-2">{act.loc}</p>
              </Col>
            ))}
          </Col>
        </Row>
      </div>
      <div className="md:ml-16 flex justify-left items-center text-center mt-4">
        <p className="md:mt-12 p-2 font-pixel text-2xl text-white drop-shadow-blue">
          DAY TWO - JANUARY 15
        </p>
      </div>
      <div className="flex flex-row items-center justify-center text-center">
        <Row className="w-9/12 md:w-1/3">
          <Col>
            <p className="drop-shadow-bluesmall font-lexend text-3xl text-white">
              Events
            </p>
            {events2.map((event, index) => (
              <Col
                key={index}
                className="bg-gradient-to-b from-schedule-purple/25 drop-shadow-blue border-4 rounded-3xl m-3 p-3 text-white font-lexend"
              >
                <p>{event.title}</p>
                <p>{event.time}</p>
                <hr />
                <p>{event.loc}</p>
              </Col>
            ))}
          </Col>
        </Row>
      </div>

      <img draggable="false" src="pixels_2.webp" />
    </section>
  );
};

export default Schedule;
