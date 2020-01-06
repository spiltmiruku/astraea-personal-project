import React, { Component } from "react";

class Mercury extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className='wrap-all-planets'>

        <section className="planet">
          <h1 className="planet-name"> MERCURY </h1>
          <h2 className="planet-subtitle">LIGHTWEIGHT</h2>
          <p className='desc'>
            Named after the Roman messenger to the gods, Mercury is the smallest and also the most cratered planet in the Solar System. 
            Mercury has the thinnest atmosphere of any planet in the solar system. 
            The planet's atmosphere is so thin that scientists have another name for it: an exosphere. 
          </p>
          <h3 className='trivia'>Trivia</h3>
          <p className='desc'>
          Mercury, the closest planet to the Sun, can range from 800 degrees Fahrenheit in the day, and at night, temperatures reach -280 Fahrenheit
            however, it is not the hottest planet in the solar system.           </p>
        </section>

      </div>
    );
  }
}

export default Mercury;