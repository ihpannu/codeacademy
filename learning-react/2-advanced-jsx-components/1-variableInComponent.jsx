// Use a Variable Attribute in a Component
// Take a look at this JavaScript object named redPanda:

const redPanda = {
  src: 'http://bit.ly/1U92LL3',
  alt: 'Red Panda',
  width:  '200px
};
// How could you render a React component, and get a picture with redPanda's properties?

// Select RedPanda.js to see one way to do it.

// Note all of the curly-brace JavaScript injections inside of the render function! Lines 16, 17, and 18 all use JavaScript injections.

// You can, and often will, inject JavaScript into JSX inside of a render function.

import React from 'react';
import ReactDOM from 'react-dom';

const redPanda = {
  src: 'http://bit.ly/1U92LL3',
  alt: 'Red Panda',
  width:  '200px'
};

class RedPanda extends React.Component {
  render() {
    return (
      <div>
        <h1>Cute Red Panda</h1>
        <img 
          src={redPanda.src} 
          alt={redPanda.alt} 
          width={redPanda.width} />
      </div>
    );
  }
}

ReactDOM.render(
  <RedPanda />,
  document.getElementById('app')
);