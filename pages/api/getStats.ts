import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

interface stats {
  participants: number
  male: number
  female: number
  transgender: number
  nonbinary: number
  computer_science: number
  computer_engineering: number
  csba: number
  data_science: number
  electrical_engineering: number
  mechanical_engineering: number
  environmental_engineering: number
  other_major: number
}

export default async function addStudent(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const stats: stats = Object();
  console.log("got here");

  stats["participants"] = (await getDocs(collection(db, "users"))).size;

  stats["male"] = (
    await getDocs(query(collection(db, "users"), where("gender", "==", "Male")))
  ).size;

  stats["female"] = (
    await getDocs(
      query(collection(db, "users"), where("gender", "==", "Female"))
    )
  ).size;

  stats["transgender"] = (
    await getDocs(
      query(collection(db, "users"), where("gender", "==", "Transgender"))
    )
  ).size;

  stats["nonbinary"] = (
    await getDocs(
      query(collection(db, "users"), where("gender", "==", "Nonbinary"))
    )
  ).size;

  stats["computer_science"] = (
    await getDocs(
      query(collection(db, "users"), where("major", "==", "Computer Science"))
    )
  ).size;

  stats["computer_engineering"] = (
    await getDocs(
      query(
        collection(db, "users"),
        where("major", "==", "Computer Engineering")
      )
    )
  ).size;

  stats["csba"] = (
    await getDocs(
      query(
        collection(db, "users"),
        where("major", "==", "CS with Business Applications")
      )
    )
  ).size;

  stats["data_science"] = (
    await getDocs(
      query(collection(db, "users"), where("major", "==", "Data Science"))
    )
  ).size;

  stats["electrical_engineering"] = (
    await getDocs(
      query(
        collection(db, "users"),
        where("major", "==", "Electrical Engineering")
      )
    )
  ).size;

  stats["mechanical_engineering"] = (
    await getDocs(
      query(
        collection(db, "users"),
        where("major", "==", "Mechanical Engineering")
      )
    )
  ).size;

  stats["environmental_engineering"] = (
    await getDocs(
      query(
        collection(db, "users"),
        where("major", "==", "Environmental Engineering")
      )
    )
  ).size;

  stats["other_major"] = (
    await getDocs(query(collection(db, "users"), where("major", "==", "Other")))
  ).size;

  res.status(200).json(stats);
}
