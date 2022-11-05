// import Image from "next/image";
import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { FaBars } from "react-icons/fa";

const Navigation = () => {
  return (
    <div className="from:bg-navigation-left to:bg-navigation-right min-h-[10vh]">
      <Navbar
        className="bg-gradient-to-r from-navigation-left to-navigation-right min-h-[10vh] px-4 border-b-4"
        expand="md"
        fixed="top"
      >
        {/* <Image
          src="/ROSE_HACK.png"
          height={100}
          width={200}
          layout="fixed"
          alt="RoseHack Logo"
          className="p-3"
        /> */}
        {/* <Navbar.Brand href="#home" className=" block relative">
          <Image
            src="/ROSE_HACK.png"
            height={100}
            width={200}
            layout="responsive"
            alt="RoseHack Logo"
          />
        </Navbar.Brand> */}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="mr-4 border-0"
        >
          <FaBars size="30" />
        </Navbar.Toggle>
        <Navbar.Collapse className="flex md:justify-center justify-center items-center">
          <Nav className="font-pixel flex lg:w-6/12 w-full justify-center items-center">
            <Nav.Link
              href="#about"
              className="!text-xl text-center text-white p-3 hover:underline decoration-4 underline-offset-8"
            >
              ABOUT
            </Nav.Link>
            <Nav.Link
              href="#sponsors"
              className="!text-xl text-center text-white p-3 hover:underline decoration-4 underline-offset-8"
            >
              SPONSORS
            </Nav.Link>
            <Nav.Link
              href="#board"
              className="!text-xl text-center text-white p-3 hover:underline decoration-4 underline-offset-8"
            >
              TEAM
            </Nav.Link>
            <Nav.Link
              href="#faq"
              className="!text-xl text-center text-white mr-1 hover:underline decoration-4 underline-offset-8"
            >
              FAQ
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
