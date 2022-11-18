import React from "react";
import { Row, Col } from "react-bootstrap";
import Link from "next/link";
import { SocialLinks } from "./data/socials";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-header-left to-header-fright py-4 flex justify-center w-full items-center flex-col">
      <Row className="flex justify-center items-center m-0 p-0 w-full">
        {SocialLinks.map((link, index) => {
          return (
            <Col
              key={index}
              xs={2}
              md={1}
              className="flex justify-center m-0 p-0"
            >
              <Link href={link.path}>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  title={link.title}
                  className="text-white"
                >
                  {link.image}
                </a>
              </Link>
            </Col>
          );
        })}
      </Row>
      <p className="inline p-0 m-0 mt-4 text-2xl w-10/12 text-center text-white">
        made with &#9829; by the Rose Hack team at UCR
      </p>
      <a
        href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
        className="inline p-0 m-0 mt-4 text-2xl  no-underline hover:!text-header-hover w-10/12 text-center text-white"
      >
        MLH Code of Conduct
      </a>
    </footer>
  );
};

export default Footer;
