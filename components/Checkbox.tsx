import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

interface props {
  user: any;
  setUser: Function;
  propertyOfUser: string;
  label: string;
}
const Checkbox = ({ user, setUser, propertyOfUser, label }: props) => {
  return (
    <Row className="w-10/12 flex justify-between">
      <Col className="px-0 py-1">
        <label
          htmlFor={propertyOfUser}
          className="text-left font-lexend text-md text-white w-11/12 hover:cursor-pointer"
          onClick={() => {
            setUser({ ...user, [propertyOfUser]: !user[propertyOfUser] });
          }}
        >
          <p className="p-0 m-0 text-red-500 inline">*</p>
          {label}
        </label>
        <input
          type="checkbox"
          name={propertyOfUser}
          checked={user[propertyOfUser]}
          onChange={() => {
            setUser({ ...user, [propertyOfUser]: !user[propertyOfUser] });
          }}
          className="appearance-none w-5 h-5 hover:cursor-pointer checked:bg-white rounded-full !ring-0 !focus:ring-0 border-2 border-white ease-in-out duration-300"
        />
      </Col>
    </Row>
  );
};

export default Checkbox;
