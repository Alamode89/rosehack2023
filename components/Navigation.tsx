import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { FaBars } from "react-icons/fa";

const Navigation = () => {
  return (
    <div className="bg-rosehack-primary-darkestpurple min-h-[10vh] border-0">
      <Navbar
        className="bg-rosehack-primary-darkestpurple min-h-[10vh] px-4"
        expand="lg"
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
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="!font-poppins ml-auto">
            <Nav.Link
              href="#about"
              className="!text-xl text-center text-white hover:!text-gray-300 p-3"
            >
              ABOUT
            </Nav.Link>
            <Nav.Link
              href="#sponsors"
              className="!text-xl text-center text-white hover:!text-gray-300 p-3"
            >
              SPONSORS
            </Nav.Link>
            <Nav.Link
              href="#board"
              className="!text-xl text-center text-white hover:!text-gray-300 p-3"
            >
              TEAM
            </Nav.Link>
            <Nav.Link
              href="#faq"
              className="!text-xl text-center text-white hover:!text-gray-300 p-3"
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
