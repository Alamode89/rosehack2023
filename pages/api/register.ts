import { NextApiRequest, NextApiResponse } from "next";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db, auth } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";
import { getDoc } from "firebase/firestore";

export default async function addStudent(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const docSnap = await getDoc(doc(db, "users", req.body.email));
  if (docSnap.exists()) {
    res.status(400).json({});
  } else {
    createUserWithEmailAndPassword(auth, req.body.email, req.body.password)
      .then(() => {
        delete req.body.password;
        delete req.body.confirm_password;
        const register = async () => {
          await setDoc(doc(db, "users", req.body.email), req.body);
        };
        register();
        res.status(200).json({});
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        res.status(500).json(errorCode + " " + errorMessage);
      });
  }
}
