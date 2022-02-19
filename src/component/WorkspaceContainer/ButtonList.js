import React from "react";
import { WorkspaceButton, WorkspaceModal } from "../../shared/style";

const ButtonList = (props) => {
  const EnterWorkspace = () => {
    console.log("워크스페이스 입장!");
  };
  return (
    <div>
      <WorkspaceButton onClick={EnterWorkspace}>92</WorkspaceButton>
      <WorkspaceButton onClick={EnterWorkspace}>92</WorkspaceButton>
      <WorkspaceButton onClick={EnterWorkspace}>92</WorkspaceButton>
      <WorkspaceButton onClick={EnterWorkspace}>92</WorkspaceButton>
      <WorkspaceButton onClick={EnterWorkspace}>92</WorkspaceButton>
      <WorkspaceButton onClick={EnterWorkspace}>92</WorkspaceButton>
    </div>
  );
};

export default ButtonList;
