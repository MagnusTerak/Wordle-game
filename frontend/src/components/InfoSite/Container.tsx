import React from "react";
import { Box } from "@mui/material";
interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <Box
      sx={{
        width: "60%",
        height: "100",
        borderRadius: 1,
        padding: "1% 0 5% 0",
        bgcolor: "primary.main",
      }}
    >
      {children}
    </Box>
  );
}
