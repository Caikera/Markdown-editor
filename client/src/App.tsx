import React from "react";
import { useSelector } from "react-redux";
import { selectThemes } from "./redux-feature/globalOptsSlice";
import EditorContainer from "./components/EditorContainer/EditorContainer";
import Menu from "./components/Menu/MenuContainer";

import "./App.less";

export default function App() {
  const { themes, curTheme } = useSelector(selectThemes);
  const { backgroundColor } = themes[curTheme];

  return (
    <div className="container" id="container" style={{ backgroundColor }}>
      <Menu />
      <EditorContainer />
    </div>
  );
}
