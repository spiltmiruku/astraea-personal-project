import React, { Component } from "react";

class Jupiter extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className='wrap-all-planets'>

        <section className="planet">
          <h1 className="planet-name"> JUPITER </h1>
          <h2 className="planet-subtitle">BEHOLD THE GIANT</h2>
          <p className='desc'>
            Jupiter is the fifth planet from our Sun and is, by far, the largest
            planet in the solar system – more than twice as massive as all the
            other planets combined. Jupiter's stripes and swirls are actually
            cold, windy clouds of ammonia and water, floating in an atmosphere
            of hydrogen and helium. Jupiter’s iconic Great Red Spot is a giant
            storm bigger than Earth that has raged for hundreds of years.
          </p>

          <h3 className='trivia'>Trivia:</h3>
          <p className='desc'>
            Jupiter's moons are named after his lovers and affairs.
            <br />
            In 2011, NASA sent a craft to check out Jupiter.
            <br />
            That craft is called Juno.
            <br />
            NASA sent Jupiter's wife to check on Jupiter and his lovers and
            affairs.
          </p>
        </section>

      </div>
    );
  }
}

export default Jupiter;