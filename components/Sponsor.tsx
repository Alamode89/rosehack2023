import Image from "next/image";
import React from "react";

interface props {
  image: any;
  link: string;
  index: number;
}

const Sponsor = ({ image, link, index }: props) => {
  {
    console.log(index, image);
  }

  return (
    <div
      className={`rounded-full hover:-translate-y-2 flex-col flex justify-center items-center`}
    >
      {/* <a href={link} target="_blank" rel="noreferrer"> */}
      <Image
        src={image}
        width={300}
        height={300}
        alt="Sponsor Image"
        className={`border-white ${
          index % 2 == 0 ? "drop-shadow-blue" : "drop-shadow-pink"
        } border-4 rounded-full `}
      />
      {/* </a> */}
    </div>
  );
};

export default Sponsor;
