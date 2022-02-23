import React from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";

function CodeChat(props) {
  // const [code, setCode] = React.useState(
  //   `function add(a, b) {\n  return a + b;\n}`
  // );
  const { code } = props;
  const codeEdit = code.slice(3, code.length - 3);
  return (
    <CodeEditor
      value={codeEdit}
      language="js"
      padding={15}
      style={{
        fontSize: 12,
        backgroundColor: "#f5f5f5",
        fontFamily:
          "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
      }}
    />
  );
}

export default CodeChat;
