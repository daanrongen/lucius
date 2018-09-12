import React from "react";

const navItems = ["my profile", "personal insights", "buoy settings", "about"];

export const navItemList = navItems.map((navItem, i) => (
  <li key={"element" + i}>{navItem}</li>
));

export class NavMenu extends React.Component {
  toggle() {}

  render() {
    return (
      <div>
        <button onClick={this.toggle}>x</button>
        <ul>{navItemList}</ul>
      </div>
    );
  }
}
