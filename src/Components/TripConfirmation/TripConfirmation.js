import React, { Component } from 'react';
import { connect } from "react-redux";

class TripConfirmation extends Component {
    render(){
        return (
            <div>
            <h2>WELCOME ABOARD, {this.props.user && this.props.user.passenger_firstname}
                </h2>
            </div>
        )
    }
}

export default connect(state => ({user: state.user})) (TripConfirmation);