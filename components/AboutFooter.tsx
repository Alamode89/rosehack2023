import React from "react";
import Circle from "./Circle";

const AboutFooter = () => {
  return (
    <div className="bg-rosehack-primary-darkestpurple flex justify-between items-center w-11/12 rounded-full -mt-10 z-10">
      <img src="RH_ASSET_15.png" className="lg:w-1/12 w-2/12 p-4" />
      <Circle hidden={false} />
      <Circle hidden={true} />
      <img src="RH_ASSET_16.png" className="lg:w-1/12 w-2/12 p-4" />
      <Circle hidden={false} />
      <Circle hidden={true} />
      <img src="RH_ASSET_17.png" className="lg:w-1/12 w-2/12 p-4" />
      <Circle hidden={false} />
      <Circle hidden={true} />
      <img src="RH_ASSET_18.png" className="lg:w-1/12 w-2/12 p-4" />
    </div>
  );
};

export default AboutFooter;
