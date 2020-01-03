import React, { Component } from 'react';
import { connect } from "react-redux";

class TripConfirmation extends Component {
    render(){
        return (
            <div>
            <h2 className='welcome-msg'>Welcome aboard, {this.props.user && this.props.user.passenger_firstname}
                </h2>
            <p className='confirmation-info'>Welcome to your next adventure! Your trip with ASTRAEA is confirmed.
                <br/>
                You may now view your ticket in your account page. 
                <br/>
                You may use your e-ticket to check-in on the day of departure.
            </p>
            </div>
        )
    }
}

export default connect(state => ({user: state.user})) (TripConfirmation);