import React from "react";
import SponsorsHeader from "./SponsorsHeader";
import SponsorBorder from "./SponsorBorder";

const Sponsors = () => {
  return (
    <section
      id="sponsors"
      className=" py-[11vh] bg-rosehack-primary-darkestpurple scroll-m-[11vh]"
    >
      <SponsorsHeader />
      <SponsorBorder />
    </section>
  );
};

export default Sponsors;
