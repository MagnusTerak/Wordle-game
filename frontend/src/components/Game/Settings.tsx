import { Button, Stack, Box, Switch, TextField, Typography, Divider } from '@mui/material'
import { useState } from 'react'

export default function Settings({ onSubmit }: { onSubmit: (data: { numOfLetters: number, uniqueLetters: boolean }) => void }) {
  const [numOfLetters, setNumOfLetters] = useState(5);
  const [checkedState, setCheckedState] = useState(false);

  const handleSubmit = () => {
    onSubmit({ numOfLetters, uniqueLetters: checkedState })
  }

  const handleNumOfLetterChange = (e) => {
    setNumOfLetters(e.target.value);
  }

  const handleSwitchState = () => {
    setCheckedState(!checkedState);
  }

  return (
    <>
      <Typography variant='h6' sx={{
        maxWidth: "15vw",
        marginBottom: "5vh",
      }}>
        Customize the settings to your preference before you start the game!
      </Typography>

      <Box sx={{
        marginBottom: "5vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        border: "2px solid whitesmoke",
        padding: "2rem",
        borderRadius: "1rem"
      }}>
        <Typography variant='body1' sx={{ marginBottom: "2vh"}}>
          Enter the number of letters you want your word to be!
        </Typography>
        <TextField
          value={numOfLetters}
          onChange={handleNumOfLetterChange}
          type="number"
          placeholder="Number of letters!"
          sx={{
            width: "200px",
            textTransform: "uppercase",
            border: "1.5px solid whitesmoke",
            borderRadius: 1,
            marginBottom: "3vh"
          }}
        />

        <Divider variant='middle'/>

        <Typography variant='body1' sx={{ marginBottom: "2vh"}}>Can the word include repeating letters?</Typography>

        <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
          <Typography>No</Typography>
          <Switch checked={checkedState} onChange={handleSwitchState}></Switch>
          <Typography>Yes</Typography>
        </Stack>

        <Button onClick={handleSubmit} sx={{ marginTop: "5vh"}}>Start game</Button>
      </Box>
    </>
  )
} 
