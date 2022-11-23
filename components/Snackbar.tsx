import React from "react";

interface props {
  visible: boolean;
  setVisible: Function;
  message: string;
}

const Snackbar = ({ visible, setVisible, message }: props) => {
  return (
    <div
      className={`${
        visible ? "block" : "hidden"
      } flex justify-between items-center fixed top-1/2 md:w-1/2 w-full left-1/2 -translate-x-1/2 -translate-y-1/2 md:text-xl text-md bg-[#3E086D] p-3 rounded-2xl text-white font-pixel border-white border-8 z-[99999999]`}
    >
      {message}
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
