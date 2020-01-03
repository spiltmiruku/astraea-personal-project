import React, { Component } from 'react';
import { connect } from "react-redux";
import axios from 'axios';

class TripConfirmation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trips: [],
        }
    }

    editTrip = (id, trip) => {
        axios.put(`/api/upcomingtrips?id=${id}`, trip)
        .then(res => {
            this.setState({ trips: res.data });
        })
        .catch(error => console.log(error))
    }

    deleteTrip = (id) => {
        axios.delete(`api/upcomingtrips/${id}`)
        .then(res => {
            this.setState({ trips: res.data });
        })
        .catch(error => console.log(error))
    }

    render(){
        return (
            <div>
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

export default connect(state => ({user: state.user})) (TripConfirmation);