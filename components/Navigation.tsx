import React from "react";
import {Nav, Navbar, NavDropdown} from "react-bootstrap";

const Navigation = () => {
  return (
    <div className="bg-rosehack-primary-darkestpurple items-center">
      <Navbar expand="lg">
        <Navbar.Brand href="#home">
          <img
                src="/rhlogo.jpg"
                width="60"
                height="60"
                className="d-inline-block align-top pl-2"
                alt="React Bootstrap logo"
              />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="!font-poppins ml-auto mr-10">
            <Nav.Link href="#about" className="!text-xl text-white hover:!text-gray-300 !pr-10">
              ABOUT
            </Nav.Link>
            <Nav.Link href="#sponsors" className="!text-xl text-white hover:!text-gray-300 !pr-10">
              SPONSORS
            </Nav.Link>
            <Nav.Link href="#board" className="!text-xl text-white hover:!text-gray-300 !pr-10">
              TEAM
            </Nav.Link>
            <Nav.Link href="#faq" className="!text-xl text-white hover:!text-gray-300 !pr-10">
              FAQ
            </Nav.Link>
            <Navbar.Brand className = "text-white">
              MLH LOGO 
            </Navbar.Brand>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
};

export default Navigation;
