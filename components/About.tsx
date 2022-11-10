import React from "react";
import { FaCircle } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-gradient-to-b from-about-top to-about-bottom w-full flex justify-center items-center flex-col">
      <div className="flex justify-between items-center w-11/12 m-5">
        <img src="RH_ASSET_19.png" className="h-10 w-10 transform rotate-180" />
        <FaCircle className="text-white" />
        <FaCircle className="text-white" />
        <FaCircle className="text-white" />
        <FaCircle className="text-white" />

        <p className="drop-shadow-blue font-pixel text-4xl p-0 m-0 text-white text-center">
          ABOUT US
        </p>
        <FaCircle className="text-white" />
        <FaCircle className="text-white" />
        <FaCircle className="text-white" />
        <FaCircle className="text-white" />
        <img src="RH_ASSET_22.png" className="h-10 w-10 " />
      </div>
      <div className="flex justify-between items-center w-2/3 p-5">
        <div className="w-2/3 p-5">
          <div className="flex justify-between items-center mb-4">
            <img src="PINK_HEART1.png" className="h-10 w-10 " />
            <FaCircle className="text-white" />
            <img src="PINK_HEART1.png" className="h-10 w-10 " />
            <FaCircle className="text-white" />
            <img src="PINK_HEART1.png" className="h-10 w-10 " />
          </div>
          <p className="py-5 font-lexend text-2xl w-full p-0 m-0 text-white text-center">
            Rose Hack is UC Riverside’s 24-hour hackathon, one of the few
            women-centric hackathons in California! Founded by the female
            leaders of the Association for Computing Machinery (ACM-W) and the
            Society of Women Engineers (SWE).{" "}
          </p>

          <div className="flex justify-between items-center mb-4">
            <img src="PINK_HEART1.png" className="h-10 w-10 " />
            <FaCircle className="text-white" />
            <img src="PINK_HEART1.png" className="h-10 w-10 " />
            <FaCircle className="text-white" />
            <img src="PINK_HEART1.png" className="h-10 w-10 " />
          </div>
        </div>
        <img className="w-1/3" src="MACHINE_3.png"></img>
      </div>
      <div className="flex justify-between items-center w-2/3 p-5">
        <img className="w-1/3" src="MACHINE_2.png"></img>
        <div className="w-2/3 p-5">
          <div className="flex justify-between items-center mb-4">
            <img src="BLUE_HEART1.png" className="h-10 w-10 " />
            <FaCircle className="text-white" />
            <img src="BLUE_HEART1.png" className="h-10 w-10 " />
            <FaCircle className="text-white" />
            <img src="BLUE_HEART1.png" className="h-10 w-10 " />
          </div>
          <p className="py-5 font-lexend text-2xl w-full p-0 m-0 text-white text-center">
            Rose Hack’s mission is to encourage individuals from
            underrepresented groups in STEM to gain experience, create strong
            networks, and build amazing projects through their shared passions
            in Science and Technology.{" "}
          </p>
          <div className="flex justify-between items-center mb-4">
            <img src="BLUE_HEART1.png" className="h-10 w-10 " />
            <FaCircle className="text-white" />
            <img src="BLUE_HEART1.png" className="h-10 w-10 " />
            <FaCircle className="text-white" />
            <img src="BLUE_HEART1.png" className="h-10 w-10 " />
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-about-left to-about-right w-1/2 rounded-3xl m-5">
        <p className="bg-about-bottom py-5 font-lexend text-2xl p-5 m-4 text-white text-center rounded-3xl">
          Rose Hack welcomes both undergraduate and high school students for a
          lively weekend filled with innovation, discovery, networking,
          mentorship, and so much more!
        </p>
        <div className="justify-between flex mx-20 my-3">
          <img className="w-2/12" src="RH_SPONSORS_BUTTON1.png"></img>
          <div className="w-2/12 justify-center flex">
            <div className="items-end flex">
              <FaCircle className="text-about-pink text-3xl bt-5" />
            </div>
            <div className="items-start flex">
              <FaCircle className="text-about-blue text-3xl mt-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
