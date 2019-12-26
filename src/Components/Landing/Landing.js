import React, { Component } from "react";
import { Link } from "react-router-dom";
import moon from "../../resources/Moon.png";
import mars from "../../resources/Mars.png";
import jupiter from "../../resources/Jupiter_spot.png";

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      displayMoon: true,
      displayMars: false,
      displayJupiter: false
    };
  }

  handleToggle = () => {
    this.setState({
      displayMoon: !this.state.displayMoon,
      displayMars: !this.state.displayMars,
      displayJupiter: !this.state.displayJupiter
    });
  };


  render() {
    return (
      <div>

        <section className="destination-box">
          <p className="numbering"> 001 </p>
          <h1 className="title"> MOON </h1>
          <img id="hero" src={moon} alt="moon" />
          <h3 className="sub-heading"> Walk on the dark side </h3>
          <Link className="navigation-btn" to="/moon">
           <span>
             DISCOVER
             </span> 
          </Link>
        </section>


        <section className="destination-box">
          <p className="numbering"> 002 </p>
          <h1 className="title"> MARS </h1>
          <img id="hero" src={mars} alt="mars" />
          <h3 className="sub-heading"> The red planet </h3>
          <Link className="navigation-btn" to="/mars">
          <span>
             DISCOVER
             </span> 
          </Link>
        </section>


        <section className="destination-box">
          <p className="numbering"> 003 </p>
          <h1 className="title"> JUPITER </h1>
          <img id="hero" src={jupiter} alt="jupiter" />
          <h3 className="sub-heading"> Behold the giant </h3>
          <Link className="navigation-btn" to="/jupiter">
            DISCOVER
          </Link>
        </section>

      <section className='positionBars'>
        <div className='positionIndicator' name='moon' />
        <div className='positionIndicator' name='mars' />
        <div className='positionIndicator' name='jupiter' />
      </section>

      </div>
    );
  }
}

export default Landing;
