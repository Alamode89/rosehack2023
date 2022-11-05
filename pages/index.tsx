import type { NextPage } from "next";
import Team from "../components/Team";

const Home: NextPage = () => {
  return (
    <div className="flex justify-center items-center">
      <Team />
    </div>
  );
};

export default Home;
