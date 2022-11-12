import React from "react";
import Questions from "./Questions";
import { FaCircle } from "react-icons/fa";

const FAQ = () => {
  return (
    <section
      id="faq"
      className="bg-gradient-to-b from-faq-top to-faq-bottom w-full flex justify-center items-center flex-col pt-[11vh] pb-6 scroll-m-[2vh]"
    >
      <div className="w-11/12 flex justify-center items-center flex-col">
        <div className="w-1/4">
          <div className="flex justify-between items-center mt-4">
            <FaCircle className="text-white" />
            <div className="font-pixel text-5xl p-2 m-0 text-white text-center">
              FAQ
            </div>
            <FaCircle className="text-white" />
          </div>
        </div>

        <div className="w-[90%] flex justify-center items-center flex-col">
          <Questions />
        </div>

        <div className="text-center p-0 pt-4">
          <p className="text-white text-xl font-pixel">
            Don&apos;t see your question?
          </p>
          <p className="text-white text-xl font-pixel">Please contact us at</p>
          <p className="hover:scale-105 ">
            <a
              className="no-underline font-semibold text-header-right hover:text-header-right font-pixel text-xl "
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
