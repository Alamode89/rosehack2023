import React from "react";
import { FaCircle } from "react-icons/fa";

const Schedule = () => {
  return (
    <section className="flex flex-col w-full bg-gradient-to-b from-schedule-top to-schedule-bottom">
      <div className="flex flex-row items-center justify-center p-4">
        <FaCircle className="text-white" />
        <div className="border-8 rounded-3xl m-3">
          <p className="pt-4 px-2 font-pixel text-white text-4xl">SCHEDULE</p>
        </div>
        <FaCircle className="text-white" />
      </div>
      <div className="ml-16 flex justify-left items-center text-center">
        <FaCircle className="text-white text-sm" />
        <p className="p-2 font-pixel text-2xl text-white">
          {" "}
          DAY ONE - JANUARY 14
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="border-8 rounded-3xl m-3">
          <p className="pt-4 px-16 font-pixel text-white text-2xl text-center">
            -OPENING- <br /> 8AM-9AM | WCH 127
          </p>
        </div>
        <div className="border-8 rounded-3xl m-3">
          <p className="pt-4 px-16 font-pixel text-white text-2xl text-center">
            -FILLER- <br /> 8AM-9AM | WCH 127
          </p>
        </div>
        <div className="border-8 rounded-3xl m-3">
          <p className="pt-4 px-16 font-pixel text-white text-2xl text-center">
            -FILLER- <br /> 8AM-9AM | WCH 127
          </p>
        </div>
        <div className="border-8 rounded-3xl m-3">
          <p className="pt-4 px-16 font-pixel text-white text-2xl text-center">
            -FILLER- <br /> 8AM-9AM | WCH 127
          </p>
        </div>
        <div className="border-8 rounded-3xl m-3">
          <p className="pt-4 px-16 font-pixel text-white text-2xl text-center">
            -FILLER- <br /> 8AM-9AM | WCH 127
          </p>
        </div>
      </div>
      <div className="ml-16 flex justify-left items-center text-center mt-12">
        <FaCircle className="text-white text-sm" />
        <p className="p-2 font-pixel text-2xl text-white">
          {" "}
          DAY TWO - JANUARY 15
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="border-8 rounded-3xl m-3">
          <p className="pt-4 px-16 font-pixel text-white text-2xl text-center">
            -OPENING- <br /> 8AM-9AM | WCH 127
          </p>
        </div>
        <div className="border-8 rounded-3xl m-3">
          <p className="pt-4 px-16 font-pixel text-white text-2xl text-center">
            -FILLER- <br /> 8AM-9AM | WCH 127
          </p>
        </div>
        <div className="border-8 rounded-3xl m-3">
          <p className="pt-4 px-16 font-pixel text-white text-2xl text-center">
            -FILLER- <br /> 8AM-9AM | WCH 127
          </p>
        </div>
        <div className="border-8 rounded-3xl m-3">
          <p className="pt-4 px-16 font-pixel text-white text-2xl text-center">
            -FILLER- <br /> 8AM-9AM | WCH 127
          </p>
        </div>
        <div className="border-8 rounded-3xl m-3">
          <p className="pt-4 px-16 font-pixel text-white text-2xl text-center">
            -FILLER- <br /> 8AM-9AM | WCH 127
          </p>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
