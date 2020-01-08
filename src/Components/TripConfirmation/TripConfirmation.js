import React, { Component } from 'react';
import './tripconfirmation.css';
import { connect } from "react-redux";
const helmet = 'https://astraea-project.s3-us-west-2.amazonaws.com/Astronaut-Helmet-Line-Art.png';

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
            <div className='confirmation-welcome-box'>
                <div className='helmet-box'>
            <img id='helmet' src={helmet} alt='astronaut helmet'/>
                </div>
                <div className='welcome-text-box'>
            <h2 className='welcome-msg'>Welcome aboard, {this.props.user && this.props.user.passenger_firstname}
                </h2>
            <section className='confirmation-welcome'>Welcome to your next adventure! Your trip with ASTRAEA is confirmed.
                <br/>
                You may now view your ticket in your account page. 
                <br/>
                Please use your e-ticket to check-in on the day of departure. 
                <br/><br/>
                We look forward to flying with you!
            </section>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (rootReducer) => {
    return {user: rootReducer.reducer.user}
}

export default connect(mapStateToProps) (TripConfirmation);