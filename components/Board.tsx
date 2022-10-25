import React from "react";
import Profiles from "./Profiles";
import BoardHeader from "./BoardHeader";

const Board = () => {
  return (
    <section
      id="board"
      className="bg-rosehack-secondary-darkpurple py-[11vh] scroll-m-[2vh]"
    >
      <BoardHeader />
      <Profiles />
    </section>
  );
};

export default Board;
