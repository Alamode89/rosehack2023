/* eslint-disable */
import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";

interface props {
  children?: any;
  style?: any;
  className?: any;
  "aria-labelledby"?: any;
}

interface props_toggle {
  children: any;
  onClick: any;
}

const CustomToggle = React.forwardRef(
  ({ children, onClick }: props_toggle, ref: any) => (
    <a
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
      &#x25bc;
    </a>
  )
);

const CustomMenu = React.forwardRef(
  (
    { children, style, className, "aria-labelledby": labeledBy }: props,
    ref: any
  ) => {
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
            (child: any) =>
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
      <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
        {school}
      </Dropdown.Toggle>
      <Dropdown.Menu as={CustomMenu as any}>
        {schools.map((school, index) => (
          <Dropdown.Item
            key={index}
            eventKey={index}
            onClick={() => handleSchool(school)}
          >
            {school}
          </Dropdown.Item>
        ))}
        <Dropdown.Item>Hello</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Schools;
