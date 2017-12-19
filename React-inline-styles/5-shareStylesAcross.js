// Share Styles Across Multiple Components
// What if you want to reuse styles for several different components
//   ? One way to make styles reusable is to keep them in a separate JavaScript file.This file should export the styles that you want to reuse,
// via export.You can then import your styles into any component that wants them.In the code editor,
// move back and forth between facebookStyles.js and FacebookColorThief.js to see a styles file in action.

// facebook color palette

const blue = 'rgb(139, 157, 195)';
const darkBlue = 'rgb(059, 089, 152)';
const lightBlue = 'rgb(223, 227, 238)';
const grey = 'rgb(247, 247, 247)';
const white = 'rgb(255, 255, 255)';

const colorStyles = {
  blue: blue,
  darkBlue: darkBlue,
  lightBlue: lightBlue,
  grey: grey,
  white: white
};

// styles.js 

const fontFamily = 'Comic Sans MS, Lucida Handwriting, cursive';
const background = 'pink url("https://media.giphy.com/media/oyr89uTOBNVbG/giphy.gif") fixed';
const fontSize = '4em';
const padding = '45px 0';
const color = 'green';

export const styles = {
  fontFamily: fontFamily,
  background: background,
  fontSize: fontSize,
  padding: padding,
  color: color
}


// Home.js

import React from 'react';
import ReactDOM from 'react-dom';
import {AttentionGrabber} from './AttentionGrabber';
import {styles} from './styles';

const divStyle = {
  background: styles.background,
  height: '100%'
}

export class Home extends React.Component {
  render() {
    return (
      <div styles={divStyle}>
        <AttentionGrabber/>
        <footer>THANK YOU FOR VISITING MY HOMEPAGE!</footer>
      </div>
    );
  }
}

ReactDOM.render(
  <Home/>, document.getElementById('app'));

  // AttentionGrabber.js 

import React from 'react';
import {styles} from './styles';

const h1Style = {
  color: styles.color,
  fontSize: styles.fontSize,
  fontFamily: styles.fontFamily,
  padding: styles.padding,
  margin: 0
}

export class AttentionGrabber extends React.Component {
  render() {
    return <h1 style={h1Styles}>WELCOME TO MY HOMEPAGE!</h1>;
  }
}