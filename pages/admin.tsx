import React, { useEffect, useState } from "react";
import axios from "axios";
import Accordion from "react-bootstrap/Accordion";
import Badge from "react-bootstrap/Badge";
import Dropdown from "react-bootstrap/Dropdown";
import { FaSearch } from "react-icons/fa";

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
    <>
      <Badge bg="primary" onClick={() => handleStatusFilter("all")}>
        All
      </Badge>
      <Badge
        bg="warning"
        onClick={() => handleStatusFilter("pending")}
        text="dark"
      >
        Pending
      </Badge>
      <Badge bg="success" onClick={() => handleStatusFilter("approved")}>
        Approved
      </Badge>
      <Badge bg="danger" onClick={() => handleStatusFilter("rejected")}>
        Rejected
      </Badge>

      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <FaSearch onClick={handleSearch} />

      <Accordion defaultActiveKey="0">
        {nameFilteredUsers.map((user, index) => (
          <Accordion.Item eventKey={`${index}`} key={index}>
            <Accordion.Header>
              {user.status === "pending" ? (
                <Badge bg="warning" text="dark">
                  Pending
                </Badge>
              ) : user.status === "approved" ? (
                <Badge bg="success">Approved</Badge>
              ) : (
                <Badge bg="danger">Rejected</Badge>
              )}
              {user.first + " " + user.last}
              {user.email}
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
            </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </>
  );
};

export default admin;
