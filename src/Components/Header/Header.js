import React, { Component } from "react";
import { connect } from "react-redux";
import logo from "../../resources/astraea_logo.svg";
import icon from "../../resources/profile_icon.png";
import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
library.add(faBars);

class Header extends Component {
  constructor() {
    super();
    this.state = {
      toggleMenu: false
    };
  }

  handleToggle = () => {
    this.setState({
      toggleMenu: !this.state.toggleMenu
    });
  };

  render() {
    return (
      <div className="App">
         <header id="header-container">
            <img src={logo} alt="logo" className="logo" />

            <div className="account-box">
            <Link to="/profile/authenticate">
              <img src={icon} alt="profile icon" className="icon" />
    <p className="account"> {this.props.user && this.props.user.passenger_firstname ? this.props.user.passenger_firstname : 'ACCOUNT'}</p>
            </Link>
            </div>

            <FontAwesomeIcon
              icon="bars"
              id="hamburger"
              onClick={this.handleToggle}
            />
          </header>
        {!this.state.toggleMenu ? (
         <>
         </>
        ) : (
          <>
           
            <nav id="nav-menu">
              <Link className="links" to="/">
                Main
              </Link>
              <Link className="links" to="/about">
                About
              </Link>
              <Link className="links" to="/booking">
                Booking
              </Link>
              <Link className="links" to="/destinations">
                Destinations
              </Link>
            </nav>
          </>
        )}
      </div>
    );
  }
}

export default connect((state => ({user: state.user})) ) (Header);
