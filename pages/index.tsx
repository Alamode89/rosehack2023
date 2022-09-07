import type { NextPage } from "next";
import Landing from "../components/Landing";
import About from "../components/About";
import Sponsors from "../components/Sponsors";
import Board from "../components/Board";
import FAQ from "../components/FAQ";

const Home: NextPage = () => {
  return (
    <>
      <Landing />
      <About />
      <Sponsors />
      <Board />
      <FAQ />
    </>
  );
};

export default Home;
