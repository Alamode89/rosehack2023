import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

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
        className="!font-lexend text-white w-full bg-transparent !border-4 border-solid border-white !rounded-xl drop-shadow-bluesmall focus:border-white active:border-white"
      >
        {user[field]}
      </Dropdown.Toggle>

      <Dropdown.Menu className="w-full font-lexend">
        {options.map((option, index) => (
          <Dropdown.Item
            className="font-lexend text-black"
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
