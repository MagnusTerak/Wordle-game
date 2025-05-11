import { Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function CTAButtons() {
  const navigate = useNavigate();

  return (
    <Box>
      <Button onClick={() => navigate("/")} variant="contained">
        Start Playing
      </Button>

      <Button href="/highscore" variant="contained">Check Highscores</Button>
    </Box>
  );
}
