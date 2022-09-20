import React from "react";

interface props {
  hidden: boolean;
}

const Circle = ({ hidden }: props) => {
  return (
    <div
      className="rounded-full hidden h-5 w-5 bg-rosehack-secondary-white lg:block"
    ></div>
  );
};

export default Circle;
