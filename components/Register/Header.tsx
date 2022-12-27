import React from "react";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex justify-center items-center  w-full relative">
      <div className="absolute top-1/2 left-3 -translate-y-1/2">
        <Link href="/#">
          <FaChevronLeft className="text-white md:text-5xl text-3xl hover:drop-shadow-white hover:scale-[1.2] ease-in-out duration-300 hover:cursor-pointer" />
        </Link>
      </div>
      <div className="font-pixel text-md md:text-xl lg:text-4xl p-0 text-white text-center w-full m-4">
        REGISTER
      </div>
    </div>
  );
};

export default Header;
