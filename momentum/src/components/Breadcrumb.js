import React from "react";
import { Router, Link } from "@reach/router";

const Breadcrumb = props => {
  return (
    <div>
      <Link to="/menu">{props.root}</Link>
      <h1>{props.currentPage}</h1>
    </div>
  );
};

export default Breadcrumb;
