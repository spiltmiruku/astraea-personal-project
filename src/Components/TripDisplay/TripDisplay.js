import React, { Component } from "react";
import './tripdisplay.css';
import rocket from "../../resources/Rocket.png";
import { DateRange } from "react-date-range";
import Moment from "moment";

class TripDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      departure_airport: props.booking.departure_airport,
      destination_planet: props.booking.destination_planet,
      flight_time: props.booking.flight_time,
      departure_date: props.booking.departure_date,
      return_date: props.booking.return_date,
      passenger_qty: props.booking.passenger_qty,
      isEditing: false,
      displayCalendar: "hide"
    };
  }

  handleSelect = range => {
    // console.log(range);
    this.setState({
      departure_date: range.startDate,
      return_date: range.endDate
    });
  };

  toggleCalendar = hide => {
    // console.log(hide);
    this.setState({
      displayCalendar: hide
    });
  };

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

  editTrip = id => {
    let trip = { ...this.state };
    delete trip.isEditing;
    this.props.editTrip(id, trip);
    this.setState({
      isEditing: false
    });
  };

  render() {
    let {
      id,
      departure_airport,
      destination_planet,
      flight_time,
      departure_date,
      return_date,
      passenger_qty
    } = this.props.booking;

    // console.log("booking", this.props.booking);
    return (
      <div>
        {!this.state.isEditing ? (
          <div className="ticket-wrapper">
            <div className="generated-ticket">
              <h1 className="from-to">
                <span className="ticket-airport">{departure_airport}</span>
                <p className="dashes">
                  ------ <img id="rocket-icon" src={rocket} alt="rocket" />{" "}
                  ------
                </p>
                <span className="ticket-planet">{destination_planet}</span>
              </h1>

              <span className="ticket-time">{flight_time}</span>
              <span className="ticket-date">
                {departure_date && Moment(departure_date).format("MMM Do YYYY")}
              </span>
              <span className="ticket-date">
                {return_date && Moment(return_date).format("MMM Do YYYY")}
              </span>
              
              <label>
                Passengers:
                <span className="ticket-qty">{passenger_qty}</span>
              </label>
            </div>

            <div className="edit-del-btns">
              <div className="btn-container edit-del">
                <div
                  className="discover-btn effect01"
                  onClick={this.handleToggle}
                >
                  Edit
                </div>
              </div>

              <div className="btn-container edit-del">
                <div
                  className="discover-btn effect01"
                  onClick={() => this.props.deleteTrip(id)}
                >
                  Delete
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <input
              onChange={e => this.handleChange(e)}
              value={this.state.departure_airport}
              type="text"
              name="departure_airport"
            />

            <input
              onChange={e => this.handleChange(e)}
              value={this.state.destination_planet}
              type="text"
              name="destination_planet"
            />

            <input
              onChange={e => this.handleChange(e)}
              value={this.state.flight_time}
              type="time"
              name="flight_time"
            />

            <div className="trip-dates-wrapper">
              <label>Dates</label>
              {this.state.displayCalendar === "hide" ? (
                <div
                  onClick={e => this.toggleCalendar("display")}
                  className="trip-dates"
                >
                  {Moment(this.state.departure_date._d).format("MMM Do YYYY")}
                  <p>-</p>
                  {Moment(this.state.return_date._d).format("MMM Do YYYY")}
                </div>
              ) : (
                <div>
                  <button
                    className="trip-dates"
                    onClick={e => this.toggleCalendar("hide")}
                  >
                    Confirm Dates
                  </button>
                  <div className="date-display">
                    {Moment(this.state.departure_date._d).format("MMM Do YYYY")}
                  </div>
                  <div>
                    {Moment(this.state.return_date._d).format("MMM Do YYYY")}
                  </div>
                  <DateRange
                    onInit={this.handleSelect}
                    onChange={this.handleSelect}
                  />
                </div>
              )}
            </div>
            {/* <input onChange={e => this.handleChange(e)} value={this.state.passenger_qty} type='number' name='passenger_qty' /> */}
            <button onClick={this.handleToggle}>Cancel Edit</button>
            <button onClick={() => this.editTrip(id)}>Save Changes</button>
          </div>
        )}
      </div>
    );
  }
}

export default TripDisplay;
