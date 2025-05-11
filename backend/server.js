import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import getWordFromSettings from "./static/main.js";
import mongoose from "mongoose";
import Highscore from "./database.js";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.static(path.join(__dirname, "../frontend/dist")));

mongoose.connect("mongodb://127.0.0.1:27017/highscores");

app.post("/api/getWord", express.json(), async (req, res) => {
  const { length, uniqueLetters } = req.body;

  const wordData = { length: Number(length), uniqueLetters };
  const randomWord = await getWordFromSettings(wordData);

  res.json({ word: randomWord });
});

app.post("/api/savehighscore", async (req, res) => {
  try {
    const { userName, time, wordLength, uniqueLetters, guesses } = req.body;
    const newHighscore = new Highscore({ userName, time, wordLength, uniqueLetters, guesses });
    await newHighscore.save();

    res.status("Highscore saved");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'));
});

app.get("/highscore", async (req, res) => {
  try {
    const highscores = await Highscore.find().sort({ time: 1 }); 
    res.render("highscore", { title: "Wordle - Highscores", highscores });
  } catch (error) {
    res.status(500).send("Error loading highscores.");
  }
});

app.use("/static", express.static("static"));

app.listen(5080, () => {
  console.log("Server is up and running on http://localhost:5080");
});
