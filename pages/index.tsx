import type { NextPage } from "next";
import About from "../components/About";
import Landing from "../components/Landing";
// import Sponsors from "../components/Sponsors";
// import Team from "../components/Team";
// import Schedule from "../components/Schedule";
// import Judges from "../components/Judges";
// import FAQ from "../components/FAQ";
import dynamic from "next/dynamic";

// const Schedule = dynamic(() => import("../components/Schedule"), {
//   ssr: false,
// });

const Sponsors = dynamic(() => import("../components/Sponsors"), {
  ssr: false,
});

// const Judges = dynamic(() => import("../components/Judges"), {
//   ssr: false,
// });

const Team = dynamic(() => import("../components/Team"), {
  ssr: false,
});

const FAQ = dynamic(() => import("../components/FAQ"), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <Landing />
      <About />
      {/* <Schedule /> */}
      <Sponsors />
      {/* <Judges /> */}
      <Team />
      <FAQ />
      <title>Rose Hack 2023</title>
    </div>
  );
};

export default Home;
