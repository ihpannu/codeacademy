// Step 1
import React from 'react';
import ReactDOM from 'react-dom';
import {ChildClass} from './ChildClass';

class ParentClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      totalClicks: 0
    };
  }

  handleClick() {
    const total = this.state.totalClicks;

    // calling handleClick will result in a state change:
    this.setState({
      totalClicks: total + 1
    });
  }
}

// Step 2

import React from 'react';
import ReactDOM from 'react-dom';
import {ChildClass} from './ChildClass';

class ParentClass extends React.Component {
  constructor(props) {
    super(props);

    this.state {totalClicks: 0};

    this
      .handleClick this
      .handleClick
      .bind(this);
  }

  handleClick() {
    const total this.state.totalClicks;

    // calling handleClick will result in a state change:
    this.setState({
      totalClicks: total + 1
    });
  }

  // The stateful component class passes down handleClick to a stateless component
  // class:
  render() {
    return (<ChildClass onClick={this.handleClick}/>);
  }
}

// Step 3

import React from 'react';
import ReactDOM from 'react-dom';

export class ChildClass extends React.Component {
  render() {
    return(
    // The stateless component class uses the passed-down handleClick
    // function,accessed here as this.props.onClick, as an event handler: < button
    // onClick = {
    this.props.onClick
    }> Click Me !</button>);
  }