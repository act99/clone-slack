import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Bar from "../component/Bar";
import Grid from "@mui/material/Grid";

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
    <Box sx={{ flexGrow: 1 }}>
      <Bar />
      <Grid container>
        <Grid item xs={6} md={1}>
          <Item>xs=6 md=8</Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item>xs=6 md=8</Item>
        </Grid>
        <Grid item xs={6} md={7}>
          <Item>xs=6 md=4</Item>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Home;
