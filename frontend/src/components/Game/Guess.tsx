import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

interface GuessProps {
  currentGuess: string;
  wordLength: number;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  onGameFinished: (status: string, userName: string) => void;
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
  const [showHighscoreEntry, setHighscoreEntry] = useState<boolean>(false);
  const [userName, changeUserName] = useState("");

  const handleHighscoreEntry = (val: boolean) => {
    setHighscoreEntry(val)
  }

  const onUserNameChange = (e: any) => {
    changeUserName(e.target.value);
  }

  return (
    <Box sx={{ marginTop: "2vh"}} display="flex" justifyContent="center">
      {status !== "won" && status !== "lose" && showHighscoreEntry === false ? (
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
      ) : showHighscoreEntry === false ? (
        <Button onClick={() => handleHighscoreEntry(true)} sx={{ width: "10vw", color: "whitesmoke" }}>
          {status === "won" ? "Save your score!" : "Try again!"}
        </Button>
      ) : (
        <>
          <TextField
            value={userName}
            onChange={onUserNameChange}
            placeholder="Enter username"
            sx={{
              width: "200px",
              border: "1.5px solid whitesmoke",
              borderRadius: 1,
            }}
          />
          <br/>
          <Button disabled={userName.length <= 0} onClick={() => onGameFinished(status, userName)} sx={{ color: "whitesmoke" }}>
            Submit highscore
          </Button>
          <Button onClick={() => onGameFinished("lose", "")} sx={{ color: "whitesmoke" }}>
            Cancel
          </Button>
        </>
      )}
    </Box>
  );
};

export default Guess;
