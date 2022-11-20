import React from "react";
import { Row, Col } from "react-bootstrap";

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
        <label className="text-left font-pixel text-md text-white w-11/12">
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
          className="appearance-none w-5 h-5  checked:bg-white rounded-full !ring-0 !focus:ring-0 border-2 border-white"
        />
      </Col>
    </Row>
  );
};

export default Checkbox;
