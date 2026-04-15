const mongoose = require("mongoose");

const battleSchema = new mongoose.Schema({
  player1: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  player2: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  winner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  problemId: String,
  status: {
    type: String,
    enum: ["waiting", "ongoing", "finished"],
    default: "waiting",
  },
}, { timestamps: true });

module.exports = mongoose.model("Battle", battleSchema);