import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import { WorkspaceName } from "../../shared/Style";
import { deepOrange } from "@mui/material/colors";

export default function MenuHeader() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const WorkspaceLogout = () => {
    console.log("workspace logout");
  };

  return (
    <div>
      <Button aria-describedby={id} onClick={handleClick}>
        <p
          style={{
            color: "white",
            fontSize: "19px",
            fontWeight: 900,
            margin: "5px",
          }}
        >
          클론코딩
        </p>
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        {/* <Avatar variant="rounded" sx={{ width: 36, height: 36 }}>
          클론
        </Avatar> */}
        <Typography sx={{ p: 2 }} onClick={WorkspaceLogout}>
          클론코딩에서 로그아웃
        </Typography>
      </Popover>
    </div>
  );
}
