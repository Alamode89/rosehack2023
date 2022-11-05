import type { NextPage } from "next";
import Sponsors from "../components/Sponsors";
import Team from "../components/Team";

const Home: NextPage = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <Sponsors />
      <Team />
    </div>
  );
};

export default Home;
