import { react, useState } from "react";
import Layout from "./Layout";
import Container from "../components/Game/Container";
import Tilegrid from "../components/Game/Tilegrid";
import Guess from "../components/Game/Guess";
import CTAButtons from "../components/Game/CTAButtons";
import Feedback from "../components/Game/Feedback";

export default function Game() {
  const [guesses, setGuesses] = useState<string[]>([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const [statusMessage, setStatusMessage] = useState<string>("");
  const maxGuesses = 5;
  const wordLength = 5;
  const word = "REACT";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCurrentGuess(e.target.value.toUpperCase()
  );

  const handleSubmit = () => {
    if (currentGuess.length === word.length) {
      setGuesses([...guesses, currentGuess]);
      setCurrentGuess("");

      if (currentGuess === word) {
        handleStatusChange("won");
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
    console.log(status);
    if (status === "won") {
      // SaveHighScore();
    } else if (status === "lose") {
      resetGame();
    }
  };

  return (
    <Layout>
      <Container>
        
        <Tilegrid guesses={guesses} word={word} maxGuesses={maxGuesses} />
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
    </Layout>
  )
}