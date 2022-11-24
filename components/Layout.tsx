import React from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";

interface props {
  children: React.ReactNode | React.ReactNode[];
}

const Layout = ({ children }: props) => {
  return (
    <>
      <a
        id="mlh-trust-badge"
        className="block max-w-[100px] min-w-[60px] fixed right-[50px] top-0 w-[10%] z-[1000000]"
        href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2023-season&utm_content=wh"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="https://s3.amazonaws.com/logged-assets/trust-badge/2023/mlh-trust-badge-2023-white.svg"
          alt="Major League Hacking 2023 Hackathon Season"
          className="w-full"
        />
      </a>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
