import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();


const resend = new Resend(
  process.env.RESEND_API_KEY
);



export const sendCode = async(email, code)=>{


await resend.emails.send({

from:"onboarding@resend.dev",

to:"sening_resend_account_emailing@gmail.com",

subject:"Password reset code",

text:`Your code: ${code}`

});


};