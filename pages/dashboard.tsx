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
import { FaRegCopy } from "react-icons/fa";

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
  const [snackBar, setSnackBar] = useState(
    "hidden z-50 bg-black text-white text-center p-2 fixed bottom-[30px] left-1/2 -translate-x-1/2"
  );

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
        if (teamResponse.data.name != "Untitled Team") {
          setInTeam(true);
        }
      }
    });
  }, []);

  const joinTeam = async () => {
    if (id === "") {
      alert("Please enter a team ID");
      return;
    }
    if (id === userData.team) {
      alert("Cannot join team you already are in");
      return;
    }

    const response = await axios.post("/api/verifyTeam", { id: id });

    if (response.status === 201) {
      alert("Cannot find team");
      return;
    } else if (response.status === 202) {
      alert("Teaem full");
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
  // const dummy = async () => {
  //   const uuid = uuidv4();
  //   await axios.post("/api/newTeam", {
  //     email: userData.email,
  //     uuid: uuid,
  //     name: userData.first + " " + userData.last,
  //   });
  // };
  const leaveTeam = async () => {
    if (team?.members?.length === 1) {
      alert("cannot leave team when ur the only one lol");
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
      alert("please use a different name!");
      return;
    }
    if (teamName == "") {
      alert("please enter a team name!");
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
  const copyToClipboard = (copyText: string) => {
    navigator.clipboard.writeText(copyText);
    setSnackBar(
      "visible z-50 bg-black text-white text-center p-2 fixed bottom-[30px] left-1/2 -translate-x-1/2"
    );
    setTimeout(() => {
      setSnackBar(
        "hidden z-50 bg-black text-white text-center p-2 fixed bottom-[30px] left-1/2 -translate-x-1/2"
      );
    }, 1000);
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
            <div className="flex flex-col justify-center items-start w-11/12">
              <div className="flex flex-row justify-center items-center mt-3">
                <span className="font-pixel text-base">Team Name:</span>
                <span className="font-lexend text-base ">{team?.name}</span>
              </div>
              <div className="flex flex-row justify-center items-center mt-3">
                <span className="font-pixel text-base">Team ID:</span>
                <span className="font-lexend text-xs ">{userData.team}</span>
                <FaRegCopy
                  className="ml-2 text-blue-300 text-lg font-lexand hover:text-pink-400 hover:cursor-pointer"
                  onClick={() => {
                    copyToClipboard(userData.team);
                  }}
                />
                <div className={snackBar}>ID Copied</div>
              </div>
              <div className="font-lexend text-sm text-pink-400 text-start w-9/12">
                Send this ID to your teammates to have them join your team
              </div>
              <div className="flex flex-col">
                <div className="font-pixel text-base my-2">Teammates:</div>
                {team?.members?.map((member, index) => (
                  <p className="font-lexend text-base mb-1" key={index}>
                    {member}
                  </p>
                ))}
              </div>
              <div className="font-pixel text-base my-2">Rename your team:</div>
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
                  className="w-1/4 ml-2 px-1 py-0 rounded-md bg-pink-400 text-white font-pixel text-xs"
                  onClick={() => renameTeam()}
                >
                  Rename
                </button>
              </div>
              <div className="w-full flex flex-col justify-center items-center my-3">
                <button
                  className="hover:scale-105 rounded-xl mb-2 bg-gradient-to-r from-[#64e8de] to-[#8a64eb] text-base font-pixel text-white text-center px-3 py-2"
                  onClick={leaveTeam}
                >
                  Leave the team
                </button>
                <button
                  className="hover:scale-105 rounded-xl bg-gradient-to-r from-pink-400 to-blue-300 text-base font-pixel text-white text-center px-3 py-2"
                  onClick={() => {
                    setJoin(true);
                  }}
                >
                  Join A different Team
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
        className="hover:scale-105 rounded-xl m-5 bg-gradient-to-r from-[#6ee2f5] to-[#6454f0] font-pixel text-md md:text-xl lg:text-2xl text-white text-center px-3 py-2"
      >
        LOGOUT
      </button>
    </div>
  );
};

export default dashboard;
