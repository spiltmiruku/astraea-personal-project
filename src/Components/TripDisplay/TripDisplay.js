import React, { Component } from "react";
import rocket from "../../resources/Rocket.png";
import Moment from 'moment';

class TripDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      departure_airport: props.booking.departure_airport,
      destination_planet: props.booking.destination_planet,
      flight_time: props.booking.flight_time,
      departure_date: props.booking.departure_date,
      return_date: props.booking.return_date,
      isEditing: false,
      // passenger_qty,
    };
  }

  handleToggle = () => {
    this.setState({
      isEditing: !this.state.isEditing
    });
  };

  handleChange = e => {
    this.setState({
        [e.target.name]: e.target.value
    });
};

  render() {
    let {
      departure_airport,
      destination_planet,
      flight_time,
      departure_date,
      return_date,
      passenger_qty
    } = this.props.booking;

    return (
        <div>
        {!this.state.isEditing ? (
            <div className="generated-ticket">
        <h1 className="from-to">
          <span className="ticket-airport">{departure_airport}</span>
          <p className="dashes">
            ------ <img id="rocket-icon" src={rocket} alt="rocket" /> ------
          </p>
          <span className="ticket-planet">{destination_planet}</span>
        </h1>

        <span className="ticket-time">{flight_time}</span>
        <span className="ticket-date">{departure_date && Moment(departure_date).format("MMM Do YYYY")}</span>
        <span className="ticket-date">{return_date && Moment(return_date).format("MMM Do YYYY")}</span>
        <span className="ticket-qty">{passenger_qty}</span>

        <button onClick={this.handleToggle}>Edit</button>

        {/* <button onClick>Delete</button> */}
      </div> 
    ) : ( 
      <div>
        <input onChange={e => this.handleChange(e)} value={this.state.departure_airport} type='text' name='departure_airport' />
            <input onChange={e => this.handleChange(e)} value={this.state.destination_planet} type='text' name='destination_planet' />
            <input onChange={e => this.handleChange(e)} value={this.state.flight_time} type='time' name='flight_time' />
            <input onChange={e => this.handleChange(e)} value={this.state.departure_date} type='date' name='departure_date' />
            <input onChange={e => this.handleChange(e)} value={this.state.return_date} type='date' name='return_date' />
            <input onChange={e => this.handleChange(e)} value={this.state.passenger_qty} type='number' name='passenger_qty' />
        <button onClick={this.handleToggle}>Cancel Edit</button>
      </div>

    )}
      
  </div>
    );
  }
}

export default TripDisplay;
