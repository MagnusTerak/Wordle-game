import React from "react";
import { Box } from "@mui/material";

type TilegridProps = {
  guesses: string[];
  word: string;
  maxGuesses: number;
};

const getLetterColor = (
  letter: string,
  word: string,
  index: number
): string => {
  if (!letter) return "transparent";
  if (word[index] === letter) return "green";
  if (word.includes(letter)) return "orange";
  return "gray";
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
          {Array.from(guess).map((letter, index) => {
            const returningColor =
              rowIndex < guesses.length
                ? getLetterColor(letter, word, index)
                : "transparent";

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
