import React from "react";
import ReactDOM from "react-dom";

import { NavMenu } from "./NavMenu.js";
import { CurrentNav } from "./CurrentNav.js";
import { Summary } from "./Summary.js";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

class App extends React.Component {
  render() {
    return (
      <div>
        <NavMenu />
        <CurrentNav breadcrumb="personal insights" current="summary" />
        <Summary
          colorOne="var(--red)"
          colorTwo="var(--green)"
          colorThree="var(--green)"
          seatedPercentageStatus="78%"
          inChairMovementStatus="a lot"
          sittingPostureStatus="great"
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
