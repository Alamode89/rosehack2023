import React, { useState } from "react";

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

const countries = ["United States"];

const data = {
  first: "",
  last: "",
  age: 0,
  phone: "",
  email: "",
  school: "California Baptist University",
  grade: "",
  country: "",
  dietary: [],
  underrepresented: false,
  gender: "",
  shirt: "",
  major: "",
};

const Register = () => {
  const [user, setUser] = useState(data);

  const handleInput = (e: any) => {
    console.log(e.target.name, e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  return (
    <div className="flex justify-center items-center flex-col bg-gradient-to-b from-register-top to-register-bottom">
      <div className="font-pixel text-4xl p-0 m-0 text-white text-center">
        Register for Rosehack 2023
      </div>
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <select name="school" value={user.school} onChange={handleInput}>
        {schools.map((school, index) => (
          <option key={index} value={school}>
            {school}
          </option>
        ))}
      </select>
      <select name="grade">
        {grades.map((grade, index) => (
          <option key={index} value={grade}>
            {grade}
          </option>
        ))}
      </select>
      <select name="shirt">
        {shirts.map((shirt, index) => (
          <option key={index} value={shirt}>
            {shirt}
          </option>
        ))}
      </select>

      <select name="age">
        {ages.map((age, index) => (
          <option key={index} value={age}>
            {age}
          </option>
        ))}
      </select>
      <select name="major">
        {majors.map((major, index) => (
          <option key={index} value={major}>
            {major}
          </option>
        ))}
      </select>
      <select name="gender">
        {genders.map((gender, index) => (
          <option key={index} value={gender}>
            {gender}
          </option>
        ))}
      </select>
      <select name="country">
        {countries.map((country, index) => (
          <option key={index} value={country}>
            {country}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Register;
