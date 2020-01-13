import React from "react";
import { Link } from "react-router-dom";
import useTouristImg from '../../hooks/useTouristImg';

const Moon = () => {
  const touristImg = useTouristImg('Moon')
  let loadedTouristImg = touristImg ? <img className='tourist-img' src={touristImg}  alt='tourist on the Moon'/> : 'loading...';

    return (
      <div className="wrap-all-planets">
        <section className="planet">
          <h1 data-text='MOON' className="planet-name moon-pn"> <span>MOON</span></h1>
          <h2 className="planet-subtitle">THE DARK SIDE</h2>
          <p className="desc">
            The Moon is Earth's only natural satellite and it is in synchronous
            rotation with Earth, so the same side is always facing the Earth.
            The Moon is moving at approximately 3.8cm away from our planet every
            year. Eventually, the Moon will take 47 days instead of the current
            27.3 to orbit the Earth.
          </p>
          <h3 className="trivia">Trivia</h3>
          <p className="desc">
            Sometimes artists mistakenly draw stars in the shadowy parts of the
            crescent moon. This is as if suddenly that part of the moon is
            invisible instead of just being in the shadow.
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

export default Moon;
