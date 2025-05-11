import {  useEffect, useState } from "react";
import Layout from "./Layout";
import Container from "../components/Game/Container";
import Tilegrid from "../components/Game/Tilegrid";
import Guess from "../components/Game/Guess";
import CTAButtons from "../components/Game/CTAButtons";
import Feedback from "../components/Game/Feedback";
import Settings from "../components/Game/Settings";
import { Typography } from "@mui/material";

interface GameData {
  numOfLetters: number, 
  uniqueLetters: boolean 
}

export default function Game() {
  // Guesses
  const [guesses, setGuesses] = useState<string[]>([]);
  const [currentGuess, setCurrentGuess] = useState("");
  // Status/feedback
  const [statusMessage, setStatusMessage] = useState<string>("");
  // Game
  const [gameStarted, setGameState] = useState<boolean>(false);
  const [word, setWord] = useState<string>("REACT");
  // Timer
  const [startTime, setStartTime] = useState<number | null>(null);
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [running, setRunning] = useState<boolean>(false);
  // Variables
  const maxGuesses = 5;
  let wordLength = 5;

  

  const handleGameState = (state: boolean) => {
    setGameState(state);
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCurrentGuess(e.target.value.toUpperCase()
  );

  const handleSubmit = () => {
    if (currentGuess.length === word.length) {
      setGuesses([...guesses, currentGuess]);
      setCurrentGuess("");

      if (currentGuess === word) {
        handleStatusChange("won");
        handleGameFinished("won");
      } else if (guesses.length >= maxGuesses - 1) {
        handleStatusChange("lose");
      } else {
        handleStatusChange("guessed");
      }

    } else {
      handleStatusChange("notEnoughLetters");
    }
  };

  const handleStatusChange = (message: string) => {
    setStatusMessage(message);
  };

  const resetGame = () => {
    setGuesses([]);
    setCurrentGuess("");
    setStatusMessage("");
  };

  const handleGameFinished = (status: string) => {
    if (status === "won") {
      stopTimer();
      // SaveHighScore();
    } else if (status === "lose") {
      resetGame();
    }
  };

  const startGame = (data: GameData) => {
    fetch("http://localhost:5080/api/getWord", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ length: data.numOfLetters, uniqueLetters: data.uniqueLetters }),
    })
      .then(response => response.json()) 
      .then(data => setWord(data.word.toUpperCase()))
      .catch(error => console.error("Error fetching word:", error));

    wordLength = data.numOfLetters;
    startTimer();
    handleGameState(true);
  };

  useEffect(() => {
    let interval: number | null = null; 

    if (running && startTime) {
      interval = window.setInterval(() => {
        setElapsedTime(Date.now() - startTime);
      }, 1000);
    } else if (interval !== null) {
      clearInterval(interval);
    }

    return () => {
      if (interval !== null) clearInterval(interval);
    };
  }, [running, startTime]);


  const startTimer = (): void => {
    setStartTime(Date.now());
    setElapsedTime(0);
    setRunning(true);
  };

  const stopTimer = (): void => {
    setRunning(false);
    // saveToDatabase(elapsedTime);
  };

  return (
    <Layout>
      {!gameStarted ? (
        <Container>
          <Settings
            onSubmit={startGame}
          ></Settings>
        </Container>
      ) : (
        <Container>
          <Typography variant="body1">Timer: {(elapsedTime / 1000).toFixed(0)} seconds</Typography>
          <Tilegrid guesses={guesses} word={word} maxGuesses={maxGuesses}/>
          <Feedback 
            status={statusMessage} 
            wordLength={wordLength}
            guessesLeft={maxGuesses - guesses.length}
          />
          <Guess
            currentGuess={currentGuess}
            wordLength={wordLength}
            onInputChange={handleInputChange}
            onSubmit={handleSubmit}
            onGameFinished={handleGameFinished}
            disabled={guesses.length >= maxGuesses}
            status={statusMessage}
          />
          <CTAButtons></CTAButtons>
        </Container>
      )}
    </Layout>
  )
}