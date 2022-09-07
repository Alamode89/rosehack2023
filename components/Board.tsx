import React from "react";
import BoardProfiles from "./Profiles";
import BoardHeader from "./BoardHeader";

const Board = () => {
  return (
    <section id="board" className="bg-rosehack-secondary-darkpurple py-5">
      <BoardHeader />
      <BoardProfiles />
    </section>
  );
};

export default Board;
