import React from "react";

interface props {
  sponsorName: string;
  image: string;
  link: string;
}

const Sponsor = ({ sponsorName, image, link }: props) => {
  return (
    <div className="rounded-2xl">
      <a href={link} target="_blank" rel="noreferrer">
        <img
          className="transform flex rounded-3xl scale-75 transition duration-500 hover:scale-[0.8]"
          src={image}
        />
      </a>
      <div className="flex justify-center font-poppins text-2xl"></div>
    </div>
  );
};

export default Sponsor;
