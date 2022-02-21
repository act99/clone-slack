import React from "react";
import { Box } from "@mui/material";
import {
  AddButton,
  Header,
  WorkspaceButton,
  WorkspaceName,
  Workspaces,
  WorkspaceWrapper,
} from "../shared/style";

import { useDispatch, useSelector } from "react-redux";
import { history } from "../redux/store";
import { actionsCreators as dmActions } from "../redux/modules/dmReducer";

import ButtonList from "../component/WorkspaceContainer/ButtonList";

const WorkspaceContainer = (props) => {
  const dispatch = useDispatch();
  const userinfo = useSelector((state) => state.loginReducer);
  const workSpaceList = useSelector(
    (state) => state.workSpaceReducer.workspaceList
  );
  console.log(workSpaceList);
  return (
    // <Box sx={{ flexGrow: 1, height: 1, backgroundColor: "#3F0E40" }}>

    <WorkspaceWrapper>
      <Workspaces>
        {workSpaceList.map((p, idx) => {
          return (
            <WorkspaceButton
              key={p.workID + "" + p.workName}
              id={p.workID}
              onClick={() => {
                history.push(`/${userinfo.token.split(" ")[1]}/${p.workID}/0`);
                console.log(p.workID, p.workName);
                dispatch(dmActions.setDM(p.workID));
              }}
            >
              {p.workName}
            </WorkspaceButton>
          );
        })}

        <AddButton>+</AddButton>
      </Workspaces>
    </WorkspaceWrapper>

    // </Box>
  );
};

export default WorkspaceContainer;
