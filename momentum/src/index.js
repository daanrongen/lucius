import React from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";

import { Menu } from "./components/Menu.js";
import { PageWrapper } from "./components/PageWrapper.js";
import { Summary } from "./components/Summary.js";
import { SitStandVariety } from "./components/SitStandVariety.js";
import { InChairMovement } from "./components/InChairMovement.js";
import { SittingPosture } from "./components/SittingPosture.js";

import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Menu path="/menu" />
          <PageWrapper path="/">
            <Summary path="/" />
            <SitStandVariety path="sit-stand-variety" />
            <InChairMovement path="in-chair-movement" />
            <SittingPosture path="sitting-posture" />
          </PageWrapper>
        </Router>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
