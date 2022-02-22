import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { history } from "../../redux/store";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { actionsCreators as dmActions } from "../../redux/modules/dmReducer";

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

  // 테스트 코드
  const dispatch = useDispatch();
  const addDMS = () => {
    dispatch(
      dmActions.addSpace({
        workId: 2,
        workspaceName: "53",
        receiverID: 2,
        receiverName: "김철수",
        isNew: false,
      })
    );
  };

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
                key={p.receiverID + "" + p.receiverName + idx}
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
          <ListItemButton sx={{ pl: 4, padding: "0px 16px 0px 32px" }}>
            <ListItemIcon>
              <Stack direction="row" spacing={2}>
                <Avatar
                  variant="rounded"
                  sx={{ width: 24, height: 24, bgcolor: "#552456" }}
                >
                  +
                </Avatar>
              </Stack>
            </ListItemIcon>
            <ListItemText style={{ color: "#cccbcb" }} onClick={addDMS}>
              팀원 추가
            </ListItemText>
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}
