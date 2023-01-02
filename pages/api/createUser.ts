import { NextApiRequest, NextApiResponse } from "next";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

export default async function addStudent(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let status: number;

  createUserWithEmailAndPassword(auth, req.body.email, req.body.password)
    .then(() => {
      status = 200;
    })
    .catch((error) => {
      console.log(error);
      if (error.code === "auth/email-already-in-use") {
        status = 201;
      } else {
        status = 500;
      }
    }).finally(() => {
      res.status(status).json({});
    }) ;
}
