import React from "react";
import { Link } from "@reach/router";
import { Breadcrumb } from "./Breadcrumb.js";

import structure from "./fileStructure.js";
import data from "./data.js";
import weekProgress from "../img/week-progress.svg";

const cardName = structure[0].name;
const nextCard = structure[1].name;

export class Summary extends React.Component {
  render() {
    return (
      <article id={structure[0].url}>
        <nav>
          <Breadcrumb root={structure[0].root} />
        </nav>
        <h1>{cardName}</h1>
        <div id="quickStatusWrapper">
          <div id="quickStatusOne" />
          <div id="quickStatusTwo" />
          <div id="quickStatusThree" />
        </div>
        <p id="summaryMain">
          You’ve spent {data.percentageSeated} of today’s time seated, while
          sitting you’ve moved {data.inChairMovementStatus}, your sitting
          posture is {data.sittingPostureStatus}.
        </p>
        <div class="adviceContainer">
          <ul>
            <li>
              <h2>current advice</h2>
            </li>
            <li>{data.summaryAdvice}</li>
            <li>
              <h2>current sitting time</h2>
            </li>
            <li>{data.currentSittingTime} hrs</li>
            <li>
              <h2>seated percentage</h2>
            </li>
            <li>{data.percentageSeated}%</li>
          </ul>
        </div>
        <div class="goalsContainer">
          <ul>
            <li>
              <h2>your goals</h2>
            </li>
            <li>
              <div id="goalOneCheckbox" />
            </li>
            <li>{data.userGoalOne}</li>
            <li>
              <div id="goalTwoCheckbox" />
            </li>
            <li>{data.userGoalTwo}</li>
            <li>
              <div id="goalThreeCheckbox" />
            </li>
            <li>{data.userGoalThree}</li>
          </ul>
        </div>
        <div class="weekProgress">
          <h2>this week's progress</h2>
          <img src={weekProgress} alt="weekProgress" />
        </div>
        <Link to="../sit-stand-variety">{nextCard}</Link>
      </article>
    );
  }
}
