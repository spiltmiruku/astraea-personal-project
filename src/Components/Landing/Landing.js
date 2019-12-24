import React, { Component } from 'react';

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
                    001
                </div>
                <h1 className='title'> MOON </h1>
                <h3 className='sub-heading'> Walk on the dark side </h3>
                <button className='navigation-btn'> DISCOVER </button>
                
            </div>
        )
    }
}

export default Landing;