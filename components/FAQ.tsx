import React from "react";
import Questions from "./Questions";

const FAQ = () => {
  return (
    <section
      id="faq"
      className="bg-gradient-to-b from-faq-top to-faq-bottom w-full flex justify-center items-center flex-col pt-[11vh] pb-6 scroll-m-[2vh]"
    >
      <div className="w-10/12 flex justify-center items-center flex-col">
        <div className="font-pixel text-5xl p-2 m-0 text-white text-center flex justify-center items-center ">
          <img
            draggable="false"
            className="w-1/12 mx-4"
            src="PINK_HEART1.png"
          />
          FAQ
          <img
            draggable="false"
            className="w-1/12 mx-4"
            src="PINK_HEART1.png"
          />
        </div>
        <div className="w-full flex justify-center items-center flex-col">
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
    </section>
  );
};

export default FAQ;
