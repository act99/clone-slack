import React from "react";
import { Box } from "@mui/material";
import {
  AddButton,
  Header,
  WorkspaceButton,
  WorkspaceName,
  Workspaces,
  WorkspaceWrapper,
} from "../shared/Style";
import ButtonList from "../component/WorkspaceContainer/ButtonList";

const WorkspaceContainer = (props) => {
  return (
    // <Box sx={{ flexGrow: 1, height: 1, backgroundColor: "#3F0E40" }}>

    <WorkspaceWrapper>
      <Workspaces>
        <ButtonList />
        <AddButton>+</AddButton>
      </Workspaces>
    </WorkspaceWrapper>

    // </Box>
  );
};

export default WorkspaceContainer;
