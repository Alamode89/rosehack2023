import React from "react";
import { FaCircle } from "react-icons/fa";
import Questions from "../components/Questions";
import PinkHeart from "../public/pink_heart.webp";
import Image from "next/image";
import Pixels from "../public/pixels_7.webp";

const FAQ = () => {
  return (
    <section
      id="faq"
      className="bg-gradient-to-b from-faq-top to-faq-bottom w-full flex justify-center items-center flex-col m-0"
    >
      <div className="w-10/12 flex justify-center items-center flex-col">
        <div className="flex justify-between items-center w-full m-5 drop-shadow-white">
          <Image
            src={PinkHeart}
            alt=""
            width={55}
            className="transform hidden md:flex"
          />
          <FaCircle className="text-white hidden md:flex" />
          <FaCircle className="text-white hidden md:flex" />
          <FaCircle className="text-white hidden lg:flex" />
          <FaCircle className="text-white hidden md:flex" />

          <p className="font-pixel text-2xl p-0 m-0 text-white text-center w-full md:w-auto">
            FAQ
          </p>
          <FaCircle className="text-white hidden md:flex" />
          <FaCircle className="text-white hidden md:flex" />
          <FaCircle className="text-white hidden lg:flex" />
          <FaCircle className="text-white hidden md:flex" />
          <Image
            src={PinkHeart}
            alt=""
            width={55}
            className="transform hidden md:flex"
          />
        </div>
        <div className="w-full flex justify-center items-center flex-col py-4">
          <Questions />
        </div>

        <div className="text-center p-0 pt-4">
          <p className="text-white md:text-xl text-lg font-pixel">
            Don&apos;t see your question?
          </p>
          <p className="text-white md:text-xl text-lg font-pixel">
            Please contact us at
          </p>
          <p className="hover:scale-105">
            <a
              className="no-underline  md:text-xl text-lg font-semibold text-header-right hover:text-header-right font-pixel"
              href="mailto:rosehack@gmail.com"
            >
              rosehack@gmail.com
            </a>
          </p>
          <img src="favicon.ico" className="w-1/5 mx-auto" />
        </div>
      </div>
      <div className="w-full justify-center mt-20">
        <Image src={Pixels} alt="Pixels" />
      </div>
    </section>
  );
};

export default FAQ;
