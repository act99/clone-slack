import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const Home = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    fontWeight: "bold",
  }));
  return (
    <Box sx={{ width: 1 }}>
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={0}>
        <Box gridColumn="span 1">
          <Item>1</Item>
        </Box>
        <Box gridColumn="span 4">
          <Item>2</Item>
        </Box>
        <Box gridColumn="span 7">
          <Item>3</Item>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
