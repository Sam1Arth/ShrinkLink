import express from "express";
const app = express();

import { nanoid } from "nanoid";
import dotenv from "dotenv";
dotenv.config(); // ✅ Correct usage

import connectDB from "./src/config/mongo.config.js";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/api/create", (req, res) => {
  const { url } = req.body;
  console.log(url);
  res.send(nanoid(7));
});

app.listen(5000, () => {
  connectDB();
  console.log("server is running on port 5000");
});
