import React from "react";
import { Breadcrumb } from "./Breadcrumb.js";

import data from "../data.js";
import cancelButton from "../img/cancel-button.svg";
import buoyVisual from "../img/buoy-status.png";
import batteryStatus from "../img/battery.svg";

export class BuoySettings extends React.Component {
  render() {
    return (
      <main id="buoySettings">
        <article>
          <nav>
            <Breadcrumb root="buoy settings" />
            <h1>remote control</h1>
          </nav>
          <div id="buoyConnection">
            <ul>
              <li>
                <h2>buoy connection</h2>
              </li>
              <li>{data.connectionStatus}</li>
              <li>
                <div id="connectionIndicator" />
              </li>
              <li>
                <img src={cancelButton} alt="cancel button" />
              </li>
              <li>
                <h2>led signal</h2>
              </li>
              <li>
                <img id="buoyVisual" src={buoyVisual} alt="buoy visual" />
              </li>
              <li>
                <h2>battery</h2>
              </li>
              <li>
                <img src={batteryStatus} alt="battery icon 80%" />
              </li>
              <li>
                <h2>buoy id</h2>
              </li>
              <li>{data.buoyId}</li>
              <li>
                <h2>do not disturb mode</h2>
              </li>
              <li>{data.doNotDisturbMode}</li>
            </ul>
            <label class="switch">
              <input type="checkbox" />
              <div class="slider" />
            </label>
          </div>
        </article>
      </main>
    );
  }
}
