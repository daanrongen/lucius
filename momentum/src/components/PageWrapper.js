import React from "react";
import Breadcrumb from "./Breadcrumb.js";

export class PageWrapper extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Breadcrumb root="personal insights" />
        </header>
        <main>{this.props.children}</main>
      </div>
    );
  }
}
