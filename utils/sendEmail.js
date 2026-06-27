import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();


const transporter = nodemailer.createTransport({

  host: "smtp.gmail.com",

  port: 465,

  secure: true,

  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }

});



export const sendCode = async (email, code) => {


  await transporter.sendMail({

    from: process.env.EMAIL_USER,

    to: email,

    subject: "Password reset code",

    text: `Your code: ${code}`

  });


};