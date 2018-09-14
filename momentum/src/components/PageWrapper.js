import React from "react";
import { Router, Link } from "@reach/router";
import Breadcrumb from "./Breadcrumb.js";
import { Menu } from "./Menu.js";

export class PageWrapper extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Breadcrumb root="personal insights" currentPage="summary" />
        </header>
        <main>{this.props.children}</main>
      </div>
    );
  }
}
