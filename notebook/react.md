# My React Notes

## Render React Components

The `react-dom` package provides DOM-specific methods that can be used at the top level of your app and as an escape hatch to get outside of the React model if you need to. Most of your components should not need to use this module.

```JavaScript
import React from "react";
import ReactDOM from "react-dom";

const element = <h1>Hello World</h1>

ReactDOM.render(element, document.getElementById("root"));
```

```html
<div id="root"></div>
```

## Ternary Operators

The conditional (ternary) operator is the only JavaScript operator that takes three operands. This operator is frequently used as a shortcut for the `if` statement.

If `condition` is `true`, the operator returns the value of `expr1`; otherwise, it returns the value of `expr2`.

```JavaScript
import React from "react";
import ReactDOM from "react-dom";

function coinToss() {
// Randomly return either 'heads' or 'tails'.
return Math.random() < 0.5 ? "heads" : "tails";
}

const pics = {
kitty:
"https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg",
doggy:
"https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg"
};

const img = <img src={pics[coinToss() === "heads" ? "kitty" : "doggy"]} />;

ReactDOM.render(img, document.getElementById("image"));
```

## Map array items and render dynamically

we use the `map()` function to take an `array` of `elements`. Below, we loop through the array using the JavaScript `map()` function. We return a `<li>` element for each item. Finally, we assign the resulting array of elements to `peopleLis`:

```JavaScript
import React from "react";
import ReactDOM from "react-dom";

const people = ["Rowe", "Prevost", "Gare", "Sutu"];

const peopleLis = people.map(person => <li>{person}</li>);

ReactDOM.render(<ul>{peopleLis}</ul>, document.getElementById("list"));
```

## JSX Unique keys for every rendered object

A `key` is a JSX attribute. The attribute's name is `key`. The attribute's value should be something unique, similar to an `id` attribute.

Not all lists need to have keys. A list needs keys if either of the following are true:

1.  The list-items have memory from one render to the next. For instance, when a to-do list renders, each item must "remember" whether it was checked off. The items shouldn't get amnesia when they render.
2.  A list's order might be shuffled. For instance, a list of search results might be shuffled from one render to the next.

If neither of these conditions are true, then you don't have to worry about keys. If you aren't sure then it never hurts to use them!

```JavaScript
import React from 'react';
import ReactDOM from 'react-dom';

const elements = ['First Element', 'Second Element', 'Third Element'];

const elementsList = elements.map((element, i) =>
  <li key={'element' + i}>{element}</li>
);

ReactDOM.render(<ul>{elementsList}</ul>, document.getElementById('list'))
```

## Create React Components

