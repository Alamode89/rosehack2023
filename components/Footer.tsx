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
    image: <FaEnvelope className="text-5xl hover:scale-110" />,
  },

  {
    path: "https://www.instagram.com/rosehackucr/",
    title: "Instagram",
    image: <FaInstagram className="text-5xl hover:scale-110" />,
  },

  {
    path: "https://www.linkedin.com/company/rose-hack/mycompany/",
    title: "Linkedin",
    image: <FaLinkedin className="text-5xl hover:scale-110" />,
  },

  {
    path: "https://www.facebook.com/rosehackucr",
    title: "Facebook",
    image: <FaFacebookSquare className="text-5xl hover:scale-110" />,
  },

  {
    path: "https://twitter.com/rosehack_ucr",
    title: "Twitter",
    image: <FaTwitter className="text-5xl hover:scale-110" />,
  },
];

const Footer = () => {
  return (
    <footer className="bg-rosehack-primary-darkestpurple py-4 flex justify-center items-center">
      <Container className="justify-center m-0 p-0">
        <Row className="justify-center m-0 p-0">
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
                    className="fill-current text-rosehack-secondary-white hover:text-rosehack-secondary-salmon"
                  >
                    {link.image}
                  </a>
                </Link>
              </Col>
            );
          })}
        </Row>

        <Row className="text-2xl font-poppins text-center text-rosehack-secondary-white m-0">
          <p className="inline p-0 m-0 mt-4">
            made with &#9829; by the Rose Hack team at UCR
          </p>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
