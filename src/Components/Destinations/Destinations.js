import React, { Component } from "react";
import './destinations.css';
import Moon from './Moon';
import Mars from './Mars';
import Jupiter from './Jupiter';

class Destinations extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <Moon />
        <Jupiter />
        <Mars />
      </div>
    );
  }
}

export default Destinations;