import React from "react";

interface props {
  field: string;
}

const Label = ({ field }: props) => {
  return (
    <label className="text-left font-pixel text-md text-white w-full ml-4">
      <p className="p-0 m-0 text-red-500 inline">*</p>
      {field}
    </label>
  );
};

export default Label;
