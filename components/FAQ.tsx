import React from "react";
import FAQHeader from "./FAQHeader";
import Questions from "./Questions";

const FAQ = () => {
  return (
    <section
      id="faq"
      className="bg-rosehack-primary-darkpurple w-full flex justify-center items-center flex-col py-5"
    >
      <FAQHeader />
      <Questions />
    </section>
  );
};

export default FAQ;
