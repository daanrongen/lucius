import React from "react";
import { Router, Link } from "@reach/router";

export class Menu extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="myProfile">my profile</Link>
          </li>
          <li>
            <Link to="/">personal insights</Link>
          </li>
          <li>
            <Link to="buoySettings">buoy settings</Link>
          </li>
          <li>
            <Link to="about">about</Link>
          </li>
        </ul>
      </div>
    );
  }
}
