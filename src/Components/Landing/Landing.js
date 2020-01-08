import React, { Component } from "react";
import "./landing.css";
import { Link } from "react-router-dom";
const moon = "https://astraea-project.s3-us-west-2.amazonaws.com/Moon.png";
const mars = "https://astraea-project.s3-us-west-2.amazonaws.com/Mars.png";
const jupiter =
  "https://astraea-project.s3-us-west-2.amazonaws.com/Jupiter_spot.png";
const mercury =
  "https://astraea-project.s3-us-west-2.amazonaws.com/Mercury.png";
const venus = "https://astraea-project.s3-us-west-2.amazonaws.com/Venus.png";

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
            <div className="planet-title moon">
              <b>
                M<span>O</span>O<span>N</span>
              </b>
            </div>
            <p className="numbering"> 001 </p>
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
            <div className="planet-title mars">
              <b>
                <span>MA</span>R<span>S</span>
              </b>
            </div>
            <p className="numbering"> 002 </p>
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
            <div className="planet-title jupiter">
              <b>
                J<span>UP</span>I<span>TER</span>
              </b>
            </div>

            <p className="numbering"> 003 </p>
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

        {this.state.display === "mercury" ? (
          <section className="destination-box">
            <div className="planet-title mercury">
              <b>
                M<span>ER</span>CU<span>RY</span>
              </b>
            </div>
            <p className="numbering"> 004 </p>
            <img id="hero" src={mercury} alt="mercury" />
            <h3 className="sub-heading"> Lightweight </h3>
            <div className="btn-container">
              <Link className="discover-btn effect01" to="/mercury">
                <span>DISCOVER</span>
              </Link>
            </div>
          </section>
        ) : (
          ""
        )}

        {this.state.display === "venus" ? (
          <section className="destination-box">
            <div className="planet-title venus">
              <b>
                <span>VEN</span>U<span>S</span>
              </b>
            </div>
            <p className="numbering"> 005 </p>
            <img id="hero" src={venus} alt="venus" />
            <h3 className="sub-heading"> It's going to be a long day </h3>
            <div className="btn-container">
              <Link className="discover-btn effect01" to="/venus">
                <span>DISCOVER</span>
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
          <div
            onClick={e => this.handleToggle("mercury")}
            className={`positionIndicator ${
              this.state.display === "mercury" ? "active" : ""
            }`}
            name="mercury"
          />
          <div
            onClick={e => this.handleToggle("venus")}
            className={`positionIndicator ${
              this.state.display === "venus" ? "active" : ""
            }`}
            name="venus"
          />
        </section>
      </div>
    );
  }
}

export default Landing;