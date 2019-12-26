import React, { Component } from "react";

class Mars extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className='wrapall'>
      <div>
       
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
          <h3>Trivia:</h3>
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

export default Mars;