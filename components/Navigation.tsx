import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { FaBars } from "react-icons/fa";

const Navigation = () => {
  return (
    <div className="bg-rosehack-primary-darkestpurple h-[10vh]">
      <Navbar
        className="bg-rosehack-primary-darkestpurple h-[10vh] px-4 border-b-4 border-rosehack-secondary-salmon"
        expand="md"
        fixed="top"
      >
        <Navbar.Brand href="#home" className="lg:w-1/12 md:w-2/6 w-1/12">
          <img
            src="favicon.ico"
            className="d-inline-block align-top"
            alt="RoseHack Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="!text-rosehack-secondary-salmon mr-4 border-0"
        >
          <FaBars size="30" />
        </Navbar.Toggle>
        <Navbar.Collapse className="flex md:justify-end justify-center items-center">
          <Nav className="!font-poppins flex lg:w-9/12 w-full justify-end items-center">
            <Nav.Link
              href="#about"
              className="!text-xl md:w-1/6 w-full text-center text-white hover:!text-gray-300 p-3"
            >
              ABOUT
            </Nav.Link>
            <Nav.Link
              href="#sponsors"
              className="!text-xl md:w-1/6 w-full text-center text-white hover:!text-gray-300 p-3"
            >
              SPONSORS
            </Nav.Link>
            <Nav.Link
              href="#board"
              className="!text-xl md:w-1/6 w-full text-center text-white hover:!text-gray-300 p-3"
            >
              TEAM
            </Nav.Link>
            <Nav.Link
              href="#faq"
              className="!text-xl md:w-1/6 w-full text-center text-white hover:!text-gray-300 p-3"
            >
              FAQ
            </Nav.Link>
            <a
              href="https://form.typeform.com/to/M0vqqDRG"
              target="_blank"
              className="!text-xl lg:w-3/12 md:w-1/6 w-3/6 text-center text-white hover:!text-gray-300 p-3"
              rel="noreferrer"
            >
              <img
                src="RH_ASSET_20.png"
                className=" cursor-pointer hover:scale-105"
              />
            </a>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
