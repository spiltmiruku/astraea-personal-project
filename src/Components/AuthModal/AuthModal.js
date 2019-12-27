import React, { Component } from "react";
import { Link } from "react-router-dom";

class AuthModal extends Component {
  constructor() {
    super();
    this.state = {
      display: "sign in",

      username: "",
      email: "",
      passenger_firstname: "",
      passenger_lastname: "",
      password: ""
    };
  }

  handleToggle = nextDisplay => {
    this.setState({
      display: nextDisplay
    });
  };

  render() {
    return (
      <div>
        {this.state.display === "sign in" ? (
          <section className="signin">
            <input type="text" name="username" placeholder="Username" />
            <input type="password" name="password" placeholder="Password" />

            <div className="btn-container">
              <div
                onClick={e => this.handleToggle("register")}
                className={`discover-btn effect01 ${
                  this.state.display === "register" ? "active" : ""
                }`}
              >
                REGISTER
              </div>
            </div>
          </section>
        ) : (
          ""
        )}

        {this.state.display === "register" ? (
          <section className="register">
            <input type="text" name="username" placeholder="Username" />
            <input type="password" name="password" placeholder="Password" />
            <input type="email" name="email" placeholder="Email" />
            <input type="text" name="firstname" placeholder="First Name" />
            <input type="text" name="lastname" placeholder="Last Name" />

            <div className="btn-container">
              <div
                onClick={e => this.handleToggle("sign in")}
                className={`discover-btn effect01 ${
                  this.state.display === "sign in" ? "active" : ""
                }`}
              >
                SIGN IN
              </div>
            </div>
          </section>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default AuthModal;
