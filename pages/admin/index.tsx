import React, { useEffect, useState } from "react";
import axios from "axios";
import Accordion from "react-bootstrap/Accordion";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import {
  FaSearch,
  FaAngleDown,
  FaCheck,
  FaTimes,
  FaRegClock,
} from "react-icons/fa";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { useRouter } from "next/router";

interface user {
  first: string;
  last: string;
  age: string;
  phone: string;
  email: string;
  school: string;
  grade: string;
  gender: string;
  shirt: string;
  major: string;
  resume: string;
  marketing: boolean;
  vegetarian: boolean;
  kosher: boolean;
  vegan: boolean;
  hindu: boolean;
  allergies: boolean;
  status: string;
  team: string;
}

const admin = () => {
  const router = useRouter();

  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [nameFilteredUsers, setNameFilteredUsers] = useState(filteredUsers);
  const [statusFilter, setStatusFilter] = useState("all");
  const [name, setName] = useState("");
  const [trigger, setTrigger] = useState(false);
  const [user] = useAuthState(auth);

  useEffect(() => {
    console.log("INDEX ", user);
    if (user === null || user === undefined) {
      router.push("/admin/login");
    }
  }, []);

  const handleStatus = (email: string, status: string) => {
    axios.post("/api/updateStatus", { email: email, status: status });
    setTrigger(!trigger);
  };

  useEffect(() => {
    axios
      .get("/api/getAllUsers")
      .then((response) => {
        setUsers(response.data);
        setFilteredUsers(response.data);
        setNameFilteredUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [trigger]);

  const handleSearch = () => {
    if (statusFilter === "all" && name === "") {
      setFilteredUsers(users);
      setNameFilteredUsers(users);
      return;
    } else if (statusFilter === "all" && name !== "") {
      setNameFilteredUsers(
        users.filter((user: user) => {
          return (user.first + " " + user.last)
            .toUpperCase()
            .includes(name.toUpperCase());
        })
      );
      return;
    }
    setFilteredUsers(
      users.filter((user: user) => {
        return statusFilter === user.status;
      })
    );
    setNameFilteredUsers(
      users.filter((user: user) => {
        return (
          statusFilter === user.status &&
          (user.first + " " + user.last)
            .toUpperCase()
            .includes(name.toUpperCase())
        );
      })
    );
  };

  const handleStatusFilter = (status: string) => {
    setStatusFilter(status);
    if (status !== "all") {
      setFilteredUsers(
        users.filter((user: user) => {
          return status === user.status;
        })
      );
      setNameFilteredUsers(
        users.filter((user: user) => {
          return status === user.status;
        })
      );
      return;
    }
    setFilteredUsers(users);
    setNameFilteredUsers(users);
  };

  return (
    <div className="p-5 bg-gradient-to-b from-admin-top to-admin-bottom flex justify-center items-center flex-col">
      <p className="font-pixel text-3xl text-white">
        {nameFilteredUsers.length}{" "}
        {statusFilter === "all"
          ? "Registered"
          : statusFilter === "approved"
          ? "Approved"
          : statusFilter === "rejected"
          ? "Rejected"
          : "Pending"}{" "}
        Participants
      </p>
      <div className="w-9/12 my-5">
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
              statusFilter == "pending" ? "!bg-yellow-400" : "!bg-admin-dark/40"
            } hover:!bg-yellow-400 hover:cursor-pointer !rounded-none !text-base !font-lexand !text-white border-x-4 border-t-4 border-white p-2`}
            bg="none"
            onClick={() => handleStatusFilter("pending")}
          >
            Pending
          </Badge>
          <Badge
            className={`${
              statusFilter == "approved" ? "!bg-green-400" : "!bg-admin-dark/40"
            } hover:!bg-green-400 hover:cursor-pointer !rounded-none !text-base !font-lexand !text-white border-r-4 border-t-4 border-white p-2`}
            bg="none"
            onClick={() => handleStatusFilter("approved")}
          >
            Approved
          </Badge>
          <Badge
            className={`${
              statusFilter == "rejected" ? "!bg-red-400" : "!bg-admin-dark/40"
            } hover:!bg-red-400 hover:cursor-pointer !rounded-tl-none !rounded-bl-none !rounded-br-none !rounded-tr-2xl !text-base !font-lexand !text-white border-r-4 border-t-4 border-white p-2`}
            bg="none"
            onClick={() => handleStatusFilter("rejected")}
          >
            Rejected
          </Badge>
        </div>
        <div className="w-full flex flex-row justify-between items-center">
          <input
            className="w-11/12 appearance-none focus:outline-0 active:outline-0 bg-transparent border-4 border-white rounded-bl-3xl rounded-br-3xl rounded-tr-3xl  p-2 text-xl font-lexand text-white"
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          <FaSearch
            onClick={handleSearch}
            className="text-3xl text-white hover:cursor-pointer mx-2"
          />
        </div>
      </div>
      <div className="w-9/12 border-4 border-white rounded-t-2xl  bg-admin-dark/40 flex flex-row">
        <div className="text-center w-1/12 border-r-2 border-white text-white text-base font-lexand">
          STATUS
        </div>
        <div className="text-center w-1/3 border-r-2 border-white text-white text-base font-lexand">
          NAME
        </div>
        <div className="text-center w-1/3 border-r-2 border-white text-white text-base font-lexand">
          EMAIL
        </div>
        <div className="text-center w-1/3 border-white text-white text-base font-lexand">
          ACTION
        </div>
      </div>
      <div className="w-9/12 border-x-4 border-white bg-admin-dark/40">
        <Accordion
          defaultActiveKey="0"
          className="[list-style:none]"
          bsPrefix="bootstrap"
        >
          {nameFilteredUsers.map((user: user, index: number) => (
            <Accordion.Item
              eventKey={`${index}`}
              key={index}
              className="w-full"
            >
              <Accordion.Header className="w-full border-b-4 border-white list-unstyled">
                <div className="text-center w-1/12 border-r-2 border-white flex justify-center items-center">
                  {user.status === "pending" ? (
                    <FaRegClock className="text-yellow-500 text-xl" />
                  ) : user.status === "approved" ? (
                    <FaCheck className="text-green-500 text-xl" />
                  ) : (
                    <FaTimes className="text-red-500 text-xl" />
                  )}
                </div>
                <div className="text-center w-1/3 border-r-2 border-white text-white text-lg font-lexand">
                  {user.first + " " + user.last}
                </div>

                <div className="text-center w-1/3 border-r-2 border-white text-white text-lg font-lexand">
                  {user.email}
                </div>

                <div className="text-center w-1/3 border-white text-white text-base font-lexand flex flex-row items-center justify-center">
                  <div className="flex w-9/12 flex-row justify-between items-center">
                    {user.status === "approved" ? (
                      <>
                        <Button variant="secondary" disabled>
                          Approve
                        </Button>
                        <Button
                          variant="danger"
                          onClick={() => handleStatus(user.email, "rejected")}
                        >
                          Reject
                        </Button>
                      </>
                    ) : user.status === "rejected" ? (
                      <>
                        <Button
                          variant="success"
                          onClick={() => handleStatus(user.email, "approved")}
                        >
                          Approve
                        </Button>
                        <Button variant="secondary" disabled>
                          Reject
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button
                          variant="success"
                          onClick={() => handleStatus(user.email, "approved")}
                        >
                          Approve
                        </Button>
                        <Button
                          variant="danger"
                          onClick={() => handleStatus(user.email, "rejected")}
                        >
                          Reject
                        </Button>
                      </>
                    )}
                    <FaAngleDown className="text-white text-2xl ml-2" />
                  </div>
                </div>
              </Accordion.Header>
              <Accordion.Body className=" w-full flex justify-center items-center border-b-4 border-white">
                <div className="w-10/12 text-white text-base font-lexend flex justify-evenly items-start p-2">
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
                </div>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
      <div className="w-9/12 h-8 border-x-4 border-b-4 border-white rounded-b-2xl  bg-admin-dark/40 flex flex-row" />
    </div>
  );
};

export default admin;
