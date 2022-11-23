import dynamic from "next/dynamic";
import { Suspense } from "react";
import type { NextPage } from "next";
// import About from "../components/About";
import Landing from "../components/Landing";
import Sponsors from "../components/Sponsors";
// import Team from "../components/Team";
// import FAQ from "../components/FAQ";

const About = dynamic(() => import("../components/About"), {
  suspense: true,
});
const Team = dynamic(() => import("../components/Team"), {
  suspense: true,
});
const FAQ = dynamic(() => import("../components/FAQ"), {
  suspense: true,
});

const Home: NextPage = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <Suspense fallback={`Loading...`}>
        <Landing />
        <About />
        <Sponsors />
        <Team />
        <FAQ />
      </Suspense>
      <title>Rose Hack 2023</title>
    </div>
  );
};

export default Home;
