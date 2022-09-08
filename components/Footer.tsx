import React from "react";
import { Row, Col, Container } from "react-bootstrap";
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
    image: <FaEnvelope size="45" />,
  },

  {
    path: "https://www.instagram.com/rosehackucr/",
    title: "Instagram",
    image: <FaInstagram size="45" />,
  },

  {
    path: "https://www.linkedin.com/company/rose-hack/mycompany/",
    title: "Linkedin",
    image: <FaLinkedin size="45" />,
  },

  {
    path: "https://www.facebook.com/rosehackucr",
    title: "Facebook",
    image: <FaFacebookSquare size="45" />,
  },

  {
    path: "https://twitter.com/rosehack_ucr",
    title: "Twitter",
    image: <FaTwitter size="45" />,
  },
];

const Footer = () => {
  return (
    <footer className="bg-rosehack-primary-darkestpurple py-3">
      <Container className="justify-center mx-auto">
        <Row className="justify-center mx-auto">
          {SocialLinks.map((link, index) => {
            return (
              <Col key={index} xs={2} md={1} className="flex justify-center">
                <Link href={link.path}>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    title={link.title}
                    className="fill-current text-rosehack-secondary-white hover:text-rosehack-secondary-gray"
                  >
                    {link.image}
                  </a>
                </Link>
              </Col>
            );
          })}
        </Row>

        <Row className="text-2xl font-poppins text-center text-rosehack-secondary-white py-2">
          <p>made with &#9829; by the Rose Hack team at UCR</p>
        </Row>

        <Row className="font-poppins text-center text-rosehack-secondary-white">
          <p>MLH link (will put later)</p>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
