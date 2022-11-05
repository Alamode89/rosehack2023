import React from "react";
import { Row, Col } from "react-bootstrap";
import Link from "next/link";
import {
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaFacebookSquare,
  FaTwitter,
} from "react-icons/fa";

const SocialLinks = [
  {
    path: "mailto:rosehackucr@gmail.com",
    title: "Email",
    image: <FaEnvelope className="text-5xl hover:text-header-hover" />,
  },

  {
    path: "https://www.instagram.com/rosehackucr/",
    title: "Instagram",
    image: <FaInstagram className="text-5xl hover:text-header-hover" />,
  },

  {
    path: "https://www.linkedin.com/company/rose-hack/mycompany/",
    title: "Linkedin",
    image: <FaLinkedin className="text-5xl hover:text-header-hover" />,
  },

  {
    path: "https://www.facebook.com/rosehackucr",
    title: "Facebook",
    image: <FaFacebookSquare className="text-5xl hover:text-header-hover" />,
  },

  {
    path: "https://twitter.com/rosehack_ucr",
    title: "Twitter",
    image: <FaTwitter className="text-5xl hover:text-header-hover" />,
  },
];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-header-left to-header-fright py-4 flex justify-center items-center flex-col">
      {/* <Container className="justify-center m-0 p-0"> */}
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

      {/* <Row className="text-2xl font-poppins text-center text-white m-0"> */}
      <p className="inline p-0 m-0 mt-4 text-2xl text-white">
        made with &#9829; by the Rose Hack team at UCR
      </p>
      <p className="inline p-0 m-0 mt-4 text-2xl text-white">
        *MLH Code of Conduct* (link)
      </p>
      {/* </Row> */}
      {/* </Container> */}
    </footer>
  );
};

export default Footer;
