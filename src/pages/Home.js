import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Bar from "../component/Bar";
import Grid from "@mui/material/Grid";
import ChattingContainer from "../container/ChattingContainer";
import WorkspaceContainer from "../container/WorkspaceContainer";
import MenuContainer from "../container/MenuContainer";

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
    <Box
      sx={{ flexGrow: 1, width: "100vw", height: "100vh", display: "absolute" }}
    >
      <Bar />
      <Grid container>
        <WorkspaceContainer />

        <Grid item xs={2} sx={{ backgroundColor: "#3f0e40" }}>
          <MenuContainer />
        </Grid>
        <Grid item xs>
          <ChattingContainer />
        </Grid>
      </Grid>
    </Box>
  );
};
export default Home;
