import React from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";

import { Menu } from "./components/Menu.js";
import { Card } from "./components/Card.js";

import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Menu path="menu" />
          <Card path="/" cardName="summary" />
          <Card path="sit-stand-variety" cardName="sit stand variety" />
          <Card path="in-chair-movement" cardName="in chair movement" />
          <Card path="sitting-posture" cardName="sitting posture" />
        </Router>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
