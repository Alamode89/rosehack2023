import React from "react";
import { auth, db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useRouter } from "next/router";

const login = () => {
  const router = useRouter();

  const login = () => {
    signInWithPopup(auth, new GoogleAuthProvider())
      .then(async (result: any) => {
        // This gives you a Google Access Token. You can use it to access Google APIs.
        console.log(result.user.email);

        const docSnap = await getDoc(doc(db, "admin", result.user.email));

        if (docSnap.exists()) {
          router.push("/admin");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className=" bg-gradient-to-br from-landing-bottom to-landing-bottompink w-full h-screen flex justify-center items-center">
      <button
        onClick={login}
        className="animate-bounce shadow-[0_0_16px_0]  no-underline shadow-[#15DBFF] px-4 drop-shadow-blue p-2 font-pixel text-white border-[6px] rounded-2xl text-sm md:text-2xl"
      >
        Login
      </button>
    </div>
  );
};

export default login;
