import React from "react";
import SponsorsHeader from "./SponsorsHeader";
import SponsorBorder from "./SponsorBorder";

const Sponsors = () => {
  return (
    <section
      id="sponsors"
      className=" py-[11vh] bg-rosehack-primary-darkestpurple"
    >
      <SponsorsHeader />
      <SponsorBorder />
    </section>
  );
};

export default Sponsors;
