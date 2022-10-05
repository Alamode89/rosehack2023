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
    image: <FaEnvelope className="sm:text-5xl text-4xl" />,
  },

  {
    path: "https://www.instagram.com/rosehackucr/",
    title: "Instagram",
    image: <FaInstagram className="sm:text-5xl text-4xl" />,
  },

  {
    path: "https://www.linkedin.com/company/rose-hack/mycompany/",
    title: "Linkedin",
    image: <FaLinkedin className="sm:text-5xl text-4xl" />,
  },

  {
    path: "https://www.facebook.com/rosehackucr",
    title: "Facebook",
    image: <FaFacebookSquare className="sm:text-5xl text-4xl" />,
  },

  {
    path: "https://twitter.com/rosehack_ucr",
    title: "Twitter",
    image: <FaTwitter className="sm:text-5xl text-4xl" />,
  },
];

const Footer = () => {
  return (
    <footer className="bg-rosehack-primary-darkestpurple py-5 flex justify-center items-center">
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

        <Row className="text-2xl font-poppins text-center text-rosehack-secondary-white m-0 p-0">
          <p className="inline p-0 m-0 mt-4">
            made with &#9829; by the Rose Hack team at UCR
          </p>
          <p className="inline p-0 m-0 mt-3">MLH link (will put later)</p>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
