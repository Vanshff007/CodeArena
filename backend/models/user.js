const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: String,
  password: String,
  rating: {
    type: Number,
    default: 1000,
  },
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);