import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Bar from "../component/Bar";
import Grid from "@mui/material/Grid";
import ChattingContainer from "../container/ChattingContainer";
import WorkspaceContainer from "../container/WorkspaceContainer";
import { height } from "@mui/system";
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
    <Box sx={{ flexGrow: 1 }}>
      <Bar />
      <Grid container>
        <Grid
          item
          xs={6}
          md={0.5}
          sx={{ width: "100vw", height: "100vh", backgroundColor: "#3f0e40" }}
        >
          <WorkspaceContainer />
        </Grid>
        <Grid
          item
          xs={6}
          md={2.5}
          sx={{ width: "100vw", height: "100vh", backgroundColor: "#3f0e40" }}
        >
          <MenuContainer />
        </Grid>
        <Grid item xs={6} md={9}>
          <ChattingContainer />
        </Grid>
      </Grid>
    </Box>
  );
};
export default Home;
