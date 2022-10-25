import Image from "next/image";
import React from "react";

const SponsorsHeader = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col mb-10">
      <div className="w-10/12 sm:w-2/3">
        <Image
          layout="responsive"
          width={3266}
          height={501}
          src="/SPONSORS_HEADING.png"
        />
      </div>
    </div>
  );
};

export default SponsorsHeader;
