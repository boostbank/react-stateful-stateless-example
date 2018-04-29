import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore } from "@boostbank/stateful";
import { GlobalState } from "@boostbank/react-stateful";

ReactDOM.render(
  <GlobalState store={createStore()}>
    <App />
  </GlobalState>,
  document.getElementById("root")
);
registerServiceWorker();
