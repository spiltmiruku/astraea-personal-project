import React, { Component } from "react";

class Destinations extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className='wrapall'>
      <div>
        {/* JUPITER */}
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

          <h3>Fun Fact:</h3>
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

        {/* THE MOON */}

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
          <h3>Fun Fact:</h3>
          <p className='desc'>
              Sometimes artists mistakenly draw stars in the shadowy parts of the crescent moon. This is as if suddenly that part of the moon is invisible instead of just being in the shadow.
          </p>
        </section>

        {/* MARS */}

        <section className="planet">
          <h1 className="planet-name"> MARS </h1>
          <h2 className="planet-subtitle"> THE RED PLANET </h2>
          <p className='desc'>
            Mars is the fourth planet from the Sun and is the second smallest
            planet in the solar system. Named after the Roman god of war, Mars
            is also often described as the “Red Planet” due to its reddish
            appearance. Mars is a terrestrial planet with a thin atmosphere
            composed primarily of carbon dioxide. Mars has the largest dust storms in the solar system. They can last
          for months and cover the entire planet.
          </p>
          <h3>Fun Fact:</h3>
          <p className='desc'>
          NASA's Mars rover Opportunity (Oppy) got hit by a storm and it knocked the camera and wheels out, and her last words were "My battery is low and it is getting cold".
          <br />
          NASA tried to reach her for eight months, and as their final farewell, they played Billie Holiday's "I'll be seeting you". 
          </p>
        </section>
      </div>
      </div>
    );
  }
}

export default Destinations;
