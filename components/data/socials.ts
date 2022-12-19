import {
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaFacebookSquare,
  FaTwitter,
} from "react-icons/fa";

export const SocialLinks = [
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
