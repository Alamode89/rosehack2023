import React, { useState } from "react";
import Selector from "../components/Selector";
import { Row, Col } from "react-bootstrap";

const schools = [
  "UC Riverside",
  "Riverside City College",
  "La Sierra College",
  "California Baptist University",
  "University of Redlands",
  "CSU San Bernardino",
  "UC Los Angeles",
  "UC San Diego",
];

const grades = [
  "College Freshmen",
  "College Sophomore",
  "College Junior",
  "College Senior",
];

const shirts = [
  "Xtra Small",
  "Small",
  "Medium",
  "Large",
  "Xtra Large",
  "Xtra Xtra Large",
];

const ages = ["16", "17", "18", "19", "20", "21", "22"];

const majors = [
  "Computer Science",
  "CS with Business Applications",
  "Computer Engineering",
  "Data Science",
];

const genders = ["Female", "Male", "Transgender", "Nonbinary"];

const data = {
  first: "",
  last: "",
  age: 18,
  phone: "",
  email: "",
  school: "California Baptist University",
  grade: "College Freshmen",
  country: "",
  dietary: [],
  underrepresented: false,
  gender: "Female",
  shirt: "Medium",
  major: "Computer Science",
};

const Register = () => {
  const [user, setUser] = useState(data);

  const handleInput = (data: string, value: string) => {
    console.log(data, value);
    setUser({ ...user, [data]: value });
    console.log(user);
  };

  const handleField = (e: any) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex justify-center items-center flex-col bg-gradient-to-b from-about-top to-about-bottom w-full">
      <div className="border-4 mt-5 rounded-3xl border-white drop-shadow-blue items-center flex flex-col w-2/3">
        <div className="font-pixel text-md md:text-xl lg:text-4xl p-0 text-white text-center w-1/2 m-4">
          &lt;REGISTER&gt;
        </div>
        <Row className="w-10/12 flex justify-between ">
          <Col md={5} className="px-0 py-1">
            <label className="drop-shadow-bluesmall text-left font-pixel text-md text-white w-full ml-4">
              first name
            </label>
            <input
              type="text"
              name="first"
              value={user.first}
              onChange={handleField}
              placeholder="First Name"
              className="text-white rounded-xl p-2 w-full bg-transparent border-4 border-white drop-shadow-bluesmall"
            />
          </Col>
          <Col md={5} className="px-0 py-1">
            <label className="drop-shadow-bluesmall text-left font-pixel text-md text-white w-full ml-4">
              last name
            </label>
            <input
              type="text"
              name="last"
              value={user.last}
              onChange={handleField}
              placeholder="Last Name"
              className="text-white rounded-xl p-2 w-full bg-transparent border-4 border-white drop-shadow-bluesmall"
            />
          </Col>
        </Row>
        <Row className="w-10/12 flex justify-start">
          <Col className="px-0 py-1">
            <label className="drop-shadow-bluesmall text-left font-pixel text-md text-white w-full ml-4">
              email
            </label>
            <input
              type="text"
              name="email"
              value={user.email}
              onChange={handleField}
              placeholder="Email Address"
              className="text-white rounded-xl p-2 w-full bg-transparent border-4 border-white drop-shadow-bluesmall"
            />
          </Col>
        </Row>
        <Row className="w-10/12 ">
          <Col className="px-0 py-1">
            <label className="drop-shadow-bluesmall text-left font-pixel text-md text-white w-full ml-4">
              phone number
            </label>

            <input
              type="text"
              name="phone"
              value={user.phone}
              onChange={handleField}
              placeholder="Phone Number"
              className="text-white rounded-xl p-2 w-full bg-transparent border-4 border-white drop-shadow-bluesmall"
            />
          </Col>
        </Row>
        <Row className="w-10/12">
          <Col className="px-0 py-1">
            <label className="drop-shadow-bluesmall text-left font-pixel text-md text-white w-full ml-4">
              school
            </label>
            <Selector
              options={schools}
              user={user}
              field="school"
              handleInput={handleInput}
            />
          </Col>
        </Row>
        <Row className="w-10/12 justify-between">
          <Col md={5} className="px-0 py-1">
            <label className="drop-shadow-bluesmall text-left font-pixel text-md text-white w-full ml-4">
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
            <label className="drop-shadow-bluesmall text-left font-pixel text-md text-white w-full ml-4">
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
            <label className="drop-shadow-bluesmall text-left font-pixel text-md text-white w-full ml-4">
              size
            </label>
            <Selector
              options={shirts}
              user={user}
              field="shirt"
              handleInput={handleInput}
            />
          </Col>
          <Col md={3} className="px-0 py-1">
            <label className="drop-shadow-bluesmall text-left font-pixel text-md text-white w-full ml-4">
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
            <label className="drop-shadow-bluesmall text-left font-pixel text-md text-white w-full ml-4">
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

        <button className="px-5 py-2 hover:scale-105 rounded-xl m-5 bg-transparent border-4 border-white drop-shadow-bluesmall font-pixel text-md md:text-xl lg:text-2xl text-white text-center">
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default Register;
