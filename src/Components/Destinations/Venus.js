import React from "react";
import { Link } from "react-router-dom";
import useTouristImg from '../../hooks/useTouristImg';

const Venus = () => {
  const touristImg = useTouristImg('Venus')
  let loadedTouristImg = touristImg ? <img className='tourist-img' src={touristImg}  alt='tourist on Venus'/> : 'loading...';

    return (
      <div className="wrap-all-planets">
        <section className="planet">
          <h1 data-text='VENUS' className="planet-name venus-pn"> <span>VENUS</span></h1>
          <h2 className="planet-subtitle">IT'S GOING TO BE A LONG DAY</h2>
          <p className="desc">
            Named after the Roman goddess of love and beauty, Venus is the
            second brightest natural object in the sky. For this reason, Venus
            is sometimes referred to as the 'morning star' and 'evening star'.
            Due to Venus having the slowest rotation of any planet, one day on
            Venus is longer than one year on the planet.
          </p>
          <h3 className="trivia">Trivia</h3>
          <p className="desc">
            Some consider Venus to be the 'hipster' planet because spinning
            counter-clockwise is too mainstream. Also, one rotation on Venus
            takes approximately 243 Earth days.
            <br />
          </p>
        </section>

        {loadedTouristImg}

        <section className="planetBars">
          <Link to="/moon">
            <div className="selectPlanet"></div>
          </Link>

          <Link to="/mars">
            <div className="selectPlanet"></div>
          </Link>

          <Link to="/jupiter">
            <div className="selectPlanet"></div>
          </Link>

          <Link to="/mercury">
            <div className="selectPlanet"></div>
          </Link>

          <Link to="/venus">
            <div className="selectPlanet"></div>
          </Link>
        </section>
      </div>
    );
  }


export default Venus;
