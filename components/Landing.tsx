import React from "react";
import { FaCircle } from "react-icons/fa";
import ProgressBar from "react-bootstrap/ProgressBar";
import Link from "next/link";

const Landing = () => {
  return (
    <div className="flex flex-col bg-gradient-to-br from-landing-bottom to-landing-bottompink w-full justify-center item-center pt-10">
      <div className="w-7/12 flex p-6 m-auto text-center items-center justify-evenly">
        <img draggable="false" className="w-1/12" src="PINK_HEART1.png" />
        <FaCircle className="text-white hidden md:block" />
        <FaCircle className="text-white " />
        <img draggable="false" className="w-1/12" src="BLUE_HEART1.png" />
        <FaCircle className="text-white hidden md:block" />
        <FaCircle className="text-white " />
        <img draggable="false" className="w-1/12" src="PINK_HEART1.png" />
        <FaCircle className="text-white hidden md:block" />
        <FaCircle className="text-white " />
        <img draggable="false" className="w-1/12" src="BLUE_HEART1.png" />
      </div>
      <div className="shadow-[0_0px_72px_0] shadow-white/60 m-auto bg-gradient-to-b from-landing-secondtop/20 to-landing-second-bottom/20 border-[6px] rounded-3xl text-center justify-center items-center w-7/12 p-4">
        <div className="drop-shadow-lightblue text-white font-pixel text-4xl justify-center">
          Rose Hack <br /> 2023
          <p className="pt-3 text-2xl no-underline"> JANUARY 14-15</p>
        </div>
        <div className="flex items-center justify-center py-3">
          <Link href="/register">
            <a className="shadow-[0_0_16px_0] hover:scale-105 no-underline shadow-[#15DBFF] px-4 drop-shadow-blue p-2 font-pixel text-white border-[6px] rounded-2xl text-sm md:text-2xl">
              Register
            </a>
          </Link>
        </div>
        <div className="pt-4 w-7/12 justify-center items-center m-auto">
          <ProgressBar
            className="border-4 !rounded-full drop-shadow-green"
            variant="lightgreen"
            now={
              100 -
              Math.round(
                (new Date(2023, 0, 14, 12).getTime() - new Date().getTime()) /
                  1000 /
                  3600 /
                  24
              )
            }
            style={{ height: 32 }}
          />
        </div>
        <div className="p-2 pb-4 drop-shadow-green font-pixel text-white text-md">
          now loading...{" "}
          {Math.round(
            (new Date(2023, 0, 14, 12).getTime() - new Date().getTime()) /
              1000 /
              3600 /
              24
          )}
          &nbsp;days left
        </div>
      </div>
      <div className="w-7/12 flex p-6 m-auto text-center items-center justify-evenly">
        <img draggable="false" className="w-1/12" src="PINK_HEART1.png" />
        <FaCircle className="text-white hidden md:block" />
        <FaCircle className="text-white " />
        <img draggable="false" className="w-1/12" src="BLUE_HEART1.png" />
        <FaCircle className="text-white hidden md:block" />
        <FaCircle className="text-white " />
        <img draggable="false" className="w-1/12" src="PINK_HEART1.png" />
        <FaCircle className="text-white hidden md:block" />
        <FaCircle className="text-white " />
        <img draggable="false" className="w-1/12" src="BLUE_HEART1.png" />
      </div>
      <div className="w-full justify-center">
        <img draggable="false" src="pixels_landing.png" />
      </div>
    </div>
  );
};

export default Landing;
