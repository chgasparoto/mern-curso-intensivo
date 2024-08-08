import "dotenv/config";
import express from "express";

import { connectToDatabase } from "./config/db.js";
import bookRouter from "./routes/book.routes.js";

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  setTimeout(next, 1500); // Add a 1,5 seconds delay
});

app.use("/api/v1/books", bookRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
  connectToDatabase();
});
