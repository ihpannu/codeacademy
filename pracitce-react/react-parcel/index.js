import React, {Component} from "react";
import ReactDOM from "react-dom";
import {App} from './layout/App.js'

class Index extends Component {
  render() {
    return <div>
      <App/>
    </div>;
  }
}

let mountNode = document.getElementById("app");
ReactDOM.render(
  <Index/>, mountNode);
