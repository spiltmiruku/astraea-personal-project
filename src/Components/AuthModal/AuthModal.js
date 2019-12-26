import React, { Component } from "react";
import { Link } from "react-router-dom";

class AuthModal extends Component {
  constructor() {
    super();
    this.state = {
      // FOR REGISTERING

      username: "",
      email: "",
      passenger_firstname: "",
      passenger_lastname: "",
      password: ""

      // FOR LOGGING IN

      // username: '',
      // password: ''
    };
  }

  render() {
    return (
      <div>
        <section className="signin">
          <input type="text" name="username" placeholder="Username" />
          <input type="password" name="password" placeholder="Password" />
        </section>

        <section className="register">
          <input type="text" name="username" placeholder="Username" />
          <input type="password" name="password" placeholder="Password" />
          <input type="email" name="email" placeholder="Email" />
          <input type="text" name="firstname" placeholder="First Name" />
          <input type="text" name="lastname" placeholder="Last Name" />
        </section>
      </div>
    );
  }
}

export default AuthModal;
