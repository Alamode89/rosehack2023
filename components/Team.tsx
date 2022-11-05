import React from "react";
import Profile from "./Profile";
import { Row, Col } from "react-bootstrap";

const profiles = [
  {
    name: "Ashley Kim",
    pronouns: "she/her",
    position: "Director",
    game: "Overwatch",
    linkedin: "https://www.linkedin.com/in/ashley-kim-838893196/",
    instagram: "https://www.instagram.com/kimyvmin/ ",
    github: "",
    image: "divyank.jpg",
    shadow: "shadow-team-green",
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
    shadow: "shadow-team-pink",
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
    shadow: "shadow-team-yellow",
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
    shadow: "shadow-team-blue",
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
    shadow: "shadow-team-hotpink",
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
    shadow: "shadow-team-purple",
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
    shadow: "shadow-team-gold",
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
    shadow: "shadow-team-teal",
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
    shadow: "shadow-team-orange",
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
    shadow: "shadow-team-lightpurple",
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
    shadow: "shadow-team-green",
  },
];

const Team = () => {
  return (
    <div className="bg-gradient-to-b from-team-top to-team-bottom flex justify-center items-center flex-col py-4">
      <div className="w-11/12 flex justify-center items-center flex-col">
        <p className="font-pixel text-4xl text-white">Meet the Team</p>
        <Row>
          {profiles.map((profile, index) => (
            <Col xl={3} key={index} className=" p-3">
              <Profile
                name={profile.name}
                position={profile.position}
                shadow={profile.shadow}
              />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Team;
