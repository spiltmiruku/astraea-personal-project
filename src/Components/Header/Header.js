import React, { Component } from "react";
import './header.css';
import { connect } from "react-redux";
import logo from "../../resources/astraea_logo.svg";
import icon from "../../resources/profile_icon.png";
import { Link } from "react-router-dom";
import Hamburger from '../Hamburger/Hamburger';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      toggleMenu: false,
      hamburgerState: 'menu',
    };
  }

  handleToggle = () => {
    this.setState({
      toggleMenu: !this.state.toggleMenu
    });
  };

  handleLinkClick = () => {
    this.setState({
      toggleMenu: false, 
      hamburgerState: 'menu',
    });
  };

  render() {
    return (
      <header>
        <Link to="/" className="logo-link">
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <div className="header">
          <div className="account-box">
            <Link to="/profile/authenticate">
              <img src={icon} alt="profile icon" className="icon" />
              <p className="account">
                {" "}
                {this.props.user && this.props.user.passenger_firstname
                  ? this.props.user.passenger_firstname
                  : "ACCOUNT"}
              </p>
            </Link>
            <Hamburger onClick={this.handleToggle} state={this.state.hamburgerState} setState={(v)=> this.setState({hamburgerState: v})}/>
          </div>
         
        </div>

        {!this.state.toggleMenu ? (
          <></>
        ) : (
          <>
            <nav id="nav-menu">
              <div className="row">
                <div className="col-6">
                  <Link className="links" to="/" onClick={this.handleLinkClick}>
                    Main
                  </Link>
                  <Link className="links" to="/about" onClick={this.handleLinkClick}>
                    About
                  </Link>
                </div>
                <div className="col-6">
                  <Link className="links" to="/booking" onClick={this.handleLinkClick}>
                    Booking
                  </Link>
                  <Link className="links" to="/destinations" onClick={this.handleLinkClick}>
                    Destinations
                  </Link>
                </div>
              </div>
            </nav>
          </>
        )}
      </header>
    );
  }
}

export default connect(state => ({ user: state.reducer.user }))(Header);
