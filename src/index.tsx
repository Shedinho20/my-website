import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Appprovider } from "./context/store";
import { BrowserRouter as Router } from "react-router-dom";
ReactDOM.render(
  <Router>
    <Appprovider>
      <App />
    </Appprovider>
  </Router>,
  document.getElementById("root")
);
