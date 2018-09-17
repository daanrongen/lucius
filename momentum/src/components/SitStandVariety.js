import React from "react";
import { Link } from "@reach/router";

import structure from "./fileStructure.js";
import data from "./data.js";
import sitStandGraph from "../img/sit-stand-graph.svg";
import sitStandVarietyExample from "../img/sit-stand-variety-example.svg";

const cardName = structure[1].name;
const nextCard = structure[2].name;

export class SitStandVariety extends React.Component {
  render() {
    return (
      <article id={structure[1].url}>
        <h1>{cardName}</h1>
        <p id="sitStandVarietyMain">
          You have been sitting for {data.timeSeated} hrs in total. Which is{" "}
          {data.percentageSeated}% of this workday.
        </p>
        <img src={sitStandGraph} alt="sitStandGraph" />
        <div class="adviceContainer">
          <ul>
            <li>
              <h2>current advice</h2>
            </li>
            <li>{data.sitStandVarietyAdvice}</li>
            <li>
              <h2>time spent in chair</h2>
            </li>
            <li>{data.timeSeated} hrs</li>
            <li>
              <h2>time spent out of chair</h2>
            </li>
            <li>{data.timeStanding} hrs</li>
          </ul>
        </div>
        <div class="scientificText">
          <h3>Stand up for your health</h3>
          <p>
            When you sit, blood flows slower and muscles burn less fat. By
            flexing the muscles in your calves you stimulate the flow of
            oxygenated blood through your body. This results in better
            concentration and mental comfort. The example below shows a graph of
            what a rhythmic sitting behaviour can look like. Find your own pace
            and try to maintain these intervals.
          </p>
          <img src={sitStandVarietyExample} alt="sitStandVarietyExample" />
        </div>
        <span class="nextCardIntroduction">
          Find out if you’ve been moving enough on the next card.
        </span>
        <Link to="../in-chair-movement">{nextCard}</Link>
      </article>
    );
  }
}
