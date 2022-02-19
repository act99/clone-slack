import React from "react";
import { Box } from "@mui/material";
import WorkButton from "../component/WorkspaceContainer/WorkButton";
import Test from "../component/Test";
import Test2 from "../component/Test2";
import Test3 from "../component/Test3";
import { WorkspaceButton, WorkspaceName } from "../elements/Slack";
import Test4 from "../component/Test4";
import { sockConnect } from "../component/Test5";

const WorkspaceContainer = (props) => {
  return (
    <Box sx={{ flexGrow: 1, height: 1, backgroundColor: "#3F0E40" }}>
      {/* <WorkButton>92</WorkButton> */}
      <Test3 />
      <WorkspaceButton />
    </Box>
  );
};

export default WorkspaceContainer;
