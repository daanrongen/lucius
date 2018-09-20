import React from "react";
import { Link } from "@reach/router";
import { Breadcrumb } from "./Breadcrumb.js";

import data from "../data.js";
import profilePicture from "../img/profile-picture.jpg";
import weekProgress from "../img/week-progress.svg";
import editButton from "../img/edit-button.svg";

export class Overview extends React.Component {
  render() {
    return (
      <article>
        <nav>
          <Breadcrumb root="profile" />
        </nav>
        <h1>overview</h1>
        <div id="userInformation">
          <img src={profilePicture} alt="user profile" />
          <ul>
            <li>
              <h2>name</h2>
            </li>
            <li>{data.username}</li>
            <li>
              <h2>workweek</h2>
            </li>
            <li>{data.workweek}</li>
          </ul>
        </div>
        <div id="userGoals">
          <h2>your goals</h2>
          <div>
            {data.userGoalOne}{" "}
            <Link to="goal-setings">
              <img src={editButton} alt="edit button" />
            </Link>
          </div>
          <div>
            {data.userGoalTwo}
            <Link to="goal-setings">
              <img src={editButton} alt="edit button" />
            </Link>
          </div>
          <div>
            {data.userGoalThree}
            <Link to="goal-setings">
              <img src={editButton} alt="edit button" />
            </Link>
          </div>
        </div>
        <div class="weekProgress">
          <h2>this week's progress</h2>
          <img src={weekProgress} alt="weekProgress" />
        </div>
      </article>
    );
  }
}
