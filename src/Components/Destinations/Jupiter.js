import React from "react";
import { Link } from "react-router-dom";
import useTouristImg from '../../hooks/useTouristImg';

const Jupiter = () => {
  const touristImg = useTouristImg('Jupiter')
  let loadedTouristImg = touristImg ? <img className='tourist-img' src={touristImg}  alt='tourist on Jupiter'/> : 'loading...';

    return (
      <div className="wrap-all-planets">
        <section className="planet">
          <h1 className="planet-name"> JUPITER </h1>
          <h2 className="planet-subtitle">BEHOLD THE GIANT</h2>
          <p className="desc">
            Jupiter is the fifth planet from our Sun and is, by far, the largest
            planet in the solar system – more than twice as massive as all the
            other planets combined. Jupiter's stripes and swirls are actually
            cold, windy clouds of ammonia and water, floating in an atmosphere
            of hydrogen and helium. Jupiter’s iconic Great Red Spot is a giant
            storm bigger than Earth that has raged for hundreds of years.
          </p>

          <h3 className="trivia">Trivia</h3>
          <p className="desc">
            Jupiter's moons are named after his lovers and affairs.
            <br />
            In 2011, NASA sent a craft to check out Jupiter.
            <br />
            That craft is called Juno.
            <br />
            Juno is Jupiter's wife in Roman mythology.
            <br />
            NASA sent Jupiter's wife to check on Jupiter and his lovers and
            affairs.
          </p>
        </section>

        {loadedTouristImg}


        <section className="planetBars">
          <Link to="/moon">
            <div className="selectPlanet">
            </div>
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

export default Jupiter;
