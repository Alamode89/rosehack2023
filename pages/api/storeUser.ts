import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";

export default async function addStudent(
  req: NextApiRequest,
  res: NextApiResponse
) {
    try {
        await setDoc(doc(db, "users", req.body.email), req.body);
        res.status(200).json({})
    }
    catch (error){
        res.status(500).json({})
    }
}
