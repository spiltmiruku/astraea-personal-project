import React, { Component } from "react";
import './authmodal.css';
import axios from "axios";
import { connect } from "react-redux";
import { updateUser } from "../../redux/reducer";
import { Redirect } from 'react-router-dom';

class AuthModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "login",
      username: "",
      email: "",
      passenger_firstname: "",
      passenger_lastname: "",
      password: ""
    };
    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
  }

  handleToggle = nextDisplay => {
    this.setState({
      display: nextDisplay
    });
  };

  handleInput = e => {
    // console.log(e);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  login() {
    const { username, password } = this.state;
    axios
      .post("/api/auth/login", { username, password })
      .then(user => {
        console.log('success')
        this.props.updateUser(user.data);
        if (!this.props.user.username) this.setState({ username: "", password: "" });
        alert('Login successful')
      })
      .catch(err => console.log(err));
  }

  register() {
    const {
      username,
      password,
      email,
      passenger_firstname,
      passenger_lastname
    } = this.state;
    axios
      .post("/api/auth/register", {
        username,
        password,
        email,
        passenger_firstname,
        passenger_lastname
      })
      .then(user => {
        console.log('register successful', user)
        this.setState({
          username: "",
          password: "",
          email: "",
          passenger_firstname: "",
          passenger_lastname: ""
        });
        this.props.updateUser(user.data);
      })
      .catch(err => {
        console.log('register failed', err)
        this.setState({
          username: "",
          password: "",
          email: "",
          passenger_firstname: "",
          passenger_lastname: ""
        });
      });
  }


  render() {
    console.log(this.props)
    const {
      username,
      password,
      email,
      passenger_firstname,
      passenger_lastname
    } = this.state;
   

  if (this.props.user.username) 
    {
      return <Redirect from='/profile/authenticate' to='/profile' /> 
    }

    return (
      <div>
        {this.state.display === "login" ? (
          <section className="login">
            <h1 className="auth-title">LOG IN</h1>

            <div className='input-and-btn'>

            <div className='auth-input-fields'>
            <input
              className='auth-input'
              type="text"
              name="username"
              placeholder="Username"
              value={username}
              onChange={e => this.handleInput(e)}
            />
            
            <input
              className='auth-input'
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={e => this.handleInput(e)}
            />
          </div>

            <div className="btn-container" onClick={this.login}>
              <div className='discover-btn effect01'>LOG IN</div>
            </div>
            </div>
            <div className="btn-container">
              <h1 className='account-text'>CREATE A NEW ACCOUNT</h1>
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
            <h1 className="auth-title">REGISTER</h1>

            <div className='input-and-btn'>

            <div className='auth-input-fields'>
            <input
              className='auth-input'
              type="text"
              name="username"
              placeholder="Username"
              value={username}
              onChange={e => this.handleInput(e)}
            />
            <input
              className='auth-input'
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={e => this.handleInput(e)}
            />
            <input
              className='auth-input'
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={e => this.handleInput(e)}
            />
            <input
              className='auth-input'
              type="text"
              name="passenger_firstname"
              placeholder="First Name"
              value={passenger_firstname}
              onChange={e => this.handleInput(e)}
            />
            <input
              className='auth-input'
              type="text"
              name="passenger_lastname"
              placeholder="Last Name"
              value={passenger_lastname}
              onChange={e => this.handleInput(e)}
            />
          </div>

            <div className="btn-container" type="submit" onClick={this.register}>
              <div className='discover-btn effect01'>REGISTER</div>
            </div>
            </div>
            <div className="btn-container">
              <h1 className='account-text'>RETURNING CLIENT</h1>
              <div
                onClick={e => this.handleToggle("login")}
                className={`discover-btn effect01 ${
                  this.state.display === "login" ? "active" : ""
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

function mapStateToProps (state) {
  return {
    user: state.user
  }
} 

export default connect(mapStateToProps, { updateUser })(AuthModal);
