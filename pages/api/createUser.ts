import { NextApiRequest, NextApiResponse } from "next";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

export default async function addStudent(
  req: NextApiRequest,
  res: NextApiResponse
) {
    createUserWithEmailAndPassword(auth, req.body.email, req.body.password)
      .then(() => {
        res.status(200).json({});
      })
      .catch((error) => {
        console.log(error)
        if(error.code  === 'auth/email-already-in-use'){
            res.status(201).json({})
        } else{
            res.status(500).json({});
        }
      });
}
