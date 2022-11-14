import React from "react";

interface props {
  successful: boolean;
  visible: boolean;
  setVisible: Function;
  //   handleVisible: Function;
}

const Snackbar = ({ successful, visible, setVisible }: props) => {
  return (
    <div
      className={`${
        visible ? "block" : "hidden"
      } flex justify-between items-center fixed top-1/2 w-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl bg-[#3E086D] p-3 rounded-2xl text-white font-pixel border-white border-8 z-[99999999]`}
    >
      {successful && "Thank you for registering!"}
      {!successful && "Please fill out all forms!"}
      <button
        onClick={() => setVisible(false)}
        className="font-pixel p-0 m-0 hover:text-red-500"
      >
        X
      </button>
    </div>
  );
};

export default Snackbar;
