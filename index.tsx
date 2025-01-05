import React from "react";
import { render } from "react-dom";
import { App } from "./src/App";

const renderMyApp = () => {
  render(<div>I am render</div>, document.getElementById("root"));
};

void renderMyApp();
