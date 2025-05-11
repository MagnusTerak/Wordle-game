import mongoose from "mongoose";

const HighscoreSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  time: Number,
  wordLength: Number,
  uniqueLetters: [String],
  guesses: [String],
}, { timestamps: true }); 

const Highscore = mongoose.model("Highscore", HighscoreSchema);
export default  Highscore;
