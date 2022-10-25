import Image from "next/image";
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
          <div className="pt-5 pb-3 md:pr-8 md:pl-5 flex justify-between">
            <div className="lg:p-5 w-1/3 sm:w-1/4">
              <Image
                layout="responsive"
                height={1036}
                width={1036}
                src="/RH_SPONSORS_BUTTON1.png"
              />
            </div>
            <div className="w-1/3 sm:w-1/4 sm:h-1/4">
              <Image
                layout="responsive"
                height={954}
                width={1028}
                src="/circle_buttons.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorBorder;
