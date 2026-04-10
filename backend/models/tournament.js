const mongoose = require("mongoose");

const tournamentSchema = new mongoose.Schema({
  name: String,
  players: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    }
  ],
  status: {
    type: String,
    enum: ["upcoming", "ongoing", "completed"],
    default: "upcoming",
  },
}, { timestamps: true });

module.exports = mongoose.model("Tournament", tournamentSchema);