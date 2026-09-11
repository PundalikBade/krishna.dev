import Message from "../models/Message.js";
import asyncHandler from "../middleware/asyncHandler.js";

/* POST /api/contact */
export const sendMessage = asyncHandler(async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    res.status(400);
    throw new Error("All fields are required (name, email, message)");
  }

  if (!/^\S+@\S+\.\S+$/.test(String(email))) {
    res.status(400);
    throw new Error("Please provide a valid email address");
  }

  const saved = await Message.create({ name, email, message });

  res.status(201).json({
    success: true,
    message: "Message sent successfully",
    data: { id: saved._id, name: saved.name },
  });
});