import React from "react";
import { Col, Row } from "react-bootstrap";
import BoardProfile from "./Profile";

const boardMembers = [
  {
    name: "Divyank Shah",
    pronouns: "he/him",
    position: "Web Dev ",
    games: "Fortnite",
    linkedin: "https://www.linkedin.com/in/divyank-shah/",
    instagram: "https://www.instagram.com/divyank.shah/",
    github: "",
    image: "divyank.jpg",
  },
  {
    name: "Divyank Shah",
    pronouns: "he/him",
    position: "Web Dev ",
    games: "Fortnite",
    linkedin: "",
    instagram: "https://www.instagram.com/divyank.shah/",
    github: "https://github.com/shahdivyank",
    image: "divyank.jpg",
  },
  {
    name: "Divyank Shah",
    pronouns: "he/him",
    position: "Web Dev ",
    games: "Fortnite",
    linkedin: "https://www.linkedin.com/in/divyank-shah/",
    instagram: "",
    github: "https://github.com/shahdivyank",
    image: "divyank.jpg",
  },
  {
    name: "Divyank Shah",
    pronouns: "he/him",
    position: "Web Dev ",
    games: "Fortnite",
    linkedin: "",
    instagram: "https://www.instagram.com/divyank.shah/",
    github: "",
    image: "divyank.jpg",
  },
  {
    name: "Divyank Shah",
    pronouns: "he/him",
    position: "Web Dev ",
    games: "Fortnite",
    linkedin: "https://www.linkedin.com/in/nicoleb-garcia/",
    instagram: "",
    github: "",
    image: "divyank.jpg",
  },
  {
    name: "Nicole Garcia",
    pronouns: "she/her",
    position: "Sponsorship ",
    games: "The Last of Us",
    linkedin: "https://www.linkedin.com/in/nicoleb-garcia/",
    instagram: "https://www.instagram.com/lpurgitoryl/",
    github: "https://github.com/lpurgitoryl",
    image: "divyank.jpg",
  },
  {
    name: "Divyank Shah",
    pronouns: "he/him",
    position: "Web Dev ",
    games: "Fortnite",
    linkedin: "https://www.linkedin.com/in/divyank-shah/",
    instagram: "https://www.instagram.com/divyank.shah/",
    github: "https://github.com/shahdivyank",
    image: "divyank.jpg",
  },
  {
    name: "Divyank Shah",
    pronouns: "he/him",
    position: "Web Dev ",
    games: "Fortnite",
    linkedin: "https://www.linkedin.com/in/divyank-shah/",
    instagram: "https://www.instagram.com/divyank.shah/",
    github: "https://github.com/shahdivyank",
    image: "divyank.jpg",
  },
  {
    name: "Andre Amante",
    pronouns: "he/him",
    position: "Web Dev ",
    games: "The Last of Us",
    linkedin: "https://www.linkedin.com/in/andreamantee/",
    instagram: " https://www.instagram.com/andweeeee/",
    github: "https://github.com/Alamode89",
    image: "divyank.jpg",
  },
  {
    name: "Divyank Shah",
    pronouns: "he/him",
    position: "Web Dev ",
    games: "Fortnite",
    linkedin: "https://www.linkedin.com/in/divyank-shah/",
    instagram: "https://www.instagram.com/divyank.shah/",
    github: "https://github.com/shahdivyank",
    image: "divyank.jpg",
  },
];

const colors = [
  "bg-rosehack-secondary-green",
  "bg-rosehack-secondary-lightpink",
  "bg-rosehack-secondary-yellow",
  "bg-rosehack-secondary-blue",
  "bg-rosehack-secondary-salmon",
  "bg-rosehack-secondary-darkpurple",
  "bg-rosehack-secondary-orange",
  "bg-rosehack-secondary-teal",
  "bg-rosehack-secondary-peach",
  "bg-rosehack-secondary-purple",
];

const Profiles = () => {
  return (
    <div className=" flex justify-center items-center">
      <Row className="w-11/12 bg-rosehack-primary-darkestpurple rounded-bl-3xl rounded-br-3xl p-4">
        {boardMembers.map((member, index) => (
          <Col xl={4} md={6} key={index} className="p-1">
            <BoardProfile
              className={colors[index % colors.length]}
              name={member.name}
              pronouns={member.pronouns}
              position={member.position}
              games={member.games}
              linkedin={member.linkedin}
              instagram={member.instagram}
              github={member.github}
              image={member.image}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Profiles;
