import React, { Component } from "react";
import { Link } from "react-router-dom";
import moon from "../../resources/Moon.png";
import mars from "../../resources/Mars.png";
import jupiter from "../../resources/Jupiter_spot.png";

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      display: "moon"
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
        {this.state.display === "moon" ? (
          <section className="destination-box">
            <p className="numbering"> 001 </p>
            <h1 className="title"> MOON </h1>
            <img id="hero" src={moon} alt="moon" />
            <h3 className="sub-heading"> Walk on the dark side </h3>
            <div className="btn-container">
              <Link className="discover-btn effect01" to="/moon">
                <span>DISCOVER</span>
              </Link>
            </div>
          </section>
        ) : (
          ""
        )}

        {this.state.display === "mars" ? (
          <section className="destination-box">
            <p className="numbering"> 002 </p>
            <h1 className="title"> MARS </h1>
            <img id="hero" src={mars} alt="mars" />
            <h3 className="sub-heading"> The red planet </h3>
            <div className="btn-container">
              <Link className="discover-btn effect01" to="/mars">
                <span>DISCOVER</span>
              </Link>
            </div>
          </section>
        ) : (
          ""
        )}

        {this.state.display === "jupiter" ? (
          <section className="destination-box">
            <p className="numbering"> 003 </p>
            <h1 className="title"> JUPITER </h1>
            <img id="hero" src={jupiter} alt="jupiter" />
            <h3 className="sub-heading"> Behold the giant </h3>
            <div className="btn-container">
              <Link className="discover-btn effect01" to="/jupiter">
                DISCOVER
              </Link>
            </div>
          </section>
        ) : (
          ""
        )}

        <section className="positionBars">
          <div
            onClick={e => this.handleToggle("moon")}
            className={`positionIndicator ${
              this.state.display === "moon" ? "active" : ""
            }`}
            name="moon"
          />
          <div
            onClick={e => this.handleToggle("mars")}
            className={`positionIndicator ${
              this.state.display === "mars" ? "active" : ""
            }`}
            name="mars"
          />
          <div
            onClick={e => this.handleToggle("jupiter")}
            className={`positionIndicator ${
              this.state.display === "jupiter" ? "active" : ""
            }`}
            name="jupiter"
          />
        </section>
      </div>
    );
  }
}

export default Landing;
