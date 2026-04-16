require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db"); // 👈 IMPORTANT

const app = express();

// DB connect
connectDB();

app.get("/", (req, res) => {
  res.send("API Running 🚀");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});