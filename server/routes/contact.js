import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const contact = await Contact.create({ name, email, subject, message });

    res.status(201).json({
      success: true,
      message: "Message sent successfully",
      data: { id: contact._id, name: contact.name },
    });
  } catch (error) {
    console.error("Error saving contact:", error.message);
    res.status(500).json({ success: false, message: "Server error. Please try again." });
  }
});

router.get("/", async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: messages });
  } catch (error) {
    console.error("Error fetching contacts:", error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

export default router;