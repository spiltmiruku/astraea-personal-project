import React, { Component } from "react";
import './destinations.css';
// import Moon from './Moon';
// import Mars from './Mars';
// import Jupiter from './Jupiter';
// import Venus from './Venus';
// import Mercury from './Mercury';
import PlanetZoom from '../PlanetZoom/PlanetZoom';

class Destinations extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <PlanetZoom />
        {/* <Moon />
        <Mars />
        <Jupiter />
        <Mercury />
        <Venus /> */}
      </div>
    );
  }
}

export default Destinations;