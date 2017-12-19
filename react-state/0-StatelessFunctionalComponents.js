// A component class written in the usual way:
export class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}

// The same component class, written as a stateless functional component:
export const MyComponentClass = () => {
  return <h1>Hello world</h1>;
}

// Works the same either way:
ReactDOM.render(
  <MyComponentClass/>, document.getElementById('app'));


// Another Example 

import React from 'react';
import ReactDOM from 'react-dom';

export const Friend = () => {
  return <img
    src='https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-octopus.jpg'/>;
}

ReactDOM.render(
  <Friend/>, document.getElementById('app'));


// We can write this one into the one below 

import React from 'react';

export class GuineaPigs extends React.Component {
  render() {
    let src = this.props.src;
    return (
      <div>
        <h1>Cute Guinea Pigs</h1>
        <img src={src}/>
      </div>
    );
  }
}


// into this one  
import React from 'react';

export const GuineaPigs = (props) => {
  let src = props.src;
  return (
    <div>
      <h1>Cute Guinea Pigs</h1>
      <img src={src}/>
    </div>
  );
}