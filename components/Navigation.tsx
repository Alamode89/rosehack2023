import Link from "next/link";
import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaBars } from "react-icons/fa";

const Navigation = () => {
  return (
    <div className="from:bg-header-left to:bg-header-right min-h-[7vh]">
      <Navbar
        className="bg-gradient-to-r from-header-left to-header-right min-h-[7vh] px-4 !shadow-lg"
        expand="xl"
        fixed="top"
      >
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="mr-2 border-0 text-white"
        >
          <FaBars size="30" />
        </Navbar.Toggle>
        <Navbar.Collapse className="flex justify-center items-center">
          <Nav className="font-pixel flex lg:w-6/12 w-full justify-center items-center">
            <Link
              href="/#"
              className="!text-base text-center text-white p-1 mx-2 no-underline hover:underline hover:drop-shadow-pink decoration-4 underline-offset-6"
            >
              HOME
            </Link>
            <Link
              href="/#about"
              className="!text-base text-center text-white p-1 mx-2 no-underline hover:underline hover:drop-shadow-blue decoration-4 underline-offset-6"
            >
              ABOUT
            </Link>
            <Link
              href="/#sponsors"
              className="!text-base text-center text-white p-1 mx-2 no-underline hover:underline hover:drop-shadow-pink decoration-4 underline-offset-6"
            >
              SPONSORS
            </Link>
            <Link
              href="/#board"
              className="!text-base text-center text-white p-1 mx-2 no-underline hover:underline hover:drop-shadow-blue decoration-4 underline-offset-6"
            >
              TEAM
            </Link>
            <Link
              href="/#faq"
              className="!text-base text-center text-white p-1 mx-2 no-underline hover:underline hover:drop-shadow-pink decoration-4 underline-offset-6"
            >
              FAQ
            </Link>
            <Link
              href="/volunteers"
              className="!text-base text-center text-white p-1 mx-2 no-underline hover:underline hover:drop-shadow-blue decoration-4 underline-offset-6"
            >
              VOLUNTEER
            </Link>
            <Link
              href="https://portal.rosehack.com/"
              className="!text-base text-center text-white p-1 mx-2 no-underline hover:underline hover:drop-shadow-pink decoration-4 underline-offset-6"
            >
              LOGIN
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
