import React from "react";

export class Summary extends React.Component {
  render() {
    return (
      <div>
        <div id="quickStatus">
          <div style={{ backgroundColor: this.props.colorOne }} />
          <div style={{ backgroundColor: this.props.colorTwo }} />
          <div style={{ backgroundColor: this.props.colorThree }} />
        </div>
        <p id="introSummary">
          You’ve spent {this.props.seatedPercentageStatus} of today’s time
          seated, while sitting you’ve moved {this.props.inChairMovementStatus},
          your sitting posture is {this.props.sittingPostureStatus}.
        </p>
      </div>
    );
  }
}
