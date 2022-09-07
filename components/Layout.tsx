import React from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";

interface props {
  children: React.ReactNode | React.ReactNode[];
}

const Layout = ({ children }: props) => {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
