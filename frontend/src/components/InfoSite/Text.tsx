import { Box, Typography } from "@mui/material";

import { FC, ReactNode } from "react";

const ListItemText: FC<{ children: ReactNode }> = ({ children }) => (
  <li style={{ paddingBottom: "2%", color: "whitesmoke" }}>
    <Typography variant="body1">{children}</Typography>
  </li>
);

export default function Text() {
  return (
    <Box>
      <Typography variant="h1">Information</Typography>
      <Typography variant="h2">Om spelet</Typography>

      <Typography
        variant="body1"
        sx={{
          padding: "0 10% 2% 10%",
        }}
      >
        Wordle är ett spel som blivit populärt där man som spelare ska gissa ett
        ord. Ett slumpmässigt ord efter filterade inställningar valts ut av
        spelaren.
      </Typography>

      <Typography variant="h2">Regler</Typography>
      <ul
        style={{
          padding: "0 20% 0% 20%",
          listStyleType: "decimal",
          fontSize: "1rem",
          color: "#1a1a1d",
        }}
      >
        <ListItemText>
          Du har 6 totala gissningar för att lista ut ordet.
        </ListItemText>
        <ListItemText>
          Om en bokstav är en del av ordet men är på fel plats så visas den som
          gul.
        </ListItemText>
        <ListItemText>
          Om en bosktav är en del av ordet och är på rätt plats så visas den som
          grön.
        </ListItemText>
        <ListItemText>
          Om en bokstav är helt fel så kommer den visas som röd.
        </ListItemText>
      </ul>
    </Box>
  );
}
