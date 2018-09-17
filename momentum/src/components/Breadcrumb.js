import React from "react";
import { Link } from "@reach/router";

const Breadcrumb = props => {
  return (
    <div>
      <Link to="/menu">{props.root}</Link>
    </div>
  );
};

export default Breadcrumb;
