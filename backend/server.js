import "dotenv/config";
import express from "express";
import mongoose from "mongoose";

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

app.get("/api/v1/books", async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json({ success: true, data: books });
  } catch (error) {
    console.error("Error fetching books: ", error);
    res.status(500).json({ success: false, error: "Error fetching books" });
  }
});

app.get("/api/v1/books/:id", async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ success: false, error: "Invalid ID" });
  }

  try {
    const book = await Book.findById(id);

    if (!book) {
      return res.status(404).json({ success: false, error: "Book not found" });
    }

    res.status(200).json({ success: true, data: book });
  } catch (error) {
    console.error("Error fetching book: ", error);
    res.status(500).json({ success: false, error: "Error fetching book" });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
  connectToDatabase();
});
