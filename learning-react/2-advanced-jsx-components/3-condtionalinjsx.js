// Use a Conditional in a Render Function
// How might you use a conditional statement inside of a render() function?

// Select TodaysPlan.js to see one way of doing it.

// Notice that the if statement is located inside of the render function, but before the return statement.
// This is pretty much the only way that you will ever see an if statement used in a render function.

import React from 'react';
import ReactDOM from 'react-dom';

const fiftyFifty = Math.random() < 0.5;

// New component class starts here:
class TonightsPlan extends React.Component {
  render() {
    if (fiftyFifty) {
      return <h1>Tonight I'm going out WOOO</h1>;
    } else {
      return <h1>Tonight I'm going to bed WOOO</h1>;
    }
  }
}

ReactDOM.render(
	<TonightsPlan />,
	document.getElementById('app')
);