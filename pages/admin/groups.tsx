import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { useRouter } from "next/router";

const groups = () => {
  const [user] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    console.log("GROUPS", user);
    if (user === null || user === undefined) {
      router.push("/admin/login");
    }
  }, []);

  return (
    <div className="font-pixel">
      RELAXXXXXXX....... THE WEBSITE ISNT DONE YET
    </div>
  );
};

export default groups;
