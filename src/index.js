import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);
