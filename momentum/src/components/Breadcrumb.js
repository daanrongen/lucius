import React from "react";
import { Link } from "@reach/router";

export class Breadcrumb extends React.Component {
  render() {
    return (
      <div>
        <Link to="/menu">{this.props.root}</Link>
      </div>
    );
  }
}
