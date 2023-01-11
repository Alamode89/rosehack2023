import React, { useState } from "react";
import { FaCircle } from "react-icons/fa";
import { FaSquare } from "react-icons/fa";
import Pixels from "../public/pixels_2.webp";
import Image from "next/image";
import dynamic from "next/dynamic";

const Saturday = dynamic<{}>(
  () => import("./Schedule/Days").then((module) => module.Saturday),
  { ssr: false }
);

const Sunday = dynamic<{}>(
  () => import("./Schedule/Days").then((module) => module.Sunday),
  { ssr: false }
);

const Schedule = () => {
  const [day, setDay] = useState("saturday");

  return (
    <section className="flex flex-col w-full bg-gradient-to-b from-schedule-top to-schedule-bottom items-center h-full">
      <div className="flex flex-row items-center justify-center p-4">
        <FaCircle className="text-white" />
        <div className="py-2 px-4 font-pixel text-white text-2xl bg-gradient-to-b from-schedule-purple/50 border-[6px] rounded-xl m-3 drop-shadow-blue/50">
          SCHEDULE
        </div>
        <FaCircle className="text-white" />
      </div>
      <div className="flex flex-col md:flex-row text-center font-lexend text-lg md:text-2xl">
        <div className="flex flex-row">
          <FaSquare className="text-rose-purple text-xl  md:text-3xl " />
          <p className="text-white pr-8 md:pr-4"> Activities </p>
          <FaSquare className="text-schedule-blue text-xl md:text-3xl" />
          <p className="text-white pr-4">Events</p>
        </div>
        <div className="flex flex-row">
          <FaSquare className="text-white text-xl  md:text-3xl " />
          <p className="text-white pr-4"> Workshops </p>
          <FaSquare className="text-team-yellow text-xl md:text-3xl " />
          <p className="text-white"> Speakers </p>
        </div>
      </div>

      <div className="text-white rounded-xl bg-gradient-to-b from-schedule-darkpurple/50 to-schedule-bottom/50 border-4 border-white text-center w-10/12 h-[36rem] overflow-auto ">
        <div className="text-left h-16 bg-white/50">
          <button
            className="ml-4 mt-2 bg-schedule-purple transition hover:bg-schedule-darkpurple focus:bg-schedule-darkpurple p-2 rounded-l-xl border-2 font-lexend "
            onClick={() => setDay("saturday")}
          >
            Saturday
          </button>
          <button
            className="bg-schedule-purple hover:bg-schedule-darkpurple transition focus:bg-schedule-darkpurple p-2 rounded-r-xl border-y-2 border-r-2 font-lexend"
            onClick={() => setDay("sunday")}
          >
            Sunday
          </button>
        </div>
        {day === "saturday" ? <Saturday /> : <Sunday />}
      </div>

      <div className="w-full justify-center mt-20">
        <Image src={Pixels} alt="Pixels" className="w-[100vw]" />
      </div>
    </section>
  );
};

export default Schedule;
