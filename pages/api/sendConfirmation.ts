import { NextApiRequest, NextApiResponse } from "next";

export default async function addStudent(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const sendgridMail = require("@sendgrid/mail");
  const API_KEY = process.env.NEXT_SENDGRID_API_KEY;

  sendgridMail.setApiKey(API_KEY);

  const message = {
    to: req.body.email,
    from: {
      name: "Rosehack",
      email: "rosehackucr@gmail.com",
    },
    subject: `Rosehack: Application Confirmation`,
    html: `
    <div style="background:rgba(0, 0, 0, 0);">
        <img style="object-fit:contain; width:100%;" src="https://venngage-wordpress.s3.amazonaws.com/uploads/2021/10/Email-Banner-Kwizig.png">
        <p>Hey ${req.body.name},</p>
        <p>Thank you for applying to Rosehack 2023! Your application status will be updated shortly and you will be notified via email!</p>
        <p>Thank you,</p>
        <p>The Rosehack Team</p>
        <hr>
        <p style="text-align:center;">Head back to our website at <a href="https://rosehack.com">rosehack.com</a></p>
        <p style="text-align:center;">Contact us at <a href="mailto:rosehackucr@gmail.com">rosehackucr@gmail.com</a></p>
        <div style="text-align:center">
            <a style="margin-left:10px; margin-right:10px;" href="https://www.instagram.com/rosehackucr/"><img style="width:50px;" src="https://cdn-icons-png.flaticon.com/512/87/87390.png"></a>
            <a style="margin-left:10px; margin-right:10px;" href="https://www.instagram.com/rosehackucr/"><img style="width:50px;" src="https://cdn-icons-png.flaticon.com/512/87/87390.png"></a>
            <a style="margin-left:10px; margin-right:10px;" href="https://www.instagram.com/rosehackucr/"><img style="width:50px;" src="https://cdn-icons-png.flaticon.com/512/87/87390.png"></a>
        </div>
  </div>`,
  };

  sendgridMail
    .send(message)
    .then((response: any) => {
      return res.status(200).json(`Email Sent Successfully. Response: ${response}`);
    })
    .catch((error: any) => {
      return res.status(501).json(`Email Send Failed! Error: ${error}`);
    });
}
