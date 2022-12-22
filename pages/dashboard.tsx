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
import { FaRegCopy, FaCheck, FaTimes, FaRegClock } from "react-icons/fa";

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
  const [teamName, setTeamName] = useState("");
  const [create, setCreate] = useState(false);
  const [join, setJoin] = useState(false);
  const [inTeam, setInTeam] = useState(false);
  const [showSnackBar, setShowSnackBar] = useState(false);
  const [message, setMessage] = useState("");

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
        if (teamResponse.data.name !== "Untitled Team") {
          setInTeam(true);
        }
      }
    });
  }, []);
  const snackBar = () => {
    setShowSnackBar(true);
    setTimeout(() => {
      setShowSnackBar(false);
      setMessage("");
    }, 1000);
  };

  const copyToClipboard = (copyText: string) => {
    setMessage("ID Copied");
    navigator.clipboard.writeText(copyText);
    snackBar();
  };
  const joinTeam = async () => {
    if (id === "") {
      setMessage("Please enter a team ID");
      snackBar();
      return;
    }
    if (id === userData.team) {
      setMessage("You are already apart of the team you are trying to join!");
      snackBar();
      return;
    }

    const response = await axios.post("/api/verifyTeam", { id: id });

    if (response.status === 201) {
      setMessage("Cannot find team");
      snackBar();
      return;
    } else if (response.status === 202) {
      setMessage("Team full");
      snackBar();
      return;
    }

    await axios.post("/api/leaveTeam", {
      email: userData.email,
      team: userData.team,
      members: team?.members?.length,
      name: userData.first + " " + userData.last,
    });

    await axios.post("/api/updateTeam", {
      email: userData.email,
      team: id,
      name: userData.first + " " + userData.last,
    });

    setUserData({ ...userData, team: id });
    setTrigger(!trigger);
    setJoin(false);
    setInTeam(true);
  };
  const leaveTeam = async () => {
    if (team?.members?.length === 1) {
      setMessage(
        "You cannot leave your current team, since there is only 1 member!"
      );
      snackBar();
      return;
    }

    await axios.post("/api/leaveTeam", {
      email: userData.email,
      team: userData.team,
      members: team?.members?.length,
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
      name: "Untitled Team",
      members: [userData.first + " " + userData.last],
    });
    setInTeam(false);
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

  const renameTeam = async () => {
    if (teamName == "Untitled Team") {
      setMessage("please use a different name!");
      snackBar();
      return;
    }
    if (teamName == "") {
      setMessage("please enter a team name!");
      snackBar();
      return;
    }
    await axios.post("/api/renameTeam", {
      name: teamName,
      team: userData.team,
    });
    setTeam({ ...team!, name: teamName });
    setInTeam(true);
    setCreate(false);
  };

  const handleLogOut = async () => {
    const response = await logOut();
    console.log(response);
    return;
  };
  return (
    <div className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400 flex flex-col justify-evenly items-center min-h-[90vh]">
      <a
        id="mlh-trust-badge"
        className="block max-w-[100px] min-w-[60px] fixed right-[50px] top-0 w-[10%] z-[1000000]"
        href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2023-season&utm_content=wh"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="https://s3.amazonaws.com/logged-assets/trust-badge/2023/mlh-trust-badge-2023-white.svg"
          alt="Major League Hacking 2023 Hackathon Season"
          className="w-full"
        />
      </a>
      <div
        className={`${
          !showSnackBar ? "hidden" : "visible"
        } z-50 bg-black/60 text-white text-center p-2 fixed bottom-[30px] left-1/2 -translate-x-1/2`}
      >
        {message}
      </div>
      <p className="text-white font-lexend m-0 p-0 text-5xl w-full text-center">
        {new Date().getHours() < 12 && new Date().getHours() > 5
          ? "Good Morning"
          : new Date().getHours() < 16 && new Date().getHours() > 12
          ? "Good Afternoon"
          : new Date().getHours() < 20 && new Date().getHours() > 16
          ? "Good Evening"
          : "Good Night"}{" "}
        {userData.first} {userData.last}!
      </p>

      <Row className="flex justify-evenly items-stretch w-full">
        <Col
          md={4}
          className="bg-white rounded-2xl flex flex-col items-center justify-start"
        >
          <div className="h-8 text-center w-10/12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-lexend text-md md:text-xl lg:text-2xl mt-4">
            Information
          </div>

          <div className="bg-gradient-to-r from-purple-400 to-pink-600 h-1 w-10/12" />
          <div className="font-lexend flex flex-col justify-evenly items-start p-4">
            <div className="flex items-center justify-center">
              <p className="p-0 m-0 inline font-bold text-lg">Application:</p>
              <div className="flex items-center ml-1">
                {userData.status === "pending" ? (
                  <>
                    Pending
                    <FaRegClock className="text-yellow-500 ml-2 text-xl" />
                  </>
                ) : userData.status === "approved" ? (
                  <>
                    Approved
                    <FaCheck className="text-green-500 text-xl ml-2" />
                  </>
                ) : (
                  <>
                    Rejected
                    <FaTimes className="text-red-500 text-xl ml-2" />
                  </>
                )}
              </div>
            </div>

            <div>
              <p className="p-0 m-0 inline font-bold text-lg">Email:</p>{" "}
              {user && user.email}
            </div>
            <div>
              <p className="p-0 m-0 inline font-bold text-lg">Phone:</p>{" "}
              {userData.phone}
            </div>
            <div>
              <p className="p-0 m-0 inline font-bold text-lg">Grade:</p>{" "}
              {userData.grade}
            </div>
            <div>
              <p className="p-0 m-0 inline font-bold text-lg">School:</p>{" "}
              {userData.school}
            </div>
            <div>
              <p className="p-0 m-0 inline font-bold text-lg">Gender:</p>{" "}
              {userData.gender}
            </div>
            <div>
              <p className="p-0 m-0 inline font-bold text-lg">Age:</p>{" "}
              {userData.age}
            </div>
            <div>
              <p className="p-0 m-0 inline font-bold text-lg">Major:</p>{" "}
              {userData.major}
            </div>
            <div>
              <p className="p-0 m-0 inline font-bold text-lg">
                Attending In Person:
              </p>{" "}
              {userData.in_person ? "yes" : "no"}
            </div>
            <div>
              <p className="p-0 m-0 inline font-bold text-lg">Vaccinated:</p>{" "}
              {userData.covid ? "yes" : "no"}
            </div>
            <div>
              <p className="p-0 m-0 inline font-bold text-lg">
                Dietary Restrictions:
              </p>{" "}
              {userData.hindu ? "Hindu," : ""}
              {userData.kosher ? " Kosher," : ""}
              {userData.vegan ? " Vegan," : ""}
              {userData.vegetarian ? " Vegetarian" : ""}
              {!(
                userData.hindu ||
                userData.kosher ||
                userData.vegan ||
                userData.vegetarian
              )
                ? "none"
                : ""}
            </div>
          </div>
        </Col>
        <Col
          md={7}
          className="bg-white rounded-2xl flex flex-col items-center justify-start"
        >
          <div className="h-8 text-center w-10/12 text-transparent bg-clip-text bg-gradient-to-r from-[#64e8de] to-[#8a64eb] font-lexend text-md md:text-xl lg:text-2xl mt-4">
            TEAM
          </div>
          <div className="bg-gradient-to-r from-[#64e8de] to-[#8a64eb] h-1 w-10/12" />
          {create ? (
            <div className="flex flex-col justify-start items-center w-full">
              <div className="font-pixel text-base mt-3">Team Name:</div>

              <input
                type="text"
                name="teamName"
                value={teamName}
                placeholder="New Team Name"
                className="border-2 border-black w-11/12"
                onChange={(e) => {
                  setTeamName(e.target.value);
                }}
              />
              <button
                onClick={() => renameTeam()}
                className="hover:scale-105 rounded-xl mt-2 bg-gradient-to-r from-[#268de1] to-[#b65eba] font-pixel text-md md:text-lg lg:text-2xl text-white text-center px-3 py-2"
              >
                CREATE
              </button>
              <button
                onClick={() => {
                  setCreate(false);
                }}
                className="mt-3 hover:scale-105 rounded-xl bg-gradient-to-r to-[#64e8de] from-[#8a64eb] font-pixel text-md md:text-lg lg:text-2xl text-white text-center px-3 py-2"
              >
                BACK
              </button>
            </div>
          ) : join ? (
            <div className="flex flex-col justify-between items-center">
              <div className="font-pixel text-base mt-3">Enter a Team ID</div>
              <input
                type="text"
                name="id"
                value={id}
                placeholder="New Team ID"
                className="border-2 mt-1 border-black"
                onChange={(e) => setId(e.target.value)}
              />
              <button
                onClick={joinTeam}
                className="mt-3 hover:scale-105 rounded-xl bg-gradient-to-r from-[#64e8de] to-[#8a64eb] font-pixel text-md md:text-lg lg:text-2xl text-white text-center px-3 py-2"
              >
                JOIN
              </button>
              <button
                onClick={() => {
                  setJoin(false);
                }}
                className="mt-3 hover:scale-105 rounded-xl bg-gradient-to-r to-[#64e8de] from-[#8a64eb] font-pixel text-md md:text-lg lg:text-2xl text-white text-center px-3 py-2"
              >
                BACK
              </button>
            </div>
          ) : inTeam ? (
            <div className="flex flex-col justify-center items-start w-11/12  p-4">
              <div>
                <p className="p-0 m-0 inline font-bold text-lg">Team Name:</p>{" "}
                {team?.name}
              </div>
              <div className="flex items-center justify-center">
                <p className="p-0 m-0 inline font-bold text-lg">Team ID:</p>
                <div className="flex items-center ml-1">
                  {userData.team}
                  <FaRegCopy
                    className="ml-2 text-blue-300 text-lg font-lexand hover:text-pink-400 hover:cursor-pointer"
                    onClick={() => {
                      copyToClipboard(userData.team);
                    }}
                  />
                </div>
              </div>
              <div className="font-lexend text-sm text-pink-400 text-start">
                Send this Team ID to your teammates to have them join your team!
              </div>
              <div className="flex flex-col">
                <div className="font-lexend text-lg my-2 font-bold">
                  Teammates:
                </div>
                {team?.members?.map((member, index) => (
                  <p className="font-lexend text-base mb-1" key={index}>
                    {member}
                  </p>
                ))}
              </div>
              <div className="font-lexend text-lg font-bold my-2">
                Rename your team:
              </div>
              <div className="w-full flex flex-row items-between justify-center">
                <input
                  type="text"
                  name="teamName"
                  value={teamName}
                  placeholder="New Team Name"
                  className="border-2 border-black w-2/3 p-1"
                  onChange={(e) => {
                    setTeamName(e.target.value);
                  }}
                />
                <button
                  className="w-1/4 ml-2 px-1 py-0 rounded-md bg-pink-400 text-white font-lexend font-bold text-lg hover:scale-105"
                  onClick={() => renameTeam()}
                >
                  Rename
                </button>
              </div>
              <div className="w-full flex justify-evenly items-center my-3">
                <button
                  className="hover:scale-105 rounded-xl bg-gradient-to-r from-[#64e8de] to-[#8a64eb] text-lg font-lexend font-bold text-white text-center px-3 py-2"
                  onClick={leaveTeam}
                >
                  Leave Team
                </button>
                <button
                  className="hover:scale-105 rounded-xl bg-gradient-to-r from-pink-400 to-blue-300 text-lg font-lexend font-bold text-white text-center px-3 py-2"
                  onClick={() => {
                    setJoin(true);
                  }}
                >
                  Join Team
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-between">
              <div className="font-lexand text-xl text-gray-500">No Team</div>
              <button
                onClick={() => {
                  setJoin(true);
                }}
                className="hover:scale-105 rounded-xl bg-gradient-to-r from-[#64e8de] to-[#8a64eb] font-pixel text-md md:text-lg lg:text-2xl text-white text-center px-3 py-2"
              >
                JOIN A TEAM
              </button>
              <button
                onClick={() => {
                  setCreate(true);
                }}
                className="hover:scale-105 rounded-xl mt-2 mb-5 bg-gradient-to-r from-[#268de1] to-[#b65eba] font-pixel text-md md:text-lg lg:text-2xl text-white text-center px-3 py-2"
              >
                CREATE A TEAM
              </button>
            </div>
          )}
        </Col>
      </Row>
      <button
        onClick={() => handleLogOut()}
        className="hover:scale-105 rounded-xl bg-gradient-to-r from-[#6ee2f5] to-[#6454f0] font-lexend font-bold text-md md:text-xl lg:text-3xl text-white text-center px-3 py-2"
      >
        Logout
      </button>
    </div>
  );
};

export default dashboard;
