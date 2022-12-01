import type { NextPage } from "next";
import About from "../components/About";
import Landing from "../components/Landing";
import Sponsors from "../components/Sponsors";
import Team from "../components/Team";
import FAQ from "../components/FAQ";

const Home: NextPage = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <Landing />
      <About />
      <Sponsors />
      <Team />
      <FAQ />
      <title>Rose Hack 2023</title>
    </div>
  );
};

export default Home;
