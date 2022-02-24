import React from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";
import { Box, Button, IconButton, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
function CodeChanger(props) {
  const { submit, setMessage, handleCodeClose, userData } = props;
  console.log(userData);
  const [code, setCode] = React.useState(
    `function add(a, b) {\n  return a + b;\n}`
  );

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Typography sx={{ fontSize: "33px", fontWeight: "bold", ml: 3 }}>
          코드 스니펫
        </Typography>
        <IconButton onClick={submit}>
          <Typography sx={{ fontSize: "15px", fontWeight: "bold", mr: 1 }}>
            코드 보내기
          </Typography>
          <SendIcon />
        </IconButton>
      </Box>
      <CodeEditor
        // value={code}
        language="js"
        minHeight="600px"
        placeholder="Please enter JS code."
        onChange={(evn) =>
          setMessage({ ...userData, message: `+++${evn.target.value}+++` })
        }
        padding={15}
        style={{
          fontSize: 12,
          backgroundColor: "#f5f5f5",
          fontFamily:
            "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
        }}
      />
    </>
  );
}

export default CodeChanger;
