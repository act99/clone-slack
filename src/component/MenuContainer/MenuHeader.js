import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Avatar from "@mui/material/Avatar";
import { WorkspaceName } from "../../shared/style";
import { deepOrange } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import { actionsCreators } from "../../redux/modules/workSpaceReducer";
import { useParams } from "react-router-dom";

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

  const dispatch = useDispatch();
  const params = useParams();
  const work_index = parseInt(params.workId);

  const dmsinfo = useSelector((state) => state.dmReducer);

  const WorkspaceLogout = () => {
    dispatch(actionsCreators.deleteSpaceDB(work_index));
  };

  return (
    <div>
      <Button
        aria-describedby={id}
        onClick={handleClick}
        style={{ color: "white", fontWeight: 900, fontSize: "19px" }}
      >
        <ExpandMoreIcon />
        <p
          style={{
            margin: "5px",
          }}
        >
          {dmsinfo.workName}
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
        <Typography sx={{ p: 2, cursor: "pointer" }} onClick={WorkspaceLogout}>
          {dmsinfo.workName}에서 로그아웃
        </Typography>
      </Popover>
    </div>
  );
}
