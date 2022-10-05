import React from "react";
import Sponsor from "./Sponsor";

const sponsorsList = [
  {
    sponsorName: "Triad Magnetics",
    image: "triad_logo.png",
    link: "https://www.triadmagnetics.com/",
  },
  {
    sponsorName: "Triad Magnetics",
    image: "triad_logo.png",
    link: "https://www.triadmagnetics.com/",
  },
  {
    sponsorName: "Triad Magnetics",
    image: "triad_logo.png",
    link: "https://www.triadmagnetics.com/",
  },
  {
    sponsorName: "Triad Magnetics",
    image: "triad_logo.png",
    link: "https://www.triadmagnetics.com/",
  },
];
const SponsorBorder = () => {
  return (
    <div className="flex justify-center">
      <div className=" rounded-[3rem] border-[18px] border-rosehack-primary-darkpurple bg-rosehack-secondary-pink h-full w-10/12">
        <div className="grid grid-cols-3 items-center">
          {sponsorsList.map((sponsor, index) => (
            <div key={index}>
              <Sponsor
                sponsorName={sponsor.sponsorName}
                image={sponsor.image}
                link={sponsor.link}
              />
            </div>
          ))}
        </div>
        <div className="bg-rosehack-primary-darkpurple h-full">
          <div className="flex justify-between items-start space-x-24 xl:space-x-[34rem] sm:space-x-64 sm:pt-10 sm:mx-5">
            <img
              src="RH_SPONSORS_BUTTON1.png"
              className="lg:p-5 w-1/3 sm:w-1/4 pt-2"
            />
            <img
              src="circle_buttons.png"
              className="sm:w-1/4 w-1/3 sm:pt-8 pt-2 pr-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorBorder;
