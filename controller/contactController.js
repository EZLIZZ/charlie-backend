import nodemailer from "nodemailer";
import 'dotenv/config';

export const handleContactForm = async (req, res)=>{
    const {name, email, message }= req.body;

    //validation
 if ( !name || !email || !message){
    return res.status(400).json({erroe :"All Fields required"});
 }

 try {
    const transporter = nodemailer.createTransport({
        service : "gmail",
        auth: {
            user : process.env.EMAIL,
            pass: process.env.EMAIL_PASS,
        },
    });
    await transporter.sendMail({
        from: email,
        to: process.env.EMAIL,
        subject:`New Message from ${name}`,
        text:`
        Name: ${name}
        Email: ${email}
        Message: ${message}
        `,
    });

    res.status(200).json({message:"Message sent successfully"});

 } catch(err){
    console.error("Email sending error", err);
    res.status(500).json({error:"Failed to send message"})
 }
};