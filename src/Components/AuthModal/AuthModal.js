import React, { Component } from "react";
import axios from 'axios';
import { connect } from 'react-redux';
import { getUser } from '../../redux/reducer';

class AuthModal extends Component {
  constructor() {
    super();
    this.state = {
      display: "log in",

      username: "",
      email: "",
      passenger_firstname: "",
      passenger_lastname: "",
      password: ""
    };
    // this.register = this.register.bind(this);
    // this.login = this.login.bind(this);
    // this.logout = this.logout.bind(this);
  }

  handleToggle = nextDisplay => {
    this.setState({
      display: nextDisplay
    });
  };

  handleInput = e => {
    // console.log(e.target.name)
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  login() {
    const { username, password } = this.state;
    axios.post('/api/auth/login', { username, password })
    .then(user => {
      this.props.updateUser(user.data);
      this.setState({ username: '', password: ''});
    })
    .catch(err => alert(err.response.request.response));
  };

  register() {
    const {username, password, email, passenger_firstname, passenger_lastname } = this.state;
    axios.post('/api/auth/register', { username, password, email, passenger_firstname, passenger_lastname })
    .then(user => {
      this.setState({
        username: '', 
        password: '',
        email: '',
        passenger_firstname: '',
        passenger_lastname: ''
      });
      this.props.updateUser(user.data)
    })
    .catch(err => {
      this.setState({ 
        username: '', 
        password: '',
        email: '',
        passenger_firstname: '',
        passenger_lastname: ''
      });
      alert(err.response.request.response)
    });
  };
    
  logout() {
    axios.get('/api/logout')
    .then( () => {
      this.props.updateUser({});
    })
    .catch(error => console.log(error));
  };


  render() {
    const { username, password, email, passenger_firstname, passenger_lastname } = this.state;
    const { user } = this.props;
    return (
      <div>
        {this.state.display === "log in" ? (
          <section className="login">
            <h1 className='auth-title'>LOG IN</h1>
            <input 
              type="text" 
              name="username" 
              placeholder="Username" 
              value={username} 
              onChange={e => this.handleInput(e.target.value)}/>
            <input 
              type="password" 
              name="password" 
              placeholder="Password" 
              value={password} 
              onChange={e => this.handleInput(e.target.value)}/>
            <button type='submit' onClick={this.login}>Log in</button>

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
          <h1 className='auth-title'>REGISTER</h1>
            <input 
              type="text" 
              name="username" 
              placeholder="Username" 
              value={username}
              onChange={e => this.handleInput(e.target.value)}/>
            <input 
              type="password" 
              name="password" 
              placeholder="Password" 
              value={password}
              onChange={e => this.handleInput(e.target.value)}/>
            <input 
              type="email" 
              name="email" 
              placeholder="Email" 
              value={email}
              onChange={e => this.handleInput(e.target.value)}/>
            <input 
              type="text" 
              name="passenger_firstname" 
              placeholder="First Name" 
              value={passenger_firstname}
              onChange={e => this.handleInput(e.target.value)}/>
            <input 
              type="text" 
              name="passenger_lastname" 
              placeholder="Last Name" 
              value={passenger_lastname}
              onChange={e => this.handleInput(e.target.value)}/>
            <button>Register</button>

            <div className="btn-container">
              <div
                onClick={e => this.handleToggle("log in")}
                className={`discover-btn effect01 ${
                  this.state.display === "log in" ? "active" : ""
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

export default connect(null, {getUser}) (AuthModal);
