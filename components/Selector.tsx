import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { FaChevronDown } from "react-icons/fa";

interface props {
  options: Array<string>;
  user: any;
  field: string;
  handleInput: Function;
}

const Selector = ({ options, user, field, handleInput }: props) => {
  return (
    <Dropdown className="w-full">
      <Dropdown.Toggle
        variant=""
        id=""
        className="!font-lexend !flex justify-center items-center text-white after:!hidden w-full bg-transparent !border-4 border-solid border-white !rounded-xl focus:border-white active:border-white"
      >
        {user[field]}
        <FaChevronDown className="mx-2" />
      </Dropdown.Toggle>

      <Dropdown.Menu className="w-full font-lexend active:bg-white">
        {options.map((option, index) => (
          <Dropdown.Item
            className="font-lexend text-black hover:!bg-register-top hover:!text-white"
            key={index}
            onClick={() => handleInput(field, option)}
          >
            {option}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Selector;
