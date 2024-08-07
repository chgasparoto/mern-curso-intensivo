import "dotenv/config";
import express from "express";

import { connectToDatabase } from "./config/db.js";
import bookRouter from "./routes/book.routes.js";

const app = express();

app.use(express.json());

app.use("/api/v1/books", bookRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
  connectToDatabase();
});
