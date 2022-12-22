import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { FaBars } from "react-icons/fa";
import { auth } from "../firebase";

const Navigation = () => {
  const [login, setLogin] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (currentState) => {
      if (currentState !== null) {
        setLogin(false);
      }
    });
  }, []);

  return (
    <div className="from:bg-header-left to:bg-header-right min-h-[10vh]">
      <Navbar
        className="bg-gradient-to-r from-header-left to-header-right min-h-[10vh] px-4"
        expand="md"
        fixed="top"
      >
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="mr-4 border-0 text-white"
        >
          <FaBars size="30" />
        </Navbar.Toggle>
        <Navbar.Collapse className="flex justify-center items-center">
          <Nav className="font-pixel flex lg:w-6/12 w-full justify-center items-center">
            <Nav.Link
              href="/#"
              className="!text-xl text-center text-white p-3 hover:underline decoration-4 underline-offset-8"
            >
              HOME
            </Nav.Link>
            <Nav.Link
              href="/#about"
              className="!text-xl text-center text-white p-3 hover:underline decoration-4 underline-offset-8"
            >
              ABOUT
            </Nav.Link>
            <Nav.Link
              href="/#sponsors"
              className="!text-xl text-center text-white p-3 hover:underline decoration-4 underline-offset-8"
            >
              SPONSORS
            </Nav.Link>
            <Nav.Link
              href="/#board"
              className="!text-xl text-center text-white p-3 hover:underline decoration-4 underline-offset-8"
            >
              TEAM
            </Nav.Link>
            <Nav.Link
              href="/#faq"
              className="!text-xl text-center text-white mr-1 hover:underline decoration-4 underline-offset-8"
            >
              FAQ
            </Nav.Link>
            <Nav.Link
              href="/register"
              className="!text-xl text-center text-white mr-1 hover:underline decoration-4 underline-offset-8"
            >
              REGISTER
            </Nav.Link>
            {login && (
              <Nav.Link
                href="/user"
                className="!text-xl text-center text-white mr-1 hover:underline decoration-4 underline-offset-8"
              >
                LOGIN
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
