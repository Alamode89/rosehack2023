import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../firebase";
import { setDoc, doc, updateDoc } from "firebase/firestore";

export default async function addStudent(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await updateDoc(doc(db, "users", req.body.email), {
    team: req.body.uuid,
  });

  await setDoc(doc(db, "teams", req.body.uuid), {
    name: "No Team Name",
    members: [req.body.name],
  });

  res.status(200).json({});
}
