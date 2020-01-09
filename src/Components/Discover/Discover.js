import React, { Component } from "react";
import { Link } from "react-router-dom";
import Moon from "../Destinations/Moon";
import Mars from "../Destinations/Mars";
import Jupiter from "../Destinations/Jupiter";
import Venus from "../Destinations/Venus";
import Mercury from "../Destinations/Mercury";

const MOON = "MOON";
const MARS = "MARS";
const JUPITER = "JUPITER";
const MERCURY = "MERCURY";
const VENUS = "VENUS";

class Discover extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    let destinationElement;

    switch (this.state.destination) {
      case MOON:
        destinationElement = <Moon />;
        break;
      case MARS:
        destinationElement = <Mars />;
        break;
      case JUPITER:
        destinationElement = <Jupiter />;
        break;
      case MERCURY:
        destinationElement = <Mercury />;
        break;
      case VENUS:
        destinationElement = <Venus />;
        break;
    }
    return destinationElement;
  }
}

export default Discover;
