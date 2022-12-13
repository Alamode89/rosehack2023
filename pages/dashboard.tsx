import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

const dashboard = () => {
  const router = useRouter();
  const [user] = useAuthState(auth);

  useEffect(() => {
    onAuthStateChanged(auth, (currentState) => {
      if (currentState === null) router.push("/user");
    });
  }, []);
  const logOut = async () => {
    signOut(auth)
      .then(() => {
        console.log(user);
        router.push("/user");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLogOut = async () => {
    const response = await logOut();
    console.log(response);
    return;
  };
  return (
    <div className="flex justify-center items-center flex-col bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400 w-full min-h-screen">
      current User: {user && user.email}
      <div>team</div>
      <div>data</div>
      <button
        onClick={() => handleLogOut()}
        className="hover:scale-105 rounded-xl m-5 bg-gradient-to-r from-purple-400 to-pink-600 font-pixel text-md md:text-xl lg:text-2xl text-white text-center px-3 py-2"
      >
        LOGOUT
      </button>
    </div>
  );
};

export default dashboard;
