import React, { useState } from "react";
import Selector from "../components/Selector";
import { Row, Col } from "react-bootstrap";
import Snackbar from "../components/Snackbar";
import { schools } from "../components/data/schools";
import Schools from "../components/Schools";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa";
import { MdOutlineFileUpload } from "react-icons/md";
import axios from "axios";
import { storage } from "../firebase";
import { ref, uploadBytes } from "firebase/storage";
import Checkbox from "../components/Checkbox";
import {
  data,
  grades,
  genders,
  majors,
  ages,
  shirts,
} from "../components/data/register";

const Register = () => {
  const [user, setUser] = useState<any>(data);
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState("");
  const [file, setFile] = useState("");

  const handleInput = (data: string, value: string) => {
    console.log(data, value);
    setUser({ ...user, [data]: value });
    console.log(user);
  };

  const handleField = (e: any) => {
    console.log(e.target.name, e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSchool = (school: string) => {
    setUser({ ...user, school: school });
  };

  const handleSubmit = () => {
    for (const key of Object.keys(user)) {
      if (user[key] === "" || user[key] === "Choose:") {
        setMessage("Please fill out all fields for registration!");
        setVisible(true);
        return;
      }
    }

    if (user.password !== user.confirm_password) {
      setMessage("Passwords do not match! Please re-enter password!");
      setVisible(true);
      return;
    }

    uploadBytes(ref(storage, `resumes/${user.resume.name}`), user.resume).then(
      (snapshot) => {
        console.log(snapshot);
        setFile(snapshot.metadata.fullPath);
      }
    );

    setUser({ ...user, resume: file });

    axios
      .post("/api/register", user)
      .then((response) => {
        if (response.status === 200) {
          setMessage(
            "Registration Successful! Thank you for joining Rosehack 2023!"
          );
          setVisible(true);
          return;
        }
      })
      .catch((error) => {
        if (error.response.status === 400) {
          setMessage(
            "An account with this email already exists! Please use a different email!"
          );
          setVisible(true);
          return;
        } else if (error.response.status === 500) {
          console.log(error);
          setMessage(
            `Internal Server Error: please contact rosehackucr@gmail.com`
          );
          setVisible(true);
          return;
        }
      });
  };

  return (
    <div className="flex justify-center items-center flex-col bg-gradient-to-b from-about-top to-about-bottom w-full">
      <div className="my-24 border-4 rounded-3xl drop-shadow-blue border-white items-center flex flex-col w-10/12">
        <div className="flex justify-center items-center  w-full relative">
          <div className="absolute top-1/2 left-3 -translate-y-1/2">
            <Link href="/">
              <FaChevronLeft className="text-white text-5xl hover:drop-shadow-white hover:scale-[1.2] ease-in-out duration-300 hover:cursor-pointer" />
            </Link>
          </div>
          <div className="font-pixel text-md md:text-xl lg:text-4xl p-0 text-white text-center w-full m-4">
            REGISTER
          </div>
        </div>

        {visible && (
          <Snackbar
            visible={visible}
            setVisible={setVisible}
            message={message}
          />
        )}
        <Row className="w-10/12 flex justify-between ">
          <Col md={5} className="px-0 py-1">
            <label className="text-left font-pixel text-md text-white w-full ml-4">
              <p className="p-0 m-0 text-red-500 inline">*</p>first name
            </label>
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
            <label className="text-left font-pixel text-md text-white w-full ml-4">
              <p className="p-0 m-0 text-red-500 inline">*</p>last name
            </label>
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
            <label className="text-left font-pixel text-md text-white w-full ml-4">
              <p className="p-0 m-0 text-red-500 inline">*</p>email
            </label>
            <input
              type="text"
              name="email"
              value={user.email}
              onChange={handleField}
              maxLength={50}
              placeholder="Email Address"
              className="font-lexend text-white rounded-xl p-2 w-full bg-transparent border-4 border-white focus:outline-0 focus:drop-shadow-whitesmall focus:scale-[1.01] ease-in-out duration-300"
            />
          </Col>
        </Row>
        <Row className="w-10/12 flex justify-between">
          <Col className="px-0 py-1" md={5}>
            <label className="text-left font-pixel text-md text-white w-full ml-4">
              <p className="p-0 m-0 text-red-500 inline">*</p>password
            </label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleField}
              placeholder="Password"
              className="font-lexend text-white rounded-xl p-2 w-full bg-transparent border-4 border-white focus:outline-0 focus:drop-shadow-whitesmall focus:scale-[1.01] ease-in-out duration-300"
            />
          </Col>
          <Col className="px-0 py-1" md={5}>
            <label className="text-left font-pixel text-md text-white w-full ml-4">
              <p className="p-0 m-0 text-red-500 inline">*</p>confirm password
            </label>
            <input
              type="password"
              name="confirm_password"
              value={user.confirm_password}
              onChange={handleField}
              placeholder="Password"
              className="font-lexend text-white rounded-xl p-2 w-full bg-transparent border-4 border-white focus:outline-0 focus:drop-shadow-whitesmall focus:scale-[1.01] ease-in-out duration-300"
            />
          </Col>
        </Row>
        <Row className="w-10/12">
          <Col className="px-0 py-1">
            <label className="text-left font-pixel text-md text-white w-full ml-4">
              <p className="p-0 m-0 text-red-500 inline">*</p>phone number
            </label>
            <input
              type="tel"
              name="phone"
              value={user.phone}
              onChange={handleField}
              maxLength={15}
              placeholder="Phone Number"
              className="font-lexend text-white rounded-xl p-2 w-full bg-transparent border-4 border-white focus:outline-0 focus:drop-shadow-whitesmall focus:scale-[1.01] ease-in-out duration-300"
            />
          </Col>
        </Row>
        <Row className="w-10/12">
          <Col className="px-0 py-1">
            <label className="text-left font-pixel text-md text-white w-full ml-4">
              <p className="p-0 m-0 text-red-500 inline">*</p>school
            </label>
            <Schools
              schools={schools}
              school={user.school}
              handleSchool={handleSchool}
            />
          </Col>
        </Row>
        <Row className="w-10/12 justify-between">
          <Col md={5} className="px-0 py-1">
            <label className=" text-left font-pixel text-md text-white w-full ml-4">
              <p className="p-0 m-0 text-red-500 inline">*</p> grade
            </label>
            <Selector
              options={grades}
              user={user}
              field="grade"
              handleInput={handleInput}
            />
          </Col>
          <Col md={5} className="px-0 py-1">
            <label className=" text-left font-pixel text-md text-white w-full ml-4">
              <p className="p-0 m-0 text-red-500 inline">*</p>major
            </label>
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
            <label className=" text-left font-pixel text-md text-white w-full ml-4">
              <p className="p-0 m-0 text-red-500 inline">*</p>shirt size
            </label>
            <Selector
              options={shirts}
              user={user}
              field="shirt"
              handleInput={handleInput}
            />
          </Col>
          <Col md={3} className="px-0 py-1">
            <label className=" text-left font-pixel text-md text-white w-full ml-4">
              <p className="p-0 m-0 text-red-500 inline">*</p>age
            </label>
            <Selector
              options={ages}
              user={user}
              field="age"
              handleInput={handleInput}
            />
          </Col>
          <Col md={3} className="px-0 py-1">
            <label className=" text-left font-pixel text-md text-white w-full ml-4">
              <p className="p-0 m-0 text-red-500 inline">*</p>gender
            </label>
            <Selector
              options={genders}
              user={user}
              field="gender"
              handleInput={handleInput}
            />
          </Col>
        </Row>
        <Row className="w-10/12">
          <Col className="px-0 py-1">
            <label
              htmlFor="resume"
              className="text-left font-pixel text-md text-white w-full ml-4"
            >
              resume (optional)
            </label>
            <input
              type="file"
              name="resume"
              id="resume"
              value=""
              onChange={(e: any) =>
                setUser({ ...user, resume: e.target.files[0] })
              }
              className="hidden"
            />
            <label
              htmlFor="resume"
              className="!font-lexend p-2 text-white w-full bg-transparent !border-4 border-solid border-white !rounded-xl focus:border-white active:border-white"
            >
              <div className="flex justify-between items-center">
                <p className="hover:cursor-pointer p-0 m-0">
                  Selected File: {user.resume?.name || "No File Selected"}
                </p>
                <MdOutlineFileUpload className="text-3xl m-0 p-0 hover:cursor-pointer" />
              </div>
            </label>
          </Col>
        </Row>
        <Checkbox
          user={user}
          setUser={setUser}
          propertyOfUser="marketing"
          label="Do you consent to videos and photos being taken of you? These photos will be used for on our official Rosehack Instagram and other social media. If you have any concerns, please contact us at rosehackucr@gmail.com"
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
        <Checkbox
          user={user}
          setUser={setUser}
          propertyOfUser="dietary"
          label="Do you eat meat?"
        />
        <button
          onClick={handleSubmit}
          className="px-5 py-2 hover:scale-105 rounded-xl m-5 bg-transparent border-4 border-white  font-pixel text-md md:text-xl lg:text-2xl text-white text-center"
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default Register;
