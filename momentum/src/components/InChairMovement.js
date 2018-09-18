import React from "react";
import { Link } from "@reach/router";
import { Breadcrumb } from "./Breadcrumb.js";

import structure from "./fileStructure.js";
import data from "./data.js";
import inChairMovementGraph from "../img/in-chair-movement-graph.svg";

const cardName = structure[2].name;
const nextCard = structure[3].name;

export class InChairMovement extends React.Component {
  render() {
    return (
      <main id={structure[2].url}>
        <article>
          <nav>
            <Breadcrumb root="personal insights" />
            <h1>{cardName}</h1>
          </nav>
          <p id="inChairMovementMain">
            While sitting you have been moving {data.inChairMovementStatus},
            your Buoy detected sufficient movement {data.inChairMovement} of the
            time.
          </p>
          <h2>In-chair movement graph</h2>
          <img src={inChairMovementGraph} alt="inChairMovementGraph" />
          <div class="legendICM">
            <ul>
              <li>
                <div />
              </li>
              <li>sufficient movement</li>
            </ul>
            <ul>
              <li>
                <div />
              </li>
              <li>insufficient movement</li>
            </ul>
          </div>
          <div class="adviceContainer">
            <ul>
              <li>
                <h2>current advice</h2>
              </li>
              <li>{data.inChairMovementAdvice}</li>
              <li>
                <h2>current sitting time</h2>
              </li>
              <li>{data.timeSeated} hrs</li>
              <li>
                <h2>in chair movement</h2>
              </li>
              <li>{data.inChairMovement}%</li>
            </ul>
          </div>
          <div class="scientificText">
            <h3>The best posture is the next posture</h3>
            <p>
              The healthiest thing that you can do for your posture is to move
              as much as possible and avoid maintaining any static posture for
              an extended period of time. Spending too much time in the same
              sitting posture can cause back- and neck problems.
            </p>
          </div>
          <span class="nextCardIntroduction">
            View your sitting posture on the next card and learn how to sit up
            right!
          </span>
        </article>
        <Link to="../sitting-posture">{nextCard}</Link>
      </main>
    );
  }
}
