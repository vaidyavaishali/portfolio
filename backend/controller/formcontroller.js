import FormModel from "../models/FormModel.js";
import nodemailer from "nodemailer";

export const submitForm = async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  try {
    // Save to MongoDB
    const form = new FormModel({ name, email, phone, subject, message });
    await form.save();

    // Send email using nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "your_gmail@gmail.com",
        pass: "your_app_password" // Use app password, not your actual password
      }
    });

    const mailOptions = {
      from: email,
      to: "vaidyavaishali214@gmail.com",
      subject: `New Contact Form: ${subject}`,
      html: `
        <h3>New message from your portfolio:</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Form submitted and email sent!" });
  } catch (error) {
    console.error("Form submission error:", error);
    res.status(500).json({ error: "Failed to submit form" });
  }
};
