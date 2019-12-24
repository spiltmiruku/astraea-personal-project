import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
        return (
            <div>
                <Link to='/'> Main </Link>
                <Link to='/about'> About </Link>
                <Link to='/booking'> Booking </Link>
                <Link to='/destinations'> Destinations </Link>
            </div>
        )
}

export default Header;