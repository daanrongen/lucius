import React from "react";
import { Link } from "@reach/router";
import { Breadcrumb } from "./Breadcrumb.js";

import structure from "../fileStructure.js";
import data from "../data.js";
import weightDistribution from "../img/weight-distribution.svg";
import nextCardButton from "../img/button-to-top.svg";

const cardName = structure[3].name;

export class SittingPosture extends React.Component {
  render() {
    return (
      <main id={structure[3].url}>
        <article>
          <nav>
            <Breadcrumb root="personal insights" />
            <h1>{cardName}</h1>
          </nav>
          <p id="sittingPostureMain">
            During the moments of insufficient movement, you maintain a{" "}
            <span>{data.sittingPostureStatus}</span> sitting posture.
          </p>
          <h2>weight distribution</h2>
          <img src={weightDistribution} alt="weight distribution" />
          <div class="adviceContainer">
            <ul>
              <li>
                <h2>current advice</h2>
                <span>{data.sittingPostureAdvice}</span>
              </li>
              <li>
                <h2>current sitting time</h2>
                <span>{data.currentSittingTime} hrs</span>
              </li>
              <li>
                <h2>in chair movement</h2>
                <span>{data.inChairMovement}%</span>
              </li>
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
          <p class="nextCardIntroduction">
            That’s all for now. Good to see you are so enthousiastic about these
            insights!
          </p>
        </article>
        <Link id="backToTop" to="../">
          back to top
          <img src={nextCardButton} />
        </Link>
      </main>
    );
  }
}
