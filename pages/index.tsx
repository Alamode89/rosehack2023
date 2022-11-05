import type { NextPage } from "next";
import About from "../components/About";
import Landing from "../components/Landing";
import Sponsors from "../components/Sponsors";
import Team from "../components/Team";

const Home: NextPage = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <Landing />
      <About />
      <Sponsors />
      <Team />
    </div>
  );
};

export default Home;
