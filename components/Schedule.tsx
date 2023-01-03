import React, { useState } from "react";
import { FaCircle } from "react-icons/fa";
import Pixels from "../public/pixels_2.webp";
import Image from "next/image";
import { Saturday, Sunday } from "./Schedule/Days";
import Button from "react-bootstrap/Button";

const Schedule = () => {
  const [day, setDay] = useState("saturday");

  const checkDay = () => {
    if (day === "saturday") {
      return <Saturday />;
    } else if (day === "sunday") {
      return <Sunday />;
    }
  };

  return (
    <section className="flex flex-col w-full bg-gradient-to-b from-schedule-top to-schedule-bottom items-center h-full">
      <div className="drop-shadow-blue flex flex-row items-center justify-center p-4">
        <FaCircle className="text-white" />
        <div className="py-2 px-4 font-pixel text-white text-2xl bg-gradient-to-b from-schedule-purple/50 border-[6px] rounded-xl m-3 drop-shadow-blue/50">
          SCHEDULE
        </div>
        <FaCircle className="text-white" />
      </div>
      <div className="font-lexend text-2xl drop-shadow-pink">
        <p className="text-white">
          Key: Workshops <span className="text-rose-pink">Event </span>
          <span className="text-rose-purple">Activity </span>
          <span className="text-team-yellow">Speakers </span>
        </p>
      </div>

      <div className="rounded-xl bg-gradient-to-b from-schedule-purple/50 border-4 border-white text-center w-10/12 h-[36rem] overflow-auto ">
        <div className="justify-left h-16 bg-rose-pink">
          <Button className="m-2" onClick={() => setDay("saturday")}>
            Saturday
          </Button>
          <Button onClick={() => setDay("sunday")}>Sunday</Button>
        </div>
        {checkDay()}
      </div>

      <div className="w-full justify-center mt-20">
        <Image src={Pixels} alt="Pixels" />
      </div>
    </section>
  );
};

export default Schedule;
