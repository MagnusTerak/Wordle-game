import React from "react";
import { Box } from "@mui/material";

type TilegridProps = {
  guesses: string[];
  word: string;
  maxGuesses: number;
};

const getLetterColors = (guess: string, word: string): string[] => {
  const colors = new Array(guess.length).fill("red"); 
  const letterCount: Record<string, number> = {};

  for (const char of word) {
    letterCount[char] = (letterCount[char] || 0) + 1;
  }

  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === word[i]) {
      colors[i] = "green";
      letterCount[guess[i]]--; 
    }
  }

  for (let i = 0; i < guess.length; i++) {
    if (colors[i] === "red" && word.includes(guess[i]) && letterCount[guess[i]] > 0) {
      colors[i] = "orange";
      letterCount[guess[i]]--;
    }
  }

  return colors;
};

const Tilegrid: React.FC<TilegridProps> = ({ guesses, word, maxGuesses }) => {
  const tileLength = word.length;

  const paddedGuesses = [
    ...guesses,
    ...Array(maxGuesses - guesses.length).fill("".padEnd(tileLength, " ")),
  ];

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap="15px"
      marginTop="5%"
    >
      {paddedGuesses.map((guess, rowIndex) => (
        <Box
          key={rowIndex}
          display="grid"
          gridTemplateColumns={`repeat(${tileLength}, 1fr)`}
          gap="15px"
        >
          {Array.from(guess as string).map((letter, index) => {
            const colors = rowIndex < guesses.length ? getLetterColors(guess, word) : [];
            const returningColor = colors[index] || "transparent"; 

            return (
              <Box
                key={`${rowIndex}-${index}`}
                sx={{
                  width: "clamp(40px, 8vw, 60px)",
                  height: "clamp(40px, 8vw, 60px)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "2px solid #fff",
                  backgroundColor: returningColor,
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "clamp(16px, 2vw, 25px)",
                }}
              >
                {letter.trim()}
              </Box>
            );
          })}
        </Box>
      ))}
    </Box>
  );
};
export default Tilegrid;
