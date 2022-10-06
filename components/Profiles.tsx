import React from "react";
import { Col, Row } from "react-bootstrap";
import Profile from "./Profile";

const boardMembers = [
  {
    name: "Ashley Kim",
    pronouns: "she/her",
    position: "Director",
    game: "Overwatch",
    linkedin: "https://www.linkedin.com/in/ashley-kim-838893196/",
    instagram: "https://www.instagram.com/kimyvmin/ ",
    github: "",
    image: "divyank.jpg",
  },
  {
    name: "Hallie Pham",
    pronouns: "she/her",
    position: "Director",
    game: "Valorant",
    linkedin: "https://www.linkedin.com/in/hallie-pham-46a749191",
    instagram: "https://www.instagram.com/halliepham/?hl=en",
    github: "",
    image: "divyank.jpg",
  },
  {
    name: "Annabelle Le ",
    pronouns: "she/her",
    position: "Operations",
    game: "Valorant",
    linkedin: "",
    instagram: "",
    github: "",
    image: "divyank.jpg",
  },
  {
    name: "Angelika Bermudez",
    pronouns: "she/her",
    position: "Operations",
    game: "Bloons TD 6",
    linkedin: "https://www.linkedin.com/in/angelika-bermudez-4233931b8/",
    instagram: "https://www.instagram.com/sussyangy/",
    github: "",
    image: "divyank.jpg",
  },
  {
    name: "Samarth Srinivasa",
    pronouns: "he/him",
    position: "Sponsorship",
    game: "Bloons TD 5",
    linkedin: "https://www.linkedin.com/in/samarth-srinivasa/",
    instagram: "https://www.instagram.com/samarth_srinivasa/",
    github: "https://github.com/SamarthSrinivasa",
    image: "divyank.jpg",
  },
  {
    name: "Nicole Garcia",
    pronouns: "she/her",
    position: "Sponsorship",
    game: "The Last of Us",
    linkedin: "https://www.linkedin.com/in/nicoleb-garcia/",
    instagram: "https://www.instagram.com/lpurgitoryl/",
    github: "https://github.com/lpurgitoryl",
    image: "divyank.jpg",
  },
  {
    name: "Bonnie Yeh",
    pronouns: "she/her",
    position: "Marketing",
    game: "Valorant",
    linkedin: "https://www.linkedin.com/in/bonnieyeh",
    instagram: "https://www.instagram.com/bonnnies/",
    github: "",
    image: "divyank.jpg",
  },
  {
    name: "Samantha Niño",
    pronouns: "she/her",
    position: "Marketing",
    game: "Stardew Valley",
    linkedin: "",
    instagram: "https://www.instagram.com/samdosea/",
    github: "",
    image: "divyank.jpg",
  },
  {
    name: "Cindy Do",
    pronouns: "she/her",
    position: "Web Dev",
    game: "Persona 5",
    linkedin: "https://www.linkedin.com/in/cindydo-ucr/",
    instagram: "https://www.instagram.com/c1ndydonut/",
    github: "https://github.com/condoes",
    image: "divyank.jpg",
  },
  {
    name: "Andre Amante",
    pronouns: "he/him",
    position: "Web Dev",
    game: "The Last of Us",
    linkedin: "https://www.linkedin.com/in/andreamantee/",
    instagram: " https://www.instagram.com/andweeeee/",
    github: "https://github.com/Alamode89",
    image: "divyank.jpg",
  },
  {
    name: "Divyank Shah",
    pronouns: "he/him",
    position: "Web Dev",
    game: "Clash of Clans",
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
            <Profile
              className={colors[index % colors.length]}
              name={member.name}
              pronouns={member.pronouns}
              position={member.position}
              game={member.game}
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
