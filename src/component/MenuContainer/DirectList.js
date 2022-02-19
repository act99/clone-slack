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
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepOrange } from "@mui/material/colors";

export default function DirectList() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "#3f0e40" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={handleClick}>
        <ListItemText
          primary="다이렉트메세지"
          style={{ color: "#cccbcb", padding: "0px 5px" }}
        />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4, padding: "8px 16px 0px 32px" }}>
            <ListItemIcon>
              <Stack direction="row" spacing={2}>
                <Avatar
                  src="/broken-image.jpg"
                  variant="rounded"
                  sx={{ width: 24, height: 24 }}
                />
              </Stack>
            </ListItemIcon>
            <ListItemText primary="이주석" style={{ color: "#cccbcb" }} />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4, padding: "8px 16px 0px 32px" }}>
            <ListItemIcon>
              <Stack direction="row" spacing={2}>
                <Avatar
                  src="/broken-image.jpg"
                  variant="rounded"
                  sx={{ width: 24, height: 24 }}
                />
              </Stack>
            </ListItemIcon>
            <ListItemText primary="이주영" style={{ color: "#cccbcb" }} />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4, padding: "8px 16px 0px 32px" }}>
            <ListItemIcon>
              <Stack direction="row" spacing={2}>
                <Avatar
                  src="/broken-image.jpg"
                  variant="rounded"
                  sx={{ width: 24, height: 24 }}
                />
              </Stack>
            </ListItemIcon>
            <ListItemText primary="이주영" style={{ color: "#cccbcb" }} />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}
