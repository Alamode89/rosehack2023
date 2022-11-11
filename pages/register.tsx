import React, { useState } from "react";
import Selector from "../components/Selector";

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
    <div className="flex justify-center items-center flex-col bg-gradient-to-b from-register-top to-register-bottom">
      <div className="font-pixel text-4xl p-0 m-0 text-white text-center">
        Register for Rosehack 2023
      </div>
      <input
        type="text"
        name="first"
        value={user.first}
        onChange={handleInput}
        placeholder="First Name"
        className="rounded-xl p-3"
      />
      <input
        type="text"
        name="last"
        value={user.last}
        onChange={handleInput}
        placeholder="Last Name"
        className="rounded-xl p-3"
      />
      <input
        type="text"
        name="email"
        value={user.email}
        onChange={handleInput}
        placeholder="Email Address"
        className="rounded-xl p-3"
      />
      <input
        type="text"
        name="phone"
        value={user.phone}
        onChange={handleInput}
        placeholder="Phone Number"
        className="rounded-xl p-3"
      />

      <Selector
        options={schools}
        user={user}
        field="school"
        handleInput={handleInput}
      />

      <Selector
        options={grades}
        user={user}
        field="grade"
        handleInput={handleInput}
      />

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
  );
};

export default Register;