`React.createElement` [documentation](https://reactjs.org/docs/react-api.html#react.createelement)

```JavaScript
const headerTitle = React.createElement("h1", null, "Hello World");
```

## Component Class

- [Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [Classes (in-depth)](https://hacks.mozilla.org/2015/07/es6-in-depth-classes/)
- [Subclassing](https://hacks.mozilla.org/2015/08/es6-in-depth-subclassing/)

To make a component class, you use a base class from the React library: `React.Component`. `React.Component` is a JavaScript class. To create your own component class, you must subclass `React.Component`. You can do this by using the syntax `class YourComponentNameGoesHere extends React.Component {}`.

Whenever you make a component, that component inherits all of the methods of its component class. `MyComponentClass` has one method: `MyComponentClass.render()`. Therefore, `<MyComponentClass />` also has a method named render.

To call a component's render method, you pass that component to `ReactDOM.render()`. Notice your component, being passed as `ReactDOM.render()`'s first argument:

```JavaScript
import React from 'react';
import ReactDOM from 'react-dom';

class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}

// component goes here:
ReactDOM.render(<MyComponentClass />, document.getElementById('root'))
```

## Variable Attributes in Components

```JavaScript
import React from 'react'
import ReactDOM from 'react-dom'

const owl = {
  title: 'Excellent Owl',
  src: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-owl.jpg'
};

class Owl extends React.Component {
  render() {
    return (
      <div><h1>{owl.title}</h1>
      <img src={owl.src} alt={owl.title} /></div>
    )
  }
}

ReactDOM.render(<Owl />, document.getElementById('article'))
```

## Logic in Render Functions

A `render()` function can also be a fine place to put simple calculations that need to happen right before a component renders. Here's an example of some calculations inside of a render function:

```JavaScript
import React from 'react';
import ReactDOM from 'react-dom';

const friends = [
  {
    title: "Yummmmmmm",
    src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyweirdo.jpg"
  },
  {
    title: "Hey Guys!  Wait Up!",
    src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-earnestfrog.jpg"
  },
  {
    title: "Yikes",
    src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-alpaca.jpg"
  }
];

class Friend extends React.Component {
  render() {
    var friend = friends[2]
    return (
      <div>
        <h1>{friend.title}</h1>
        <img src={friend.src} />
      </div>
    );
  }
}

ReactDOM.render(<Friend />, document.getElementById('friendsList'))
```

## Event Listeners in Components

Recall that an event handler is a function that gets called in response to an event. In React, you define event handlers as methods on a component class. Like this:

```JavaScript
import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
  scream() {
    alert('AAAAAAAAHHH!!!!!');
  }

  render() {
    return <button onClick={this.scream}>AAAAAH!</button>;
  }
}

ReactDOM.render(<Button />, document.getElementById('root'))
```

## Render Components in MyComponentClass

When you import a variable from a file that is not the current file, then an import statement isn't quite enough. You also need an export statement, written in the other file, exporting the variable that you hope to grab.

export comes from ES6's module system, just like import does. export and import are meant to be used together, and you rarely see one without the other.

In one file, place the keyword export immediately before something that you want to export. That something can be any top-level var, let, const, function, or class:

```JavaScript
import React from 'react';
import ReactDOM from 'react-dom';
import { NavBar } from './NavBar';

class ProfilePage extends React.Component {
  render() {
    return (
      <div>
        ReactDOM.render(<NavBar />)
        <h1>All About Me!</h1>
        <p>I like movies and blah blah blah blah blah</p>
        <img src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyselfie.jpg" />
      </div>
    );
  }
}

ReactDOM.render(<ProfilePage />, document.getElementById('detail'))
```

## Pass Props from Component to Component

The most common use of props is to pass information to a component, from a different component. You haven't done that yet, but it's very similar to what you've seen already.

A curmudgeonly clarification about grammar:
You may have noticed some loose usage of the words `prop` and `props`. Unfortunately, this is pretty inevitable. `props` is the name of the object that stores passed-in information. `this.props` refers to that storage object. At the same time, each piece of passed-in information is called a `prop`. This means that `props` could refer to two pieces of passed-in information, or it could refer to the object that stores those pieces of information.

**Greeting.js**

```JavaScript
import React from 'react';

export class Greeting extends React.Component {
  render() {
    return <h1>Hi there, {this.props.name}!</h1>;
  }
}
```

**App.js**

```JavaScript
import React from 'react';
import ReactDOM from 'react-dom';
import { Greeting } from './Greeting.js'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Hullo and, "Welcome to The Newzz," "On Line!"
        </h1>
        <Greeting name="John Doe" />
        <article>
          Latest newzz:  where is my phone?
        </article>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
```

## this.props.children

Every component's props object has a property named children.

`this.props.children` will return everything in between a component's opening and closing JSX tags.

So far, all of the components that you've seen have been self-closing tags, such as `<MyComponentClass />`. They don't have to be! You could write `<MyComponentClass></MyComponentClass>`, and it would still work.

this.props.children would return everything in between `<MyComponentClass>` and `</MyComponentClass>`.

**List.js**

```JavaScript
import React from 'react';

export class List extends React.Component {
  render() {
    let titleText = `Favorite ${this.props.type}`;
    if (this.props.children instanceof Array) {
    	titleText += 's';
    }
    return (
      <div>
        <h1>{titleText}</h1>
        <ul>{this.props.children}</ul>
      </div>
    );
  }
}
```

**App.js**

```JavaScript
import React from 'react';
import ReactDOM from 'react-dom';
import { List } from './List';

class App extends React.Component {
  render() {
    return (
      <div>
        <List type='Living Musician'>
          <li>Sachiko M</li>
          <li>Harvey Sid Fisher</li>
        </List>
        <List type='Living Cat Musician'>
          <li>Nora the Piano Cat</li>
        </List>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
```

## Default Props

If nobody passes any text to Button, then Button's display will be blank. It would be better if Button could display a default message instead.

You can make this happen by giving your component class a property named `defaultProps`:

```JavaScript
import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
  render() {
    return (
      <button>
        {this.props.text}
      </button>
    );
  }
}

// defaultProps goes here:
Button.defaultProps = { text: 'I am a button' };

ReactDOM.render(
  <Button text=""/>,
  document.getElementById('app')
);
```

## Call this.setState() from another Function

Let's walk through how a function wrapping `this.setState()` might work in practice. Here is how a `<Mood />`'s state would be set:

1.  A user triggers an event (in this case a click event, triggered by clicking on a `<button></button>`).

2.  The event from Step 1 is being listened for (in this case by the `onClick` attribute).

3.  When this listened-for event occurs, it calls an event handler function (in this case, `this.toggleMood()`).

4.  Inside of the body of the event handler, `this.setState()` is called.

5.  The component's state is changed!

Due to the way that event handlers are bound in JavaScript, `this.toggleMood()` loses its this when it is used. Therefore, the expressions `this.state.mood` and `this.setState` won't mean what they're supposed to... unless you have already bound the correct this to `this.toggleMood`.

**Mood.js**

```JavaScript
import React from 'react';
import ReactDOM from 'react-dom';

class Mood extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mood: 'good' };
    this.toggleMood = this.toggleMood.bind(this);
  }

  toggleMood() {
    const newMood = this.state.mood == 'good' ? 'bad' : 'good';
    this.setState({ mood: newMood });
  }

  render() {
    return (
      <div>
        <h1>I am feeling {this.state.mood}!</h1>
        <button onClick={this.toggleMood}>
          Click Me
        </button>
      </div>
    );
  }
}

ReactDOM.render(<Mood />, document.getElementById('app'));
```

This reads the state of a button (eventlistener on click), and sets the background color of the page.

**Toggle.js**

```JavaScript
import React from 'react';
import ReactDOM from 'react-dom';

const green = '#39D1B4';
const yellow = '#FFD712';

class Toggle extends React.Component {
  constructor(props){
    super(props);
    this.state = { color: green };
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor() {
    const newColor = this.state.color == green ? yellow : green;
    this.setState({ color: newColor });
  }

  render() {
    return (
      <div style={{background: this.state.color}}>
        <h1>
          Change my color
        </h1>
        <button onClick={this.changeColor}>
  				Change color
				</button>
      </div>
    );
  }
}

ReactDOM.render(<Toggle />, document.getElementById('app'));
```
