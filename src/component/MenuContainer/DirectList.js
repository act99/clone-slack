import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import StarBorder from "@mui/icons-material/StarBorder";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepOrange } from "@mui/material/colors";

import { history } from "../../redux/store";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export default function DirectList() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const params = useParams();
  const work_index = parseInt(params.workId);
  const userinfo = useSelector((state) => state.loginReducer);
  const dmsinfo = useSelector((state) => state.dmReducer);
  const dmsList = dmsinfo.dmsList;

  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "#3f0e40" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={handleClick} sx={{ color: "#cccbcb" }}>
        {open ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
        <ListItemText primary="다이렉트메세지" style={{ padding: "0px 5px" }} />
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {dmsList.map((p, idx) => {
            return (
              <ListItemButton
                sx={{ pl: 4, padding: "0px 16px 0px 32px" }}
                key={p.receiverID + "" + p.receiverName}
              >
                <ListItemIcon>
                  <Stack direction="row" spacing={2}>
                    <Avatar
                      src="/broken-image.jpg"
                      variant="rounded"
                      sx={{ width: 24, height: 24 }}
                    />
                  </Stack>
                </ListItemIcon>
                <ListItemText
                  style={{ color: "#cccbcb" }}
                  onClick={() => {
                    history.push(
                      `/${userinfo.token.split(" ")[1]}/${work_index}/${
                        p.receiverID
                      }`
                    );
                  }}
                >
                  {p.receiverName}
                </ListItemText>
              </ListItemButton>
            );
          })}
        </List>
      </Collapse>
    </List>
  );
}
