import Image from "next/image";
import React from "react";

interface props {
  name: String;
  position: String;
  shadow: String;
  image: any;
  linkedin: string;
}

const Profile = ({ name, position, shadow, image, linkedin }: props) => {
  return (
    <div className="flex justify-center items-center flex-col p-2">
      <a
        href={linkedin}
        target="_blank"
        className={`${shadow} shadow-[20px_-16px_0px_0px] rounded-[2rem] hover:-translate-y-2`}
        rel="noreferrer"
      >
        <Image
          src={image}
          width={200}
          height={200}
          alt="Profile Image"
          className="border-white border-8 rounded-[2rem]"
        />
      </a>
      <p className="inline p-0 m-0 mt-3 font-lexend md:text-2xl text-xl text-white font-black text-center">
        {name}
      </p>
      <p className="inline p-0 m-0 font-lexend md:text-lg text-base text-white text-center">
        {position}
      </p>
    </div>
  );
};

export default Profile;
