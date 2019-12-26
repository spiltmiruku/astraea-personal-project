import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "./Components/About/About";
import Booking from "./Components/Booking/Booking";
import Destinations from "./Components/Destinations/Destinations";
import Landing from "./Components/Landing/Landing";
import Moon from "./Components/Destinations/Moon";
import Mars from "./Components/Destinations/Mars";
import Jupiter from "./Components/Destinations/Jupiter";

export default (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/about" component={About} />
    <Route path="/booking" component={Booking} />
    <Route path="/destinations" component={Destinations} />
    <Route path="/moon" component={Moon} />
    <Route path="/mars" component={Mars} />
    <Route path="/jupiter" component={Jupiter} />
  </Switch>
);