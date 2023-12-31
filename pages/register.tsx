import React, { useState } from "react";
import Selector from "../components/Selector";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Snackbar from "../components/Snackbar";
import { schools } from "../components/data/schools";
import Schools from "../components/Schools";
import axios from "axios";
import Checkbox from "../components/Checkbox";
import {
  data,
  grades,
  genders,
  majors,
  ages,
  shirts,
} from "../components/data/register";
import Header from "../components/Register/Header";
import Label from "../components/Register/Label";

const Register = () => {
  const [user, setUser] = useState<any>(data);
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState("");
  const [disable, setDisable] = useState(false);

  const handleInput = (data: string, value: string) => {
    setUser({ ...user, [data]: value });
  };

  const handleField = (e: any) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSchool = (school: string) => {
    setUser({ ...user, school: school });
  };

  const handleMessage = (message: string) => {
    setMessage(message);
    setVisible(true);
    setDisable(false);
    setUser({ ...user, password: "", confirm_password: "" });
  };

  const handleSubmit = async () => {
    setDisable(true);
    for (const key of Object.keys(user)) {
      if (
        user[key] === "" ||
        user[key] === "Choose:" ||
        user[key] === undefined
      ) {
        if (key === "resume" || key === "team") {
          continue;
        }
        handleMessage("Please fill out all fields for registration!");
        return;
      }
    }

    if (user.password !== user.confirm_password) {
      handleMessage("Passwords do not match! Please re-enter password!");
      return;
    }

    if (
      !user.mlh ||
      !user.usa ||
      !user.marketing ||
      !user.in_person ||
      !user.covid
    ) {
      handleMessage(
        "Please check all the boxes before submitting, you will be required to meet the following guidelines in order to participate!"
      );
      return;
    }
    if (
      user.password.length < 8 ||
      !user.password.match(/[A-Z]/) ||
      !user.password.match(/[a-z]/) ||
      !user.password.match(/[0-9]/)
    ) {
      handleMessage(
        "Password does not meet requirements. Please use at least 1 uppercase letter, 1 lowercase letter, and 1 number"
      );
      return;
    }

    if (user.resume !== undefined) {
      if (
        !(
          user.resume.name.toLowerCase().includes(user.first.toLowerCase()) &&
          user.resume.name.toLowerCase().includes(user.last.toLowerCase())
        )
      ) {
        handleMessage(
          "Please include your first name and last name in the resume file name!"
        );
        return;
      }
    }

    if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(user.email)) {
      handleMessage("Please enter a valid email address");
      return;
    }
    if (
      !/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(user.phone)
    ) {
      handleMessage("Please enter a valid phone number");
      return;
    }

    axios
      .post("/api/register", user)
      .then((response) => {
        console.log("Registered Successfully!");
        handleMessage("Registration Successful!");
        setDisable(false);
      })
      .catch((error) => {
        console.log("Error!");
      });
  };

  return (
    <div className="flex justify-center items-center flex-col bg-gradient-to-b from-about-top to-about-bottom w-full min-h-screen">
      <div className="my-24 border-4 rounded-3xl drop-shadow-blue border-white items-center flex flex-col w-10/12">
        <Header />

        {visible && (
          <Snackbar
            visible={visible}
            setVisible={setVisible}
            message={message}
          />
        )}
        <Row className="w-10/12 flex justify-between ">
          <Col md={5} className="px-0 py-1">
            <Label field="first name" />
            <input
              type="text"
              name="first"
              value={user.first}
              onChange={handleField}
              placeholder="first name"
              maxLength={30}
              className="font-lexend text-white rounded-xl p-2 w-full bg-transparent border-4 border-white focus:outline-0 focus:drop-shadow-whitesmall focus:scale-[1.01] ease-in-out duration-300"
            />
          </Col>
          <Col md={5} className="px-0 py-1">
            <Label field="last name" />
            <input
              type="text"
              name="last"
              value={user.last}
              onChange={handleField}
              placeholder="last name"
              maxLength={30}
              className="font-lexend text-white rounded-xl p-2 w-full bg-transparent border-4 border-white focus:outline-0 focus:drop-shadow-whitesmall focus:scale-[1.01] ease-in-out duration-300"
            />
          </Col>
        </Row>
        <Row className="w-10/12 flex justify-start">
          <Col className="px-0 py-1">
            <Label field="email" />
            <input
              type="text"
              name="email"
              value={user.email}
              onChange={handleField}
              maxLength={50}
              placeholder="email address"
              className="font-lexend text-white rounded-xl p-2 w-full bg-transparent border-4 border-white focus:outline-0 focus:drop-shadow-whitesmall focus:scale-[1.01] ease-in-out duration-300"
            />
          </Col>
        </Row>
        <Row className="w-10/12 flex justify-between">
          <Col className="px-0 py-1" md={5}>
            <Label field="password" />
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleField}
              placeholder="password"
              className="font-lexend text-white rounded-xl p-2 w-full bg-transparent border-4 border-white focus:outline-0 focus:drop-shadow-whitesmall focus:scale-[1.01] ease-in-out duration-300"
            />
          </Col>
          <Col className="px-0 py-1" md={5}>
            <Label field="confirm password" />
            <input
              type="password"
              name="confirm_password"
              value={user.confirm_password}
              onChange={handleField}
              placeholder="confirm password"
              className="font-lexend text-white rounded-xl p-2 w-full bg-transparent border-4 border-white focus:outline-0 focus:drop-shadow-whitesmall focus:scale-[1.01] ease-in-out duration-300"
            />
          </Col>
        </Row>
        <Row className="w-10/12">
          <Col className="px-0 py-1">
            <Label field="phone number" />
            <input
              type="tel"
              name="phone"
              value={user.phone}
              onChange={handleField}
              maxLength={15}
              placeholder="phone number"
              className="font-lexend text-white rounded-xl p-2 w-full bg-transparent border-4 border-white focus:outline-0 focus:drop-shadow-whitesmall focus:scale-[1.01] ease-in-out duration-300"
            />
          </Col>
        </Row>
        <Row className="w-10/12">
          <Col className="px-0 py-1">
            <Label field="school" />
            <Schools
              schools={schools}
              school={user.school}
              handleSchool={handleSchool}
            />
          </Col>
        </Row>
        <Row className="w-10/12 justify-between">
          <Col md={5} className="px-0 py-1">
            <Label field="grade" />
            <Selector
              options={grades}
              user={user}
              field="grade"
              handleInput={handleInput}
            />
          </Col>
          <Col md={5} className="px-0 py-1">
            <Label field="major" />
            <Selector
              options={majors}
              user={user}
              field="major"
              handleInput={handleInput}
            />
          </Col>
        </Row>
        <Row className=" w-10/12 justify-between flex">
          <Col md={3} className="px-0 py-1">
            <Label field="shirt size" />
            <Selector
              options={shirts}
              user={user}
              field="shirt"
              handleInput={handleInput}
            />
          </Col>
          <Col md={3} className="px-0 py-1">
            <Label field="age" />
            <Selector
              options={ages}
              user={user}
              field="age"
              handleInput={handleInput}
            />
          </Col>
          <Col md={3} className="px-0 py-1">
            <Label field="gender" />
            <Selector
              options={genders}
              user={user}
              field="gender"
              handleInput={handleInput}
            />
          </Col>
        </Row>
        <Checkbox
          user={user}
          setUser={setUser}
          propertyOfUser="marketing"
          label={`I, ${
            user.first + " " + user.last
          } give the University of California, Riverside, the absolute right and permission to use my photograph/video in its promotional materials and publicity efforts. I understand that the photographs/video may be used in a publication, print ad, direct-mail piece, electronic media (e.g. video, CD-ROM, Internet/WWW, UCTV), or other form of promotion. I release the University, the photographer/videographer, their officers, employees, agents, and designees from liability for any violation of any personal or proprietary right I may have in connection with such use. I am 18 years of age or older. By checking the following box, I agree to the above terms.
          `}
        />
        <hr className="border-0 h-1 w-10/12 opacity-100 m-0 p-0 bg-gradient-to-r from-white" />
        <Checkbox
          user={user}
          setUser={setUser}
          propertyOfUser="mlh"
          label="Do you agree to the terms listed by the MLH code of conduct? Failure to comply to these terms may result in disqualification from the hackathon. If you have any questions, please contact MLH at hi@mlh.io or Rosehack at rosehackucr@gmail.com"
        />
        <hr className="border-0 h-1 w-10/12 opacity-100 m-0 p-0 bg-gradient-to-r from-white" />
        <Checkbox
          user={user}
          setUser={setUser}
          propertyOfUser="usa"
          label="Will you be residing in the United States during the duration of the hackathon? The hackathon is hosted in the United States of America only."
        />
        <hr className="border-0 h-1 w-10/12 opacity-100 m-0 p-0 bg-gradient-to-r from-white" />
        <Checkbox
          user={user}
          setUser={setUser}
          propertyOfUser="in_person"
          label="Will you be attending Rosehack 2023 in person? Note this event is only being hosted in-person. There will be no online or hybrid reccomendations unfortunately."
        />
        <hr className="border-0 h-1 w-10/12 opacity-100 m-0 p-0 bg-gradient-to-r from-white" />
        <Checkbox
          user={user}
          setUser={setUser}
          propertyOfUser="covid"
          label="Will you be able to provide COVID vaccination status if asked? Rosehack board reserves the right to ask for COVID vaccination status during checkin."
        />
        <hr className="border-0 h-1 w-10/12 opacity-100 m-0 p-0 bg-gradient-to-r from-white" />
        <Row className="w-10/12 flex justify-between">
          <Col className="px-0 py-1">
            <label
              htmlFor="vegetarian"
              className="text-left font-lexend text-md text-white w-11/12 hover:cursor-pointer"
            >
              <p className="p-0 m-0 text-red-500 inline">*</p>
              Do you have any of the following dietary restrictions? (leave
              empty if none)
            </label>
            <label
              htmlFor="vegetarian"
              className="text-left font-lexend text-md text-white w-11/12 hover:cursor-pointer"
              onClick={() => {
                setUser({ ...user, vegetarian: !user["vegetarian"] });
              }}
            >
              Vegetarian?
            </label>
            <input
              type="checkbox"
              name="vegetarian"
              checked={user.vegetarian}
              onChange={() => {
                setUser({ ...user, vegetarian: !user["vegetarian"] });
              }}
              className="appearance-none w-5 h-5 hover:cursor-pointer checked:bg-white rounded-full !ring-0 !focus:ring-0 border-2 border-white ease-in-out duration-300"
            />

            <label
              htmlFor="vegan"
              className="text-left font-lexend text-md text-white w-11/12 hover:cursor-pointer"
              onClick={() => {
                setUser({ ...user, vegan: !user["vegan"] });
              }}
            >
              Vegan?
            </label>
            <input
              type="checkbox"
              name="vegan"
              checked={user.vegan}
              onChange={() => {
                setUser({ ...user, vegan: !user["vegan"] });
              }}
              className="appearance-none w-5 h-5 hover:cursor-pointer checked:bg-white rounded-full !ring-0 !focus:ring-0 border-2 border-white ease-in-out duration-300"
            />

            <label
              htmlFor="kosher"
              className="text-left font-lexend text-md text-white w-11/12 hover:cursor-pointer"
              onClick={() => {
                setUser({ ...user, kosher: !user["kosher"] });
              }}
            >
              Kosher?
            </label>
            <input
              type="checkbox"
              name="kosher"
              checked={user.kosher}
              onChange={() => {
                setUser({ ...user, kosher: !user["kosher"] });
              }}
              className="appearance-none w-5 h-5 hover:cursor-pointer checked:bg-white rounded-full !ring-0 !focus:ring-0 border-2 border-white ease-in-out duration-300"
            />

            <label
              htmlFor="hindu"
              className="text-left font-lexend text-md text-white w-11/12 hover:cursor-pointer"
              onClick={() => {
                setUser({ ...user, hindu: !user["hindu"] });
              }}
            >
              Hindu?
            </label>
            <input
              type="checkbox"
              name="hindu"
              checked={user.hindu}
              onChange={() => {
                setUser({ ...user, hindu: !user["hindu"] });
              }}
              className="appearance-none w-5 h-5 hover:cursor-pointer checked:bg-white rounded-full !ring-0 !focus:ring-0 border-2 border-white ease-in-out duration-300"
            />
          </Col>
        </Row>
        <button
          onClick={handleSubmit}
          disabled={disable}
          className="px-5 py-2 hover:scale-105 rounded-xl m-5 bg-transparent border-4 border-white  font-pixel text-md md:text-xl lg:text-2xl text-white text-center"
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default Register;
