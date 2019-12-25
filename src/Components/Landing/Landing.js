import React, { Component } from 'react';
import moon from '../../resources/Moon.png';

class Landing extends Component {
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <div className='numbering'>
                <p> 001 </p>
                <h1 className='title'> MOON </h1>
                <img id='hero' src={moon} alt='moon' />
                </div>
                <h3 className='sub-heading'> Walk on the dark side </h3>
                <button className='navigation-btn'> DISCOVER </button>

            </div>
        )
    }
}

export default Landing;