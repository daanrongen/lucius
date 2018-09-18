import React from "react";
import { Breadcrumb } from "./Breadcrumb.js";

import illustrationOne from "../img/illustration-1.svg";

export class About extends React.Component {
  render() {
    return (
      <article>
        <nav>
          <Breadcrumb root="about" />
        </nav>
        <h1>office environments</h1>
        <div class="illustrationContainer">
          <img
            src={illustrationOne}
            alt="illustration of person sitting on a chair"
          />
        </div>
        <p>
          With the introduction of the Modern Effiency Desk in the early 1920’s,
          a new era of how we work has begun. The office environment has been
          designed with the goal of performing labor with minimal exertion on
          arbitrary tasks and optimal focus on desk tasks.
        </p>
        <h1>physical activity</h1>
        <div class="illustrationContainer">
          <img
            src={illustrationOne}
            alt="illustration of person sitting on a chair"
          />
        </div>
        <p>
          Due to this transition, we have been facing characteristics of a
          sedentary lifestyle. We sit in our car when we drive to work, where we
          sit to perform our job, to get home to sit on the couch before we go
          to bed. This decrease in physical activity results in serious health
          issues.
        </p>
        <h1>working dynamically</h1>
        <div class="illustrationContainer">
          <img
            src={illustrationOne}
            alt="illustration of person sitting on a chair"
          />
        </div>
        <p>
          Trusting experts, the solution lies in adopting a different way of
          performing our daily jobs. A habit, or behaviour, in which we learn to
          switch frequently and rhythmically between sitting, standing and
          moving.
        </p>
        <h1>this product</h1>
        <div class="illustrationContainer">
          <img
            src={illustrationOne}
            alt="illustration of person sitting on a chair"
          />
        </div>
        <p>
          This product aims to improve your physical activity without reducing
          your work productivity. The Buoy makes you move more while seated and
          shows you insights on your sitting behaviour based on three pillars:
          the amount of time spent seated, the amount of in-chair movement and
          how well your sitting posture is.
        </p>
      </article>
    );
  }
}
