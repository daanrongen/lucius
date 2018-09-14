import React from "react";
import { Router, Link } from "@reach/router";

const cards = [
  {
    name: "summary",
    link: "summary"
  },
  {
    name: "sit stand variety",
    link: "sit-stand-variety"
  },
  {
    name: "in-chair movement",
    link: "in-chair-movement"
  },
  {
    name: "sitting posture",
    link: "sitting-posture"
  }
];

let Nav = props => (
  <div>
    <nav>
      <Link to="../menu">{props.breadcrumb}</Link>
    </nav>
  </div>
);

export class Card extends React.Component {
  render() {
    return (
      <div>
        <Nav path="/" breadcrumb="personal insights" />
        <h2>{this.props.cardName}</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec
          neque at mauris vulputate luctus eu vestibulum leo. Praesent nec
          tristique nisi, nec congue nisi. Sed ac aliquet est. Donec iaculis
          tincidunt dignissim. In egestas ullamcorper placerat. Cras sed velit
          mi. Morbi vestibulum scelerisque elit non imperdiet. Proin ullamcorper
          elit sit amet ante mollis, vitae tempor leo egestas. Vestibulum a nisi
          bibendum, sagittis mi sed, pellentesque urna. Duis in urna tempor,
          auctor arcu ac, porta orci. Phasellus id maximus ex, a ultrices neque.
        </p>
        <Link to={"../" + cards[1].link}>
          <h2>{cards[1].name}</h2>
          <div>
            <img src="https://i.imgur.com/TdTo4sy.jpg" height="64px" />
          </div>
        </Link>
      </div>
    );
  }
}
