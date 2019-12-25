import React, { Component } from 'react';

class Booking extends Component {
    constructor(){
        super();
        this.state = {
            depature: '',
            destination: '',
            date: '',
            time: '',
            passengers: 1
        }
    }

    render(){
        return(
            <div>
                <section className='booking-inputs'>
                <input type='text' name='departure' placeholder='Departure'/>
                <input type='text' name='destination' placeholder='Destination'/>
                <input type='date' name='date' />
                <input type='time' name='time' />
                <input type='number' name='passenger' placeholder='1' min='1' max='20' />
                <input className='reset-btn' type='reset' name='reset' />
                </section>
            </div>
        )
    }
}

export default Booking;