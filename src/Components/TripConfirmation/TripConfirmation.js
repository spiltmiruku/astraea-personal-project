import React, { Component } from 'react';
import './tripconfirmation.css';
import { connect } from "react-redux";
import helmet from '../../resources/Astronaut-Helmet-Line-Art.png';

class TripConfirmation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trips: [],
        }
    }

    render(){
        console.log(this.props)
        return (
            <div className='confirmation-box'>
            <img id='helmet' src={helmet} alt='astronaut helmet'/>
            <h2 className='welcome-msg'>Welcome aboard, {this.props.user && this.props.user.passenger_firstname}
                </h2>
            <p className='confirmation-info'>Welcome to your next adventure! Your trip with ASTRAEA is confirmed.
                <br/>
                You may now view your ticket in your account page. 
                <br/>
                Please use your e-ticket to check-in on the day of departure. 
                <br/><br/>
                We look forward to flying with you!
            </p>
            </div>
        )
    }
}

const mapStateToProps = (rootReducer) => {
    return {user: rootReducer.reducer.user}
}

export default connect(mapStateToProps) (TripConfirmation);