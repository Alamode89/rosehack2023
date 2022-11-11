import React, { useState } from "react";
import Selector from "../components/Selector";
import { Row, Col } from "react-bootstrap";

const schools = [
  "University of California, Riverside",
  "Riverside City College",
  "La Sierra College",
  "California Baptist University",
  "University of Redlands",
  "California State University, San Bernardino",
  "University of California, Los Angeles",
  "University of California, San Diego",
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

const ages = [16, 17, 18, 19, 20, 21, 22];

const majors = [
  "Computer Science",
  "Computer Science with Business Applications",
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

  const handleInput = (data, value) => {
    console.log(data, value);
    setUser({ ...user, [data]: value });
    console.log(user);
  };

  return (
    <div className="flex justify-center items-center flex-col bg-gradient-to-b from-about-top to-about-bottom w-full">
      <div className="border-4 mt-5 rounded-3xl border-white drop-shadow-blue items-center flex flex-col w-2/3">
        <div className="font-pixel text-4xl p-0 text-white text-center w-1/2 m-4">
          &lt;REGISTER&gt;
        </div>
        <Row className="w-10/12 flex justify-between items-between">
          <Col md={5}>
            <label className="font-pixel text-md text-white text-center w-full drop-shadow-bluesmall">
              first name
            </label>
            <input
              type="text"
              name="first"
              value={user.first}
              onChange={handleInput}
              placeholder="First Name"
              className="text-white rounded-xl p-2 w-full bg-transparent border-4 border-white drop-shadow-bluesmall"
            />
          </Col>
          <Col md={5}>
            <label className="font-pixel text-md text-white text-center w-full drop-shadow-bluesmall">
              last name
            </label>
            <input
              type="text"
              name="last"
              value={user.last}
              onChange={handleInput}
              placeholder="Last Name"
              className="text-white rounded-xl p-2 w-full bg-transparent border-4 border-white drop-shadow-bluesmall"
            />
          </Col>
        </Row>
        <div className="my-2 w-10/12 ">
          <label className="drop-shadow-bluesmall text-left font-pixel text-md text-white w-full ml-4">
            email
          </label>
          <input
            type="text"
            name="email"
            value={user.email}
            onChange={handleInput}
            placeholder="Email Address"
            className="text-white rounded-xl p-2 w-full bg-transparent border-4 border-white drop-shadow-bluesmall"
          />
        </div>
        <div className="my-2 w-10/12 ">
          <label className="drop-shadow-bluesmall text-left font-pixel text-md text-white w-full ml-4">
            phone number
          </label>

          <input
            type="text"
            name="phone"
            value={user.phone}
            onChange={handleInput}
            placeholder="Phone Number"
            className="text-white rounded-xl p-2 w-full bg-transparent border-4 border-white drop-shadow-bluesmall"
          />
        </div>
        <div className="w-10/12 flex justify-start ">
          <label className="my-2 drop-shadow-bluesmall text-left font-pixel text-md text-white w-full ml-4">
            school
          </label>
        </div>
        <Row className="  w-10/12">
          <Col md={8} className="m-0">
            <Selector
              options={schools}
              user={user}
              field="school"
              handleInput={handleInput}
            />
          </Col>
          <Col md={4}>
            <Selector
              options={grades}
              user={user}
              field="grade"
              handleInput={handleInput}
            />
          </Col>
        </Row>

        <Selector
          options={shirts}
          user={user}
          field="shirt"
          handleInput={handleInput}
        />

        <Selector
          options={ages}
          user={user}
          field="age"
          handleInput={handleInput}
        />

        <Selector
          options={majors}
          user={user}
          field="major"
          handleInput={handleInput}
        />

        <Selector
          options={genders}
          user={user}
          field="gender"
          handleInput={handleInput}
        />
        <button className="p-3 bg-white">Submit</button>
      </div>
    </div>
  );
};

export default Register;
