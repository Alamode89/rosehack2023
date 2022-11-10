import React from "react";
import { FaCircle } from "react-icons/fa";
import { ProgressBar } from "react-bootstrap";

const Landing = () => {
  return (
    <div className="flex flex-col bg-gradient-to-br from-landing-bottom to-landing-bottompink w-full justify-center item-center pt-24">
      <div className="shadow-[0_0px_72px_0] shadow-white/60 m-auto bg-gradient-to-b from-landing-top/20 to-landing-bottom/20 bg-gradient-to-b from-landing-secondtop/20 to-landing-second-bottom/20 border-[6px] rounded-3xl text-center justify-center items-center w-7/12 p-4">
        <p className="drop-shadow-blue drop-shadow-lightblue text-white font-pixel text-4xl justify-center">
          Rose Hack
        </p>
        <p className="drop-shadow-blue drop-shadow-lightblue text-white font-pixel text-4xl justify-center p-2">
          2023
        </p>
        <p className="drop-shadow-blue drop-shadow-lightblue underline text-white font-pixel text-2xl justify-center pt-3">
          JANUARY 14-15
        </p>
        <div className="flex items-center justify-center py-3">
          <button className="shadow-[0_0_16px_0] shadow-[#15DBFF] px-4 drop-shadow-lightblue drop-shadow-blue p-2 font-pixel text-2xl text-white border-[6px] rounded-2xl">
            Register
          </button>
        </div>
        <div className="pt-4 w-7/12 justify-center items-center m-auto">
          <ProgressBar
            className="border-4 !rounded-full drop-shadow-green"
            variant="lightgreen"
            now={60}
            style={{ height: 32 }}
          />
        </div>
        <div className="p-2 pb-4 drop-shadow-green font-pixel text-white text-md">
          now loading... days left
        </div>
      </div>
      <div className="w-7/12 flex p-6 m-auto text-center items-center justify-evenly">
        <img className="w-1/12" src="RH_ASSET_15.png" />
        <FaCircle className="text-white" />
        <FaCircle className="text-white" />
        <img className="w-1/12" src="RH_ASSET_16.png" />
        <FaCircle className="text-white" />
        <FaCircle className="text-white" />
        <img className="w-1/12" src="RH_ASSET_17.png" />
        <FaCircle className="text-white" />
        <FaCircle className="text-white" />
        <img className="w-1/12" src="RH_ASSET_18.png" />
      </div>
      <div className="w-full justify-center">
        <img src="pixels_landing.png" />
      </div>
    </div>
  );
};

export default Landing;
