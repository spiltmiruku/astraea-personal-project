import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "./Components/About/About";
import AuthModal from "./Components/AuthModal/AuthModal";
import Booking from "./Components/Booking/Booking";
import Destinations from "./Components/Destinations/Destinations";
import Landing from "./Components/Landing/Landing";
import Moon from "./Components/Destinations/Moon";
import Mars from "./Components/Destinations/Mars";
import Jupiter from "./Components/Destinations/Jupiter";
import Mercury from './Components/Destinations/Mercury';
import Venus from './Components/Destinations/Venus';
import TripConfirmation from "./Components/TripConfirmation/TripConfirmation";
import Profile from "./Components/Profile/Profile";
// import StripePayment from './Components/Booking/StripePayment';

export default (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/about" component={About} />
    <Route path="/profile/authenticate" component={AuthModal} />
    <Route path="/booking" component={Booking} />
    <Route path="/destinations" component={Destinations} />
    <Route path="/moon" component={Moon} />
    <Route path="/mars" component={Mars} />
    <Route path="/jupiter" component={Jupiter} />
    <Route path="/mercury" component={Mercury} />
    <Route path="/venus" component={Venus} />
    <Route path="/tripconfirmation" component={TripConfirmation} />
    <Route path="/profile" component={Profile} />
    
    {/* <Route path='/payment' component={StripePayment} /> */}
  </Switch>
);
