import React from "react";

const BoardHeader = () => {
  return (
    <div className="w-full  flex justify-center items-center flex-col mb-10">
      <div
        style={{
          background:
            "linear-gradient(to bottom, #c5c6fb 48% , black 48%, black 52%, #c9f9be 52%)",
        }}
        className="w-11/12 border-4 rounded-tl-3xl rounded-tr-3xl border-black flex justify-center items-center p-4"
      >
        <img src="RH_MEET_THE_TEAM.png" className="w-full md:w-1/2" />
      </div>
    </div>
  );
};

export default BoardHeader;
