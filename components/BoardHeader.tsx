import React from "react";

const BoardHeader = () => {
  return (
    <div className="w-full  flex justify-center items-center flex-col mb-10">
      <div className="w-11/12 border-4 rounded-tl-3xl rounded-tr-3xl border-black bg-split-green-to-purple flex justify-center items-center font-bold p-4 text-6xl">
        {/* <p className="bg-rosehack-secondary-salmon text-center p-4 m-0 rounded-full text-white"> */}
        <img src="RH_MEET_THE_TEAM.png" className="w-1/2" />
        {/* </p> */}
      </div>
    </div>
  );
};

export default BoardHeader;
