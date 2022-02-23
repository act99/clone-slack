import * as React from "react";
import Box from "@mui/material/Box";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import { useSelector } from "react-redux";

import { Card, CardContent, Grid } from "@mui/material";
import { IconButton } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import ProfileUpload from "./ProfileUpload";

const Bar = (props) => {
  return (
    <Box
      sx={{
        backgroundColor: "#350d36",
        height: "38px",
        width: "100%",
      }}
    >
      <SearchBox />
      <ProfileUpload />
    </Box>
  );
};

export default Bar;

const SearchBox = (props) => {
  // modal
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  //검색 기능
  const messageList = useSelector((state) => state.chatReducer.messageList);
  console.log(messageList);
  const searchText = React.useRef();
  // const [searchWord, setSearch] = React.useState("");
  const [searchList, setList] = React.useState([]);
  let _searchList = [];
  const search = () => {
    const targetWord = searchText.current.value;
    console.log(targetWord);

    messageList.forEach((p) => {
      console.log(p.message.indexOf(targetWord));
      if (p.message.indexOf(targetWord) === -1) {
        return;
      }
      _searchList.push(p);

      console.log(_searchList);
    });
    setList(_searchList);
  };
  console.log(searchList);

  return (
    <div style={{ width: "450px", margin: "auto" }}>
      <div>
        <SearchButton aria-describedby={id} onClick={handleClick}>
          53에서 검색
          <SearchIcon sx={{ float: "right" }} />
        </SearchButton>
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        sx={{ width: 1 }}
      >
        <Box>
          <Box
            sx={{
              width: "650px",
              padding: "10px 25px 10px 10px",
              display: "flex",
            }}
          >
            <SearchIcon sx={{ margin: "20px 5px 10px 0px" }} />
            <TextField
              id="standard-basic"
              label="메세지 검색"
              variant="standard"
              inputRef={searchText}
              fullWidth
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  search();
                }
              }}
            />
            {/* <button onClick={search}>검색</button> */}
          </Box>
        </Box>
        <p style={{ margin: "5px 15px" }}>
          메세지 <span style={{ fontWeight: "bold" }}>{searchList.length}</span>{" "}
          개
        </p>
        {searchList.length !== 0 &&
          searchList.map((p, idx) => {
            return (
              <div style={{ padding: "10px 20px 10px 10px" }}>
                <Grid
                  container
                  // spacing={}
                  sx={{
                    border: "1px solid #d0d0d0",
                    borderRadius: "5px",
                    backgroundColor: "#ffffff",
                    margin: "0px 5px",
                  }}
                >
                  <Grid item xs={1}>
                    <IconButton sx={{ margin: "auto" }}>
                      <PersonIcon
                        sx={{
                          color: "white",
                          backgroundColor: "#44bedf",
                          border: "solid 0px",
                          borderRadius: "5px",
                          ml: 1,
                          mr: 1,
                          fontSize: "40px",
                          mb: 0,
                        }}
                      />
                    </IconButton>
                  </Grid>
                  <Grid item xs={11} sx={{ padding: "7px" }}>
                    <Typography sx={{ fontWeight: "bold", fontSize: "17px" }}>
                      {p.receiverName}
                    </Typography>
                    <Typography sx={{ fontSize: "15px" }}>
                      {p.message}
                    </Typography>
                  </Grid>
                </Grid>
              </div>
            );
          })}
      </Popover>
    </div>
  );
};

const SearchButton = styled.button`
  background-color: #4d394d;
  width: 450px;
  height: 28px;
  margin-top: 5px;
  padding: 0px 19px;
  border-radius: 5px;
  text-align: center;
  font-size: 14px;

  cursor: pointer;
`;
