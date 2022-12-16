import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import axios from "axios";
import { data } from "../components/data/register";
import { Row, Col } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

interface team_type {
  members: Array<string>;
  name: string;
}

const dashboard = () => {
  const router = useRouter();
  const [user] = useAuthState(auth);
  const [userData, setUserData] = useState<typeof data>(data);
  const [team, setTeam] = useState<team_type>();
  const [id, setId] = useState("");
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    console.log(userData);
    onAuthStateChanged(auth, async (currentState) => {
      if (currentState === null) router.push("/user");
      else if (currentState !== null) {
        const response = await axios.post("/api/getUser", {
          email: currentState.email,
        });
        setUserData(response.data);
        const teamResponse = await axios.post("/api/getTeam", {
          uid: response.data.team,
        });
        setTeam(teamResponse.data);
      }
    });
  }, []);

  const joinTeam = async () => {
    if (id === userData.team) {
      alert("Cannot join team you already are in");
      return;
    }

    const response = await axios.post("/api/verifyTeam", { id: id });
    if (!response.data) {
      alert("team is full");
      return;
    }

    await axios.post("/api/leaveTeam", {
      email: userData.email,
      team: userData.team,
      members: team?.members.length,
      name: userData.first + " " + userData.last,
    });

    await axios.post("/api/updateTeam", {
      email: userData.email,
      team: id,
      name: userData.first + " " + userData.last,
    });

    setUserData({ ...userData, team: id });
    setTrigger(!trigger);
  };

  const leaveTeam = async () => {
    if (team?.members.length === 1) {
      alert("cannot leave team when ur the only one lol");
      return;
    }

    await axios.post("/api/leaveTeam", {
      email: userData.email,
      team: userData.team,
      members: team?.members.length,
      name: userData.first + " " + userData.last,
    });

    const uuid = uuidv4();
    await axios.post("/api/newTeam", {
      email: userData.email,
      uuid: uuid,
      name: userData.first + " " + userData.last,
    });

    setUserData({ ...userData, team: uuid });
    setTeam({
      name: "No Team Name",
      members: [userData.first + " " + userData.last],
    });
  };

  useEffect(() => {
    const getTeamData = async () => {
      const teamResponse = await axios.post("/api/getTeam", {
        uid: id,
      });
      setTeam(teamResponse.data);
    };

    getTeamData();
  }, [trigger]);

  const logOut = async () => {
    signOut(auth)
      .then(() => {
        console.log(user);
        router.push("/user");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLogOut = async () => {
    const response = await logOut();
    console.log(response);
    return;
  };
  return (
    <div className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400 flex flex-col justify-center items-center">
      <Row className="flex justify-center items-start flex-row w-10/12 min-h-screen ">
        <Col
          md={5}
          className="mt-5 mx-2 min-h-screen bg-white rounded-2xl flex flex-col items-center justify-start"
        >
          <div className="h-8 text-center w-10/12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-pixel text-md md:text-xl lg:text-2xl mt-4">
            GOOD MORNING{" "}
          </div>
          <div className="h-12 text-center w-10/12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-pixel text-md md:text-xl lg:text-2xl mt-4">
            {userData.first} {userData.last}!
          </div>
          <div className="bg-gradient-to-r from-purple-400 to-pink-600 h-1 w-10/12 mb-2" />
          <div className="text-base w-full font-lexend flex flex-col justify-center items-center ">
            <div className="m-2 flex items-center">
              <span className="font-pixel">email:</span>
              <span>{user && user.email}</span>
            </div>
            <div className="m-2 flex items-center ">
              <span className="font-pixel">phone:</span>
              <span>{userData.phone}</span>
            </div>
            <div className="m-2 flex items-center">
              <span className="font-pixel ">grade:</span>
              <span>{userData.grade}</span>
            </div>
            <div className="m-2 flex items-center">
              <span className="font-pixel">school:</span>
              <span>{userData.school}</span>
            </div>
            <div className="m-2 flex items-center">
              <span className="font-pixel ">gender:</span>
              <span>{userData.gender}</span>
            </div>
            <div className="m-2 flex items-center">
              <span className="font-pixel">age:</span>
              <span>{userData.age}</span>
            </div>
            <div className="m-2 flex items-center">
              <span className="font-pixel">major:</span>
              <span>{userData.major}</span>
            </div>
            <div className="m-2 flex items-center">
              <span className="font-pixel">in person:</span>
              <span>{userData.in_person ? "yes" : "no"}</span>
            </div>
            <div className="m-2 flex items-center">
              <span className="font-pixel">food specialties:</span>
              <span>
                {userData.hindu ? "hindu" : ""}
                {userData.kosher ? " kosher" : ""}
                {userData.vegan ? " vegan" : ""}
                {userData.vegetarian ? " vegetarian" : ""}
                {!(
                  userData.hindu ||
                  userData.kosher ||
                  userData.vegan ||
                  userData.vegetarian
                )
                  ? "none"
                  : ""}
              </span>
            </div>
            <div className="m-2 flex items-center">
              <span className="font-pixel">veccinated:</span>
              <span>{userData.covid ? "yes" : "no"}</span>
            </div>
            <button
              onClick={() => handleLogOut()}
              className="hover:scale-105 rounded-xl m-5 bg-gradient-to-r from-purple-400 to-pink-600  font-pixel text-md md:text-xl lg:text-2xl text-white text-center px-3 py-2"
            >
              EDIT MY PROFILE
            </button>
          </div>
        </Col>
        <Col
          md={5}
          className="mt-5 h-full mx-2 min-h-screen bg-white rounded-2xl flex flex-col items-center justify-start"
        >
          <div className="w-full flex flex-col items-center justify-center">
            <div className="h-12 text-center w-10/12 text-transparent bg-clip-text bg-gradient-to-r from-[#64e8de] to-[#8a64eb] font-pixel text-md md:text-xl lg:text-2xl mt-4">
              TEAM
            </div>
            <div className="bg-gradient-to-r from-[#64e8de] to-[#8a64eb] h-1 w-10/12" />
          </div>
          <div>
            <div className="text-3xl">Team ID: {userData.team}</div>
            <div>
              Send this ID to your teammates to have them join your team
            </div>
            <input
              type="text"
              name="id"
              value={id}
              className="border-2 border-black"
              onChange={(e) => setId(e.target.value)}
            />
            <button onClick={joinTeam}>Join</button>
            <button onClick={leaveTeam}>Leave</button>
            <p>{team?.name}</p>
            {team?.members?.map((member, index) => (
              <p key={index}>{member}</p>
            ))}
          </div>
        </Col>
      </Row>
      <button
        onClick={() => handleLogOut()}
        className="hover:scale-105 rounded-xl m-5 bg-gradient-to-r from-[#6ee2f5] to-[#6454f0] font-pixel text-md md:text-xl lg:text-2xl text-white text-center px-3 py-2"
      >
        LOGOUT
      </button>
    </div>
  );
};

export default dashboard;
