import { Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function CTAButtons() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        marginTop: "5vh"
      }}
    >
      <Button onClick={() => navigate("/info")}>
        Information
      </Button>
      <Button>Highscores</Button>
    </Box>
  );
}