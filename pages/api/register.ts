import { NextApiRequest, NextApiResponse } from "next";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { db } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

export default async function Register(
  req: NextApiRequest,
  res: NextApiResponse
) {
  createUserWithEmailAndPassword(auth, req.body.email, req.body.password)
    .then(() => {
      console.log("Created User Successfully!");
    })
    .catch((error) => {
      console.log("Error Creating Users!", error);
      res.status(500).json({});
    });

  delete req.body["password"];
  delete req.body["confirm_password"];
  req.body.team = uuidv4();

  setDoc(doc(db, "users", req.body.email), req.body).catch(() => {
    res.status(500).json({});
  });
  setDoc(doc(db, "teams", req.body.team), {
    name: "Untitled Team",
    members: [req.body.first + " " + req.body.first],
  }).catch(() => {
    res.status(500).json({});
  });

  const sendgridMail = require("@sendgrid/mail");
  const API_KEY = process.env.NEXT_PUBLIC_SENDGRID_API_KEY;

  sendgridMail.setApiKey(API_KEY);

  const message = {
    to: req.body.email,
    from: {
      name: "Rose hack",
      email: "rosehackucr@gmail.com",
    },
    subject: `Rose hack: Application Confirmation`,
    html: `
    <div style="background:rgba(0, 0, 0, 0);">
        <img style="object-fit:contain; width:100%;" src="https://firebasestorage.googleapis.com/v0/b/rosehack-2023.appspot.com/o/email%20banner.png?alt=media&token=a64568f0-1c6a-4b13-ada7-e94ba96f8602">
        <p>Hey ${req.body.name},</p>
        <p>Thank you for applying to Rose hack 2023! You will be notified via email when your application status changes.</p>
        <p>Thank you,</p>
        <p>The Rose Hack Team</p>
        <hr>
        <p style="text-align:center;">Head back to our website at <a href="https://rosehack.com">rosehack.com</a></p>
        <p style="text-align:center;">Contact us at <a href="mailto:rosehackucr@gmail.com">rosehackucr@gmail.com</a></p>
        <div style="text-align:center">
            <a style="margin-left:10px; margin-right:10px;" href="https://www.instagram.com/rosehackucr/"><img style="width:50px;" src="https://firebasestorage.googleapis.com/v0/b/rosehack-2023.appspot.com/o/instagram.png?alt=media&token=ce31fd85-dab4-4546-925e-f8618cd24076"></a>
        </div>
  </div>`,
  };

  sendgridMail
    .send(message)
    .then((response: any) => {
      console.log("Sent Confirmation Email");
    })
    .catch((error: any) => {
      console.log("Error Sending Confirmation Email!", error);
      res.status(500).json({});
    });

  res.status(200).json({});
}
