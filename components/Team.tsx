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
    image: "ashley.jpeg",
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
    image: "hallie.jpeg",
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
    image: "annabelle.jpeg",
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
    image: "angie.jpeg",
    shadow: "shadow-team-teal",
  },
  {
    name: "Samarth Srinivasa",
    pronouns: "he/him",
    position: "Sponsorship",
    game: "Bloons TD 5",
    linkedin: "https://www.linkedin.com/in/samarth-srinivasa/",
    instagram: "https://www.instagram.com/samarth_srinivasa/",
    github: "https://github.com/SamarthSrinivasa",
    image: "samarth.jpeg",
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
    image: "nicole.jpeg",
    shadow: "shadow-team-orange",
  },
  {
    name: "Bonnie Yeh",
    pronouns: "she/her",
    position: "Marketing",
    game: "Valorant",
    linkedin: "https://www.linkedin.com/in/bonnieyeh",
    instagram: "https://www.instagram.com/bonnnies/",
    github: "",
    image: "bonnie.jpeg",
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
    image: "samantha.jpeg",
    shadow: "shadow-team-purple",
  },
  {
    name: "Cindy Do",
    pronouns: "she/her",
    position: "Web Dev",
    game: "Persona 5",
    linkedin: "https://www.linkedin.com/in/cindydo-ucr/",
    instagram: "https://www.instagram.com/c1ndydonut/",
    github: "https://github.com/condoes",
    image: "cindy.jpeg",
    shadow: "shadow-team-lightpurple",
  },
  {
    name: "Andre Amante",
    pronouns: "he/him",
    position: "Web Dev",
    game: "The Last of Us",
    linkedin: "https://www.linkedin.com/in/andreamantee/",
    instagram: " https://www.instagram.com/andweeeee/",
    github: "https://github.com/Alamode89",
    image: "andre.jpeg",
    shadow: "shadow-team-green",
  },
  {
    name: "Divyank Shah",
    pronouns: "he/him",
    position: "Web Dev",
    game: "Clash of Clans",
    linkedin: "https://www.linkedin.com/in/divyank-shah/",
    instagram: "https://www.instagram.com/divyank.shah/",
    github: "https://github.com/shahdivyank",
    image: "divyank.jpeg",
    shadow: "shadow-team-pink",
  },
];

const commitee = [
  "Divyank Shah",
  "Divyank Shah",
  "Divyank Shah",
  "Divyank Shah",
  "Divyank Shah",
  "Divyank Shah",
  "Divyank Shah",
];

const Team = () => {
  return (
    <div className="bg-gradient-to-b from-team-top to-team-bottom flex justify-center items-center flex-col py-4">
      <div className="w-10/12 flex justify-center items-center flex-col">
        <p className="font-pixel text-4xl text-white">Meet the Team</p>
        <Row className="flex justify-center items-center">
          {profiles.map((profile, index) => (
            <Col lg={3} md={4} xs={6} key={index} className=" p-3">
              <Profile
                name={profile.name}
                position={profile.position}
                shadow={profile.shadow}
                image={profile.image}
                linkedin={profile.linkedin}
              />
            </Col>
          ))}
        </Row>
        <div className="flex justify-center items-stretch flex-col p-2 w-full">
          <a
            target="_blank"
            className={`shadow-team-yellow shadow-[20px_-16px_0px_0px] rounded-[2rem] w-full`}
            rel="noreferrer"
          >
            <div className="border-white bg-white border-8 rounded-[2rem]">
              <Row className="w-full">
                <Col className="">
                  {commitee.slice(0, 5).map((member, index) => (
                    <p key={index} className="block">
                      {member}
                    </p>
                  ))}
                </Col>
                <Col>
                  {commitee.slice(0, 5).map((member, index) => (
                    <p key={index} className="block">
                      {member}
                    </p>
                  ))}
                </Col>
                <Col>
                  {commitee.slice(0, 5).map((member, index) => (
                    <p key={index} className="block">
                      {member}
                    </p>
                  ))}
                </Col>
              </Row>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Team;
