import React, { Component } from 'react';

class Booking extends Component {
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <input type='text'> Departure </input>
                <input type='text'> Destination </input>
                <input type='date'> Date </input>
                <input type='time'> Time </input>
                <input type='number'> Passengers </input>
                <input className='reset-btn' type='reset'> Reset </input>
            </div>
        )
    }
}

export default Booking;