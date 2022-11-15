import React, { useState } from "react";
import Selector from "../components/Selector";
import { Row, Col } from "react-bootstrap";
import Snackbar from "../components/Snackbar";
import { schools } from "../components/data/schools";
import Schools from "../components/Schools";
import Link from "next/Link";
import { FaChevronLeft } from "react-icons/fa";

const grades = [
  "Less than Secondary / High School",
  "Secondary / High School",
  "Undergraduate University (2 year)",
  "Undergraduate University (3+ year)",
  "Graduate University (Masters, Doctoral, etc)",
  "Code School / Bootcamp",
  "Other Vocational / Trade Program / Apprenticeship",
  "Post Doctorate",
  "Other",
  "I’m not currently a student",
  "Prefer not to answer",
];

const shirts = [
  "Xtra Small",
  "Small",
  "Medium",
  "Large",
  "Xtra Large",
  "Xtra Xtra Large",
];

const ages = ["<16", "16", "17", "18", "19", "20", "21", "22", "23+"];

const majors = [
  "Computer Science",
  "CS with Business Applications",
  "Computer Engineering",
  "Data Science",
  "Electrical Engineering",
  "Mechanical Engineering",
  "Environmental Engineering",
  "Other",
];

const genders = ["Female", "Male", "Transgender", "Nonbinary"];

const data = {
  first: "",
  last: "",
  age: "Choose one of the following:",
  phone: "",
  email: "",
  school: "Choose one of the following:",
  grade: "Choose one of the following:",
  country: "",
  dietary: [],
  underrepresented: false,
  gender: "Choose one of the following:",
  shirt: "Choose one of the following:",
  major: "Choose one of the following:",
};

const Register = () => {
  const [user, setUser] = useState<any>(data);
  const [visible, setVisible] = useState(false);
  const [successful, setSuccessful] = useState(false);

  const handleInput = (data: string, value: string) => {
    console.log(data, value);
    setUser({ ...user, [data]: value });
    console.log(user);
  };

  const handleField = (e: any) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSchool = (school: string) => {
    setUser({ ...user, school: school });
  };

  const handleSubmit = () => {
    for (const key of Object.keys(user)) {
      if (user[key].trim() === "") {
        setVisible(true);
        setSuccessful(false);
        return;
      }
    }
    setVisible(true);
    setSuccessful(true);
  };

  return (
    <div className="flex justify-center items-center flex-col bg-gradient-to-b from-about-top to-about-bottom w-full">
      <div className="my-24 border-4 rounded-3xl border-white items-center flex flex-col w-10/12">
        <div className="flex justify-center items-center  w-full relative">
          <div className="absolute top-1/2 left-3 -translate-y-1/2">
            <Link href="/">
              <FaChevronLeft className="text-white text-5xl hover:!text-about-right hover:cursor-pointer" />
            </Link>
          </div>
          <div className="font-pixel text-md md:text-xl lg:text-4xl p-0 text-white text-center w-full m-4">
            REGISTER
          </div>
        </div>

        {visible && (
          <Snackbar
            successful={successful}
            visible={visible}
            setVisible={setVisible}
          />
        )}
        <Row className="w-10/12 flex justify-between ">
          <Col md={5} className="px-0 py-1">
            <label className="text-left font-pixel text-md text-white w-full ml-4">
              first name
            </label>
            <input
              type="text"
              name="first"
              value={user.first}
              onChange={handleField}
              placeholder="First Name"
              className="font-lexend text-white rounded-xl p-2 w-full bg-transparent border-4 border-white"
            />
          </Col>
          <Col md={5} className="px-0 py-1">
            <label className="text-left font-pixel text-md text-white w-full ml-4">
              last name
            </label>
            <input
              type="text"
              name="last"
              value={user.last}
              onChange={handleField}
              placeholder="Last Name"
              className="font-lexend text-white rounded-xl p-2 w-full bg-transparent border-4 border-white"
            />
          </Col>
        </Row>
        <Row className="w-10/12 flex justify-start">
          <Col className="px-0 py-1">
            <label className="text-left font-pixel text-md text-white w-full ml-4">
              email
            </label>
            <input
              type="text"
              name="email"
              value={user.email}
              onChange={handleField}
              placeholder="Email Address"
              className="font-lexend text-white rounded-xl p-2 w-full bg-transparent border-4 border-white"
            />
          </Col>
        </Row>
        <Row className="w-10/12 ">
          <Col className="px-0 py-1">
            <label className="text-left font-pixel text-md text-white w-full ml-4">
              phone number
            </label>

            <input
              type="text"
              name="phone"
              value={user.phone}
              onChange={handleField}
              placeholder="Phone Number"
              className="font-lexend text-white rounded-xl p-2 w-full bg-transparent border-4 border-white"
            />
          </Col>
        </Row>
        <Row className="w-10/12">
          <Col className="px-0 py-1">
            <label className="text-left font-pixel text-md text-white w-full ml-4">
              school
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
              grade
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
              major
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
              shirt size
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
              age
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
              gender
            </label>
            <Selector
              options={genders}
              user={user}
              field="gender"
              handleInput={handleInput}
            />
          </Col>
        </Row>
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
