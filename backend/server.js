import "dotenv/config";
import express from "express";

import { connectToDatabase } from "./config/db.js";
import { Book } from "./model/book.model.js";

const app = express();

app.use(express.json());

app.post("/api/v1/books", async (req, res) => {
  const { title, subtitle, author, genre, cover } = req.body;

  try {
    const book = new Book({ title, subtitle, author, genre, cover });
    await book.save();
    res.status(201).json({ success: true, data: book });
  } catch (error) {
    console.error("Error saving book: ", error);
    res.status(500).json({ success: false, error: "Error saving book" });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
  connectToDatabase();
});
