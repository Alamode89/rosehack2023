import React, { useEffect, useState } from "react";
import axios from "axios";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import {
  FaRegCopy,
  FaTrophy,
  FaSearch,
  FaAngleDown,
  FaCheck,
  FaTimes,
} from "react-icons/fa";
import { auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { Badge } from "react-bootstrap";

const admin = () => {
  const [teams, setTeams] = useState([]);
  const [filteredTeams, setFilteredTeams] = useState([]);
  const [user, setUser] = useState<string | null>("");
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [trigger, setTrigger] = useState(false);

  const copyToClipboard = (copyText: string) => {
    navigator.clipboard.writeText(copyText);
    const x = document.getElementById("snackbar");
    if (x != null) {
      x.className =
        "visible z-50 bg-black text-white text-center p-2 fixed bottom-[30px] left-1/2 -translate-x-1/2";
      setTimeout(() => {
        x.className =
          "hidden z-50 bg-black text-white text-center p-2 fixed bottom-[30px] left-1/2 -translate-x-1/2";
      }, 1000);
    }
  };

  const handleStatus = async (id: string, status: string) => {
    await axios.post("/api/updateQualification", { id: id, status: status });
    setTrigger(!trigger);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentState) => {
      if (
        currentState !== null &&
        currentState.email === "rosehackucr@gmail.com"
      )
        setUser("rosehackucr@gmail.com");
    });
  }, []);

  useEffect(() => {
    const getUsers = async () => {
      await axios
        .get("/api/getAllTeams")
        .then((response) => {
          setTeams(response.data);
          setFilteredTeams(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    getUsers();
  }, [trigger]);

  const handleSearch = () => {
    setFilteredTeams(
      teams.filter((team: any) => {
        return (
          search.trim() === team.id.trim() ||
          search.trim() === team.data.name.trim()
        );
      })
    );
  };

  const handleStatusFilter = (status: string) => {
    setStatusFilter(status);
    if (status !== "all") {
      setFilteredTeams(
        teams.filter((team: any) => {
          return status === team.data.status;
        })
      );
      return;
    } else {
      setFilteredTeams(teams);
    }
  };

  if (user === "rosehackucr@gmail.com") {
    return (
      <div className="min-h-screen p-5 bg-gradient-to-b from-admin-top to-admin-bottom flex justify-center items-center flex-col">
        <p className="font-pixel text-3xl text-white">
          {filteredTeams.length} {filteredTeams.length === 1 ? "Team" : "Teams"}
        </p>
        <div className="w-11/12 my-5">
          <div className="w-full flex flex-row justify-start items-center">
            <Badge
              className={`${
                statusFilter == "all" ? "!bg-blue-400" : "!bg-admin-dark/40"
              } hover:!bg-blue-400 hover:cursor-pointer !rounded-tl-2xl !rounded-bl-none !rounded-br-none !rounded-tr-none !text-base !font-lexand !text-white border-l-4 border-t-4 border-white p-2`}
              bg="none"
              onClick={() => handleStatusFilter("all")}
            >
              All
            </Badge>
            <Badge
              className={`${
                statusFilter == "approved"
                  ? "!bg-green-400"
                  : "!bg-admin-dark/40"
              } hover:!bg-green-400 !font-lexand border-x-4 hover:cursor-pointer !rounded-none !text-base !font-lexand !text-white border-r-4 border-t-4 border-white p-2`}
              bg="none"
              onClick={() => handleStatusFilter("approved")}
            >
              Qualified
            </Badge>
            <Badge
              className={`${
                statusFilter == "rejected" ? "!bg-red-400" : "!bg-admin-dark/40"
              } hover:!bg-red-400 hover:cursor-pointer !rounded-tl-none !rounded-bl-none !rounded-br-none !rounded-tr-2xl !text-base !font-lexand !text-white border-r-4 border-t-4 border-white p-2`}
              bg="none"
              onClick={() => handleStatusFilter("rejected")}
            >
              Disqualified
            </Badge>
          </div>
          <div className="w-full flex flex-row justify-between items-center">
            <input
              className="w-11/12 appearance-none focus:outline-0 active:outline-0 bg-transparent border-4 border-white rounded-bl-3xl rounded-br-3xl rounded-tr-3xl  p-2 text-xl font-lexand text-white"
              type="text"
              placeholder="team name or id"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <FaSearch
              onClick={handleSearch}
              className="text-3xl text-white hover:cursor-pointer mx-2"
            />
          </div>
        </div>
        <div className="w-11/12 border-4 border-white rounded-t-2xl  bg-admin-dark/40 flex flex-row">
          <div className="text-center w-1/12 border-r-2 border-white text-white text-base font-lexand">
            STATUS
          </div>
          <div className="text-center w-1/3 border-r-2 border-white text-white text-base font-lexand">
            NAME
          </div>
          <div className="text-center w-1/3 border-r-2 border-white text-white text-base font-lexand">
            TEAM ID
          </div>
          <div className="text-center w-1/3 border-white text-white text-base font-lexand">
            ACTION
          </div>
        </div>
        <div className="w-11/12 border-x-4 border-white bg-admin-dark/40">
          <Accordion className="[list-style:none]" bsPrefix="bootstrap">
            {filteredTeams.map((team: any, index: number) => (
              <Accordion.Item
                eventKey={`${index}`}
                key={index}
                className="w-full"
              >
                <Accordion.Header className="w-full border-b-4 border-white list-unstyled">
                  <div className="text-center w-1/12 border-r-2 border-white flex justify-center items-center">
                    {team.data.status === "approved" ? (
                      <FaCheck className="text-green-500 text-xl" />
                    ) : (
                      <FaTimes className="text-red-500 text-xl" />
                    )}
                  </div>

                  <div className="w-1/3 border-r-2 border-white flex justify-start items-center">
                    <div className="text-center text-white text-lg font-lexand ml-2">
                      {team.data.name}
                    </div>
                    {team.data.prize ? (
                      <FaTrophy className="text-yellow-300 text-lg ml-2" />
                    ) : (
                      <></>
                    )}
                  </div>

                  <div className="text-center w-1/3 border-r-2 border-white flex justify-start items-center">
                    <div className="text-center text-white text-sm font-lexand ml-2">
                      {team.id}
                    </div>
                    <FaRegCopy
                      className="ml-2 text-blue-300 text-lg font-lexand"
                      onClick={() => {
                        copyToClipboard(team.id);
                      }}
                    />
                    <div
                      id="snackbar"
                      className="hidden z-50 bg-black/60 text-white text-center p-2 fixed bottom-[30px] left-1/2"
                    >
                      Team ID Copied
                    </div>
                  </div>

                  <div className="text-center w-1/3 border-white text-white text-base font-lexand flex flex-row items-center justify-center">
                    <div className="flex w-9/12 flex-row justify-between items-center">
                      {team.data.status === "approved" ? (
                        <>
                          <Button variant="secondary" disabled>
                            Qualify
                          </Button>
                          <Button
                            variant="danger"
                            onClick={() => handleStatus(team.id, "rejected")}
                          >
                            Disqualify
                          </Button>
                        </>
                      ) : (
                        <>
                          <Button
                            variant="success"
                            onClick={() => handleStatus(team.id, "approved")}
                          >
                            Qualify
                          </Button>
                          <Button variant="secondary" disabled>
                            Disqualify
                          </Button>
                        </>
                      )}
                      <FaAngleDown className="text-white text-2xl ml-2" />
                    </div>
                  </div>
                </Accordion.Header>
                <Accordion.Body className=" w-full flex justify-center items-center flex-col border-b-4 border-white text-white">
                  <div className="w-11/12 flex justify-center items-center p-2">
                    <div className="w-1/3">
                      <p className="m-0 p-0 text-lg font-black font-lexend">
                        Team Members
                      </p>
                      <div className="p-0 m-0">
                        {team.data.members.map(
                          (member: string, index: number) => (
                            <p key={index} className="m-0 p-0 font-lexend">
                              {member}
                            </p>
                          )
                        )}
                      </div>
                    </div>
                    <div className="w-1/3">
                      <p className="m-0 p-0 text-lg font-black font-lexend">
                        Notes
                      </p>
                      <div className="p-0 m-0">
                        {team.data.logs === "" ? "No Notes" : team.data.logs}
                      </div>
                    </div>
                    <div className="w-1/3">
                      <p className="m-0 p-0 text-lg font-black font-lexend">
                        Prize Information
                      </p>
                      <div className="p-0 m-0">
                        {team.data.prizeLogs === ""
                          ? "No prize notes"
                          : team.data.prizeLogs}
                      </div>
                    </div>
                  </div>

                  {/* <div className="w-10/12 text-white text-base font-lexend flex justify-evenly items-start p-2">
                  <div className="w-1/3 p-2">
                    <p className="underline m-0 p-0 text-lg text-center">
                      General Information
                    </p>
                    <div className="p-0 m-0 font-light">
                      Team:
                      <p className="m-0 p-0 font-black inline">
                        {" "}
                        {user.team === "" || user.team === undefined
                          ? "Independent"
                          : user.team}
                      </p>
                    </div>
                    <div className="p-0 m-0 font-light">
                      School:
                      <p className="m-0 p-0 font-black inline">
                        {" "}
                        {user.school}
                      </p>
                    </div>
                    <div className="p-0 m-0 font-light">
                      Major:
                      <p className="m-0 p-0 font-black inline"> {user.major}</p>
                    </div>
                    <div className="p-0 m-0 font-light">
                      Gender:
                      <p className="m-0 p-0 font-black inline">
                        {" "}
                        {user.gender}
                      </p>
                    </div>
                  </div>
                  <div className="w-1/3 p-2">
                    <p className="text-lg underline m-0 p-0 text-center">
                      Misc Information
                    </p>
                    <div className="p-0 m-0 font-light">
                      Phone:
                      <p className="m-0 p-0 font-black inline"> {user.phone}</p>
                    </div>
                    <div className="p-0 m-0 font-light">
                      Shirt:
                      <p className="m-0 p-0 font-black inline">
                        {" "}
                        Adult {user.shirt}
                      </p>
                    </div>
                    <div className="p-0 m-0 font-light">
                      Age:
                      <p className="m-0 p-0 font-black inline">
                        {" "}
                        {user.age} years old
                      </p>
                    </div>
                    {user.resume !== "" && (
                      <div className="p-0 m-0 font-light">
                        Resume:{" "}
                        <a
                          href={user.resume}
                          className="m-0 p-0 font-black inline text-white no-underline hover:underline"
                        >
                          {user.first}&apos;s Resume
                        </a>
                      </div>
                    )}
                  </div>
                  <div className="w-1/3 p-2">
                    <p className="text-lg underline m-0 p-0 text-center">
                      Dietary Restrictions
                    </p>
                    <div className="text-center">
                      {user.vegetarian && (
                        <Badge bg="success">Vegetarian</Badge>
                      )}
                      {user.vegan && <Badge bg="warning">Vegan</Badge>}
                      {user.kosher && <Badge bg="primary">Kosher</Badge>}
                      {user.hindu && <Badge bg="info">Hindu</Badge>}
                      {user.allergies && (
                        <Badge bg="secondary">Allergies</Badge>
                      )}
                    </div>
                  </div>
                </div> */}
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
        <div className="w-11/12 h-8 border-x-4 border-b-4 border-white rounded-b-2xl  bg-admin-dark/40 flex flex-row" />
      </div>
    );
  }
};

export default admin;
