import React from "react";

interface props {
  name: String;
  position: String;
  shadow: String;
}

const Profile = ({ name, position, shadow }: props) => {
  return (
    <div className="flex justify-center items-center flex-col p-2">
      <div className={`${shadow} shadow-[20px_-16px_0px_0px] rounded-[2rem]`}>
        <img
          src="divyank.jpg"
          className="border-white border-8 rounded-[2rem]"
        />
      </div>
      <p className="inline p-0 m-0 mt-3 font-poppins text-3xl text-black font-semibold">
        {name}
      </p>
      <p className="inline p-0 m-0 font-poppins text-3xl text-black font-semibold">
        {position}
      </p>
    </div>
  );
};

export default Profile;
