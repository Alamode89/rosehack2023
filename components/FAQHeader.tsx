import React from "react";

const FAQHeader = () => {
  return (
    <div className="bg-rosehack-darkpurple">
      <div className="flex justify-center lg:justify-start items-center w-full ">
        <img src="RH_ASSET_FAQ4.png" className="lg:w-1/1 w-1/2" />
      </div>
      <div className="text-rosehack-secondary-white font-poppins pt-4">
        <p className="m-0 p-0 !text-center lg:!text-left">
          Don&apos;t see your question?
        </p>
        <p className="m-0 mb-4 p-0 !text-center lg:!text-left">
          Please contact us at&nbsp;
          <a
            className="no-underline font-semibold text-rosehack-secondary-white hover:text-rosehack-secondary-salmon"
            href="mailto:rosehack@gmail.com"
          >
            rosehack@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default FAQHeader;
