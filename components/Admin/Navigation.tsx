import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { FaBars } from "react-icons/fa";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

const Navigation = () => {
  const [user] = useAuthState(auth);

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
            {user && (
              <Nav.Link
                href="/admin"
                className="!text-xl text-center text-white p-3 hover:underline decoration-4 underline-offset-8"
              >
                PARTICIPANTS
              </Nav.Link>
            )}
            {user && (
              <Nav.Link
                href="/admin/groups"
                className="!text-xl text-center text-white p-3 hover:underline decoration-4 underline-offset-8"
              >
                GROUPS
              </Nav.Link>
            )}
            {user && (
              <Nav.Link
                onClick={() =>
                  signOut(auth)
                    .then((response) => {
                      console.log(response);
                    })
                    .catch((error) => {
                      console.log(error);
                    })
                }
                className="!text-xl text-center text-white p-3 hover:underline decoration-4 underline-offset-8"
              >
                LOGOUT
              </Nav.Link>
            )}

            <Nav.Link
              href="/"
              className="!text-xl text-center text-white p-3 hover:underline decoration-4 underline-offset-8"
            >
              WEBSITE
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
