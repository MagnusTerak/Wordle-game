import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import getWordFromSettings from "./static/main.js";

const app = express();

app.use(cors());

app.set("view engine", "ejs")

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "../frontend/dist")));


app.post("/api/getWord", express.json(), async (req, res) => {
  const { length, uniqueLetters } = req.body;

  const wordData = { length: Number(length), uniqueLetters };
  const randomWord = await getWordFromSettings(wordData);

  res.json({ word: randomWord });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'));
});



app.use("/static", express.static("static"));

app.listen(5080);