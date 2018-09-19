import React from "react";
import { Link } from "@reach/router";
import { Breadcrumb } from "./Breadcrumb.js";

import structure from "./fileStructure.js";
import data from "./data.js";
import weekProgress from "../img/week-progress.svg";
import nextCardButton from "../img/next-card-button.svg";

const cardName = structure[0].name;
const nextCard = structure[1].name;

export class Summary extends React.Component {
  render() {
    return (
      <main id={structure[0].url}>
        <article>
          <nav>
            <Breadcrumb root={structure[0].root} />
            <h1>{cardName}</h1>
          </nav>
          <div id="quickStatusWrapper">
            <div id="quickStatusOne" />
            <div id="quickStatusTwo" />
            <div id="quickStatusThree" />
          </div>
          <p id="summaryMain">
            You’ve spent <span class="statusOne">{data.percentageSeated}%</span>{" "}
            of today’s time seated, while sitting you’ve moved{" "}
            <span class="statusTwo">{data.inChairMovementStatus}</span>, your
            sitting posture is{" "}
            <span class="statusThree">{data.sittingPostureStatus}</span>.
          </p>
          <div class="adviceContainer">
            <ul>
              <li>
                <h2>current advice</h2>
                <span>{data.summaryAdvice}</span>
              </li>
              <li>
                <h2>current sitting time</h2>
                <span>{data.currentSittingTime} hrs</span>
              </li>
              <li>
                <h2>seated percentage</h2>
                <span>{data.percentageSeated}%</span>
              </li>
            </ul>
          </div>
          <div class="goalsContainer">
            <h2>your goals</h2>
            <ul>
              <li>
                <div id="goalOneCheckbox" />
                <span>{data.userGoalOne}</span>
              </li>
              <li>
                <div id="goalTwoCheckbox" />
                <span>{data.userGoalTwo}</span>
              </li>
              <li>
                <div id="goalThreeCheckbox" />
                <span>{data.userGoalThree}</span>
              </li>
            </ul>
          </div>
          <div class="weekProgress">
            <h2>this week's progress</h2>
            <img src={weekProgress} alt="weekProgress" />
          </div>
        </article>
        <Link to="../sit-stand-variety">
          {nextCard}
          <img src={nextCardButton} />
        </Link>
      </main>
    );
  }
}
