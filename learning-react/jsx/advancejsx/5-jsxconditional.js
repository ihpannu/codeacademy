// JSX Conditionals: If Statements That Don't Work
// Great work! You've learned how to use curly braces to inject JavaScript into a JSX expression!

// Here's a rule that you need to know: you can not inject an if statement into a JSX expression.

// This code will break:

(
    <h1>
        {
      if (purchase.complete) {
            'Thank you for placing an order!'
        }
        }
  </h1>
)
// The reason why has to do with the way that JSX is compiled.You don't need to understand the 
// mechanics of it for now, but if you're interested then you can learn more here.

// What if you want a JSX expression to render, but only under certain circumstances ? You can't 
// inject an if statement. What can you do?

// You have lots of options.In the next few lessons, we'll explore some simple ways to write 
// conditionals (expressions that are only executed under certain conditions) in JSX.

// JSX Conditionals: If Statements That Do Work
// How can you write a conditional, if you can't inject an if statement into JSX?

// Well, one option is to write an if statement, and not inject it into JSX.

// Look at if.js.Follow the if statement, all the way from line 6 down to line 18.

// if.js works, because the words if and else are not injected in between JSX tags.The if statement is on the outside, and no JavaScript injection is necessary.

// This is a common way to express conditionals in JSX.

import React from 'react';
import ReactDOM from 'react-dom';

function coinToss() {
    // This function will randomly return either 'heads' or 'tails'.
    return Math.random() < 0.5 ? 'heads' : 'tails';
}

const pics = {
    kitty: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg',
    doggy: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg'
};
let img;

// if/else statement begins here:
if (coinToss() === 'heads') {
    img = <img src={pics.kitty} />
} else {
    img = <img src={pics.doggy} />
}

ReactDOM.render(img, document.getElementById('app'));