import React from "react";
import AboutFooter from "./AboutFooter";
import AboutHeader from "./AboutHeader";
import Introduction from "./Introduction";

const About = () => {
  return (
    <section
      id="about"
      className="bg-rosehack-primary-darkpurple w-full flex justify-center items-center flex-col py-[11vh]"
    >
      <AboutHeader />
      <Introduction />
      <AboutFooter />
    </section>
  );
};

export default About;
