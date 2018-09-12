import React from "react";

export class CurrentNav extends React.Component {
  render() {
    return (
      <ul>
        <li>{this.props.breadcrumb}</li>
        <li>{this.props.current}</li>
      </ul>
    );
  }
}
