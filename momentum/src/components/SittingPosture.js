import React from "react";

const cardName = "sitting posture";
let sittingPostureStatus = "great";

export class SittingPosture extends React.Component {
  render() {
    return (
      <article>
        <h1>{cardName}</h1>
        <p>
          During the moments of insufficient movement, you maintain a{" "}
          {sittingPostureStatus} sitting posture.
        </p>
      </article>
    );
  }
}
