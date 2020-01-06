import React, { Component } from "react";
import './destinations.css';
import Moon from './Moon';
import Mars from './Mars';
import Jupiter from './Jupiter';
import Venus from './Venus';
import Mercury from './Mercury';

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
        <Venus />
        <Mercury />
      </div>
    );
  }
}

export default Destinations;