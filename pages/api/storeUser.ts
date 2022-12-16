import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";


export default async function addStudent(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    req.body.team = uuidv4()
    await setDoc(doc(db, "users", req.body.email), req.body);
    await setDoc(doc(db, "teams", req.body.team), {
      name: "Untitled Team",
      members: [req.body.first + " " + req.body.first]

    });
    res.status(200).json({});
  } catch (error) {
    res.status(500).json({});
  }
}
