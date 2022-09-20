import React from "react";

const FAQHeader = () => {
  return (
    <div className="bg-rosehack-darkpurple flex-col justify-between items-center w-11/12 rounded-full -mb-8 z-10">
      <img src="RH_ASSET_FAQ4.png" className="lg:w-1/3 w-1/2"/>
      <div className="text-rosehack-secondary-white font-poppins pt-4">
        <p className="m-0 p-0">Don't see your question?</p>
        <p className="m-0 p-0">Please contact us at <a className="no-underline font-[600] text-rosehack-secondary-white hover:text-rosehack-secondary-salmon" href="mailto:rosehack@gmail.com">rosehack@gmail.com</a></p>
      </div>
    </div>
  );
};

export default FAQHeader;
