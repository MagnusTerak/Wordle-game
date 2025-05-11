import React from "react";
import { TextField, Button, Box } from "@mui/material";

interface GuessProps {
  currentGuess: string;
  wordLength: number;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  onGameFinished: (status: string) => void;
  disabled: boolean;
  status: string;
}

const Guess: React.FC<GuessProps> = ({
  currentGuess,
  wordLength,
  onInputChange,
  onSubmit,
  onGameFinished, 
  disabled,
  status,
}) => {
  return (
    <Box sx={{ marginTop: "2vh"}} display="flex" justifyContent="center">
      {status !== "won" && status !== "lose" ? (
        <Box display="flex" gap="8px">
          <TextField
            value={currentGuess}
            onChange={onInputChange}
            disabled={disabled}
            inputProps={{ maxLength: wordLength }}
            placeholder="Make a guess!"
            sx={{
              width: "200px",
              textTransform: "uppercase",
              border: "1.5px solid whitesmoke",
              borderRadius: 1,
            }}
          />
          <Button onClick={onSubmit} disabled={disabled} variant="contained">
            Guess
          </Button>
        </Box>
      ) : (
        <Button onClick={() => onGameFinished(status)} sx={{ width: "10vw" }} color="whitesmoke">
          {status === "won" ? "Save your score!" : "Try again!"}
        </Button>
      )}
    </Box>
  );
};

export default Guess;
