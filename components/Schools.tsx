/* eslint-disable */
import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";

const CustomMenu = React.forwardRef(
  ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
    const [value, setValue] = useState("");

    return (
      <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
        <Form.Control
          autoFocus
          className="mx-3 my-2 w-auto"
          placeholder="Type to filter..."
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <ul className="list-unstyled h-[20vh] overflow-y-scroll">
          {React.Children.toArray(children).filter(
            (child) =>
              !value || child.props.children.toLowerCase().startsWith(value)
          )}
        </ul>
      </div>
    );
  }
);

interface props {
  schools: Array<string>;
  school: string;
  handleSchool: Function;
}

const Schools = ({ schools, school, handleSchool }: props) => {
  return (
    <Dropdown>
      <Dropdown.Toggle id="dropdown-custom-components">
        {school}
      </Dropdown.Toggle>
      <Dropdown.Menu as={CustomMenu}>
        {schools.map((school, index) => (
          <Dropdown.Item
            key={index}
            eventKey={index}
            onClick={() => handleSchool(school)}
          >
            {school}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Schools;
