import React from "react";
import { Box, Typography } from "@mui/material";

interface statusProps {
  status: string;
  wordLength: number;
  guessesLeft: number;
}

const responseMessage = function (status: string, wordLength: number, guessesLeft: number) {
  switch (status) {
    case "won":
      return "🎉 You win!";
    case "lose":
      return "You lose, better luck next time!";
    case "notEnoughLetters":
      return `You need to guess a ${wordLength} letter word!`;
    case "guessed":
      return `You have ${guessesLeft} guesses left!`
    default:
      break;
  }
};

const Feedback: React.FC<statusProps> = ({ status, wordLength, guessesLeft }) => {
  return (
    <Box sx={{marginTop: "2vh"}}>
      <Typography variant="h6">{responseMessage(status, wordLength, guessesLeft)}</Typography>
    </Box>
  );
};

export default Feedback;
