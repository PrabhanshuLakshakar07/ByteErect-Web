// server.js
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());
app.get("/", (req, res) => {
  res.send("API is working 🎉");
});
// POST route to send mail
app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail", // You can also use SMTP
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Contact Form: ${subject}`,
      text: `From: ${name}\nEmail: ${email}\n\n${message}`,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error sending mail:", error);
    res.status(500).json({ success: false, error: "Failed to send message" });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
