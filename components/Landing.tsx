import React from "react";
import { FaCircle } from "react-icons/fa";
import ProgressBar from "react-bootstrap/ProgressBar";
import Link from "next/link";

const Landing = () => {
  return (
    <div className="flex flex-col bg-gradient-to-br from-landing-bottom to-landing-bottompink w-full justify-center item-center pt-10">
      <div className="drop-shadow-white bg-gradient-radial w-7/12 flex p-6 m-auto text-center items-center justify-evenly">
        <img
          draggable="false"
          className="w-1/12 animate-pulse drop-shadow-pink"
          src="PINK_HEART1.png"
        />
        <FaCircle className="text-white hidden md:block " />
        <FaCircle className="text-white  " />
        <img
          draggable="false"
          className="w-1/12 animate-pulse drop-shadow-blue"
          src="BLUE_HEART1.png"
        />
        <FaCircle className="text-white hidden md:block" />
        <FaCircle className="text-white " />
        <img
          draggable="false"
          className="w-1/12 animate-pulse"
          src="PINK_HEART1.png"
        />
        <FaCircle className="text-white hidden md:block" />
        <FaCircle className="text-white " />
        <img
          draggable="false"
          className="w-1/12 animate-pulse"
          src="BLUE_HEART1.png"
        />
      </div>
      <div className="relative m-auto bg-gradient-to-b from-landing-secondtop/50 to-landing-second-bottom/20  rounded-3xl text-center justify-center items-center md:w-7/12 w-10/12 p-4">
        <div className="border-dotted animate-shinging w-full h-full absolute border-[6px] inset-0 rounded-3xl drop-shadow-pink" />
        <div className="animate-shingingReverse m-3 absolute border-[3px] inset-0 rounded-3xl drop-shadow-blue" />
        <div className="drop-shadow-lightblue text-white font-pixel text-4xl justify-center m-3">
          Rose Hack <br /> 2023
          <div className="absolute inset-0 w-full animate-glitch  text-[#f0f] font-pixel text-4xl justify-center">
            Rose Hack <br /> 2023
          </div>
          <div className="absolute inset-0 w-full  animate-glitchReverse  text-[#0ff] font-pixel text-4xl justify-center">
            Rose Hack <br /> 2023
          </div>
          <div className="absolute inset-0 w-full drop-shadow-lightblue text-white font-pixel text-4xl justify-center">
            Rose Hack <br /> 2023
          </div>
        </div>
        <p className="animate-shinging pt-3 text-2xl no-underline drop-shadow-lightblue text-white font-pixel">
          {" "}
          JANUARY 14-15
        </p>
        <div className="flex items-center justify-center pt-3">
          <Link href="/register">
            <a className="animate-bounce shadow-[0_0_16px_0]  no-underline shadow-[#15DBFF] px-4 drop-shadow-blue p-2 font-pixel text-white border-[6px] rounded-2xl text-sm md:text-2xl">
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
        <div className="animate-pulse p-2 pb-4 drop-shadow-green font-pixel text-white text-md">
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
      <div className="drop-shadow-white bg-gradient-radial w-7/12 flex p-6 m-auto text-center items-center justify-evenly">
        <img
          draggable="false"
          className="w-1/12 animate-pulse drop-shadow-pink"
          src="PINK_HEART1.png"
        />
        <FaCircle className="text-white hidden md:block " />
        <FaCircle className="text-white  " />
        <img
          draggable="false"
          className="w-1/12 animate-pulse drop-shadow-blue"
          src="BLUE_HEART1.png"
        />
        <FaCircle className="text-white hidden md:block" />
        <FaCircle className="text-white " />
        <img
          draggable="false"
          className="w-1/12 animate-pulse"
          src="PINK_HEART1.png"
        />
        <FaCircle className="text-white hidden md:block" />
        <FaCircle className="text-white " />
        <img
          draggable="false"
          className="w-1/12 animate-pulse"
          src="BLUE_HEART1.png"
        />
      </div>
      <div className="w-full justify-center">
        <img draggable="false" src="pixels_landing.png" />
      </div>
    </div>
  );
};

export default Landing;
