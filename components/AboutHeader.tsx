import React from "react";
import Circle from "./Circle";

const AboutHeader = () => {
  return (
    <div className="bg-rosehack-primary-darkestpurple flex justify-between items-center w-11/12 rounded-full -mb-10 z-10">
      <img src="RH_ASSET_19.png" className="lg:w-1/12 w-2/12 rotate-180 p-4" />
      <Circle hidden={false} />
      <Circle hidden={true} />
      <Circle hidden={false} />
      <img src="ABOUT_US.png" className="lg:w-1/4 w-6/12" />
      <Circle hidden={false} />
      <Circle hidden={true} />
      <Circle hidden={false} />
      <img src="RH_ASSET_22.png" className="lg:w-1/12 w-2/12 p-4" />
    </div>
  );
};

export default AboutHeader;
