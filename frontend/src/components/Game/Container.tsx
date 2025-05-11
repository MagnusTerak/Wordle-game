import React from "react";
import { Box, Typography } from "@mui/material";

interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <Box
      sx={{
        width: "25vw",
        height: "70vh",
        backgroundColor: "primary.main",
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center", 
        padding: 2,
      }}
    >
      <Typography variant="h1">Wordle</Typography>
      {children}
    </Box>
  );
}
