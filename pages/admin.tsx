import React, { useEffect, useState } from "react";
import axios from "axios";
import Accordion from "react-bootstrap/Accordion";
import Badge from "react-bootstrap/Badge";
import Dropdown from "react-bootstrap/Dropdown";
import {
  FaSearch,
  FaAngleDown,
  FaCheck,
  FaTimes,
  FaRegClock,
} from "react-icons/fa";

const admin = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [nameFilteredUsers, setNameFilteredUsers] = useState(filteredUsers);
  const [statusFilter, setStatusFilter] = useState("all");
  const [name, setName] = useState("");
  const [trigger, setTrigger] = useState(false);

  const handleStatus = (email, status) => {
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
    console.log("called");
  }, [trigger]);

  const handleSearch = () => {
    if (statusFilter === "all" && name === "") {
      setFilteredUsers(users);
      setNameFilteredUsers(users);
      return;
    } else if (statusFilter === "all" && name !== "") {
      setNameFilteredUsers(
        users.filter((user) => {
          return (user.first + " " + user.last)
            .toUpperCase()
            .includes(name.toUpperCase());
        })
      );
      return;
    }
    setFilteredUsers(
      users.filter((user) => {
        return statusFilter === user.status;
      })
    );
    setNameFilteredUsers(
      users.filter((user) => {
        return (
          statusFilter === user.status &&
          (user.first + " " + user.last)
            .toUpperCase()
            .includes(name.toUpperCase())
        );
      })
    );
  };

  const handleStatusFilter = (status) => {
    setStatusFilter(status);
    if (status !== "all") {
      setFilteredUsers(
        users.filter((user) => {
          return status === user.status;
        })
      );
      setNameFilteredUsers(
        users.filter((user) => {
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
          class="list-unstyled"
          defaultActiveKey="0"
          className="bg-transparent w-9/12 "
        >
          {nameFilteredUsers.map((user, index) => (
            <Accordion.Item
              eventKey={`${index}`}
              key={index}
              className=" w-full"
            >
              <Accordion.Header
                class="list-unstyled"
                className=" w-full border-b-4 border-white"
              >
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
                      <Badge
                        bg="danger"
                        onClick={() => handleStatus(user.email, "rejected")}
                      >
                        Reject
                      </Badge>
                    ) : user.status === "rejected" ? (
                      <Badge
                        bg="success"
                        onClick={() => handleStatus(user.email, "approved")}
                      >
                        Approve
                      </Badge>
                    ) : (
                      <>
                        <Badge
                          bg="success"
                          onClick={() => handleStatus(user.email, "approved")}
                        >
                          Approve
                        </Badge>
                        <Badge
                          bg="danger"
                          onClick={() => handleStatus(user.email, "rejected")}
                        >
                          Reject
                        </Badge>
                      </>
                    )}
                    <FaAngleDown className="text-white text-2xl ml-2" />
                  </div>
                </div>
              </Accordion.Header>
              <Accordion.Body className=" w-full flex justify-center items-center border-b-4 border-white">
                <div className="w-10/12 text-white text-base font-lexend text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
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
