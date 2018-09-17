import React from "react";
import { Link } from "@reach/router";

export class Menu extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="../myProfile">my profile</Link>
          </li>
          <li>
            <Link to="/">personal insights</Link>
          </li>
          <li>
            <Link to="../buoySettings">buoy settings</Link>
          </li>
          <li>
            <Link to="../about">about</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
