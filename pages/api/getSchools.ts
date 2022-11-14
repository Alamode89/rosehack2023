import { NextApiRequest, NextApiResponse } from "next";
import { schools } from "../../components/data/schools";

export default async function addStudent(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(schools[0]);
  res.json(200);
}
