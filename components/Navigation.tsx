import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { FaBars } from "react-icons/fa";

const Navigation = () => {
  return (
    <div className="bg-rosehack-primary-darkestpurple min-h-[10vh]">
      <Navbar
        className="bg-rosehack-primary-darkestpurple min-h-[10vh] px-4 border-b-4 border-rosehack-secondary-salmon"
        expand="md"
        fixed="top"
      >
        <Navbar.Brand href="#home">
          <img
            src="favicon.ico"
            width="60"
            height="60"
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
          <Nav className="!font-poppins flex lg:w-6/12 w-full justify-end items-center">
            <Nav.Link
              href="#about"
              className="!text-xl text-center text-white hover:!text-rosehack-secondary-salmon p-3"
            >
              ABOUT
            </Nav.Link>
            <Nav.Link
              href="#sponsors"
              className="!text-xl text-center text-white hover:!text-rosehack-secondary-salmon p-3"
            >
              SPONSORS
            </Nav.Link>
            <Nav.Link
              href="#board"
              className="!text-xl text-center text-white hover:!text-rosehack-secondary-salmon p-3"
            >
              TEAM
            </Nav.Link>
            <Nav.Link
              href="#faq"
              className="!text-xl text-center text-white hover:!text-rosehack-secondary-salmon p-3 mr-1"
            >
              FAQ
            </Nav.Link>
            <a
              href="https://form.typeform.com/to/M0vqqDRG"
              target="_blank"
              className="!text-xl text-center no-underline !bg-rosehack-secondary-salmon text-white hover:!text-rosehack-primary-darkestpurple rounded-md p-3"
              rel="noreferrer"
            >
              REGISTER
            </a>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
