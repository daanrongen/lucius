import React from "react";
import { Router, Link } from "@reach/router";

const cardName = "bych";

let Nav = props => (
  <div>
    <nav>
      <Link to="../menu">personal insights</Link>
    </nav>
  </div>
);

export class Summary extends React.Component {
  render() {
    return (
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec
          neque at mauris vulputate luctus eu vestibulum leo. Praesent nec
          tristique nisi, nec congue nisi. Sed ac aliquet est. Donec iaculis
          tincidunt dignissim. In egestas ullamcorper placerat. Cras sed
          velitmi.
        </p>
      </div>
    );
  }
}
