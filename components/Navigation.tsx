import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { FaBars } from "react-icons/fa";

const Navigation = () => {
  return (
    <div className="bg-rosehack-primary-darkestpurple items-center pl-4">
      <Navbar expand="lg">
        <Navbar.Brand href="#home">
          <img
            src="favicon.ico"
            width="60"
            height="60"
            className="d-inline-block align-top pl-2"
            alt="RoseHack Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="!text-rosehack-secondary-salmon mr-4"
        >
          <FaBars size="30" />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="!font-poppins ml-auto mr-10">
            <Nav.Link
              href="#about"
              className="!text-xl text-white hover:!text-gray-300 !pr-10"
            >
              ABOUT
            </Nav.Link>
            <Nav.Link
              href="#sponsors"
              className="!text-xl text-white hover:!text-gray-300 !pr-10"
            >
              SPONSORS
            </Nav.Link>
            <Nav.Link
              href="#board"
              className="!text-xl text-white hover:!text-gray-300 !pr-10"
            >
              TEAM
            </Nav.Link>
            <Nav.Link
              href="#faq"
              className="!text-xl text-white hover:!text-gray-300 !pr-10"
            >
              FAQ
            </Nav.Link>
            <Navbar.Brand className="text-white">MLH LOGO</Navbar.Brand>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
