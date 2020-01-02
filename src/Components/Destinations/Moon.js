import React, { Component } from "react";

class Moon extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className='wrap-all-planets'>

        <section className="planet">
          <h1 className="planet-name"> MOON </h1>
          <h2 className="planet-subtitle">THE DARK SIDE</h2>
          <p className='desc'>
            The Moon is Earth's only natural satellite and it is in synchronous
            rotation with Earth, so the same side is always facing the Earth.
            The Moon is moving at approximately 3.8cm away from our planet every
            year. Eventually, the Moon will take 47 days instead of the current
            27.3 to orbit the Earth.
          </p>
          <h3 className='trivia'>Trivia</h3>
          <p className='desc'>
              Sometimes artists mistakenly draw stars in the shadowy parts of the crescent moon. This is as if suddenly that part of the moon is invisible instead of just being in the shadow.
          </p>
        </section>

      </div>
    );
  }
}

export default Moon;