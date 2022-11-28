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
    <div>
      <button onClick={login}>Login</button>
    </div>
  );
};

export default login;
