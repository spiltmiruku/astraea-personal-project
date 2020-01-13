import React, { Component } from "react";
import "./booking.css";
import axios from "axios";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { DateRange } from "react-date-range";
import Moment from "moment";
import Stripe from "../Booking/StripePayment";
const earth = 'https://astraea-project.s3-us-west-2.amazonaws.com/Earth.png';
const select = 'https://astraea-project.s3-us-west-2.amazonaws.com/select.png';

class Booking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      departure: "",
      departureAirport: "",
      departureLocationAirports: [],
      destinationPlanet: "Moon",
      destinationLocations: [],
      time: "",
      departureDate: "",
      returnDate: "",
      dates: "",
      passenger_qty: 1,
      displayCalendar: "hide",
      display: "bookTrip",
      departureSearched: false,
      amount: 10000000
    };
    this.bookTrip = this.bookTrip.bind(this);
    this.handleAirportSearch = this.handleAirportSearch.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleAdd(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleAirportSearch(location) {
    console.log("searching", location);
    axios.get("/api/airports?name=" + this.state[location]).then(res => {
      // console.log(res);

      if (res.data && res.data.length) {
        this.setState({
          [`${location}LocationAirports`]: res.data,
          [`${location}Airport`]: res.data[0].code
        });
      } else {
        this.setState({
          [`${location}LocationAirports`]: [],
          [`${location}Airport`]: "",
          departureSearched: true
        });
      }
    });
  }

  bookTrip = () => {
    if (this.props.reducer.user.user_id) {
      axios
        .post("/api/booktrip", {
          user_id: this.props.reducer.user.user_id,
          departure_airport: this.state.departureAirport,
          destination_planet: this.state.destinationPlanet,
          departure_date: this.state.dates.startDate,
          return_date: this.state.dates.endDate,
          flight_time: this.state.time,
          passenger_qty: this.state.passenger_qty,
          flight_date: this.state.departureDate
        })
        .then(res => {
          // alert("Trip booked");
        })
        .catch(err => console.log(err));
      this.props.history.push("/tripconfirmation");
    }
  };

  handleSelect(range) {
    this.setState({
      dates: range
    });
  }

  toggleCalendar = hide => {
    this.setState({
      displayCalendar: hide
    });
  };

  handleToggle = nextDisplay => {
    this.setState({
      display: nextDisplay
    });
  };

  render() {
    if (!this.props.reducer.user.username) {
      return <Redirect from="/booking" to="/profile/authenticate" />;
    }

    let departureLocationSelect = "";
    // console.log(this.state.displayCalendar);
    // console.log(this.state.departureLocationAirports);
    if (this.state.departureLocationAirports.length) {
      departureLocationSelect = (
        <select
          onChange={e => this.handleAdd(e)}
          name="departureAirport"
          id="departure"
        >
          {this.state.departureLocationAirports.map(airport => (
            <option key={airport.code} value={airport.code}>
              {airport.code} - {airport.name}
            </option>
          ))}
        </select>
      );
    } else if (this.state.departure && this.state.departureSearched) {
      departureLocationSelect = "No airports found, please modify your search";
    }

    // let destinationLocationSelect = '';
    // if (this.state.destinationLocations.length) {
    //     destinationLocationSelect = (
    //         <select
    //         onChange={e => this.handleAdd(e)}
    //         name='destinationLocation'
    //         id='destinationLocation'
    //         >
    //         {this.state.destinationLocations.map(planet => (
    //             <option key={planet.name} value={planet.name}>
    //                 {planet.name}
    //             </option>
    //         ))}
    //         </select>
    //     )
    // }

    return (
      <div>
        <img id="earth-hero" src={earth} alt="earth" />
        <h1 className="booking-title">ADVENTURE STARTS HERE</h1>
        {this.state.display === "bookTrip" ? (
          <section className="booking-inputs d-flex justify-content-center flex-column flex-md-row text-center align-items-center mt-5 pb-5">
            <div className="departureSearchBox">
              <label className="booking-label">Departure</label>
              <input
                onChange={e => this.handleAdd(e)}
                value={this.state.departure}
                type="text"
                name="departure"
                placeholder="Departure"
              />

              <div className="btn-container">
                <div
                  className="discover-btn effect01"
                  onClick={() => this.handleAirportSearch("departure")}
                  name="departureSearch"
                >
                  Search Airports
                </div>
                <div className="departureAirportSelect">
                  {departureLocationSelect}
                </div>
              </div>
            </div>

            {/* <label>Destination</label>
          <input onChange={e => this.handleAdd(e)} value={this.state.destination} type="text" name="destination" placeholder="Destination" />
          <button className='searchDestinations'
            onClick={() => this.handleDestinationSearch('destination')}>
              Search Destinations
          </button>

            {destinationLocationSelect} */}

            <div className="destination-dropdown">
              <label className="booking-label">Destination</label>
              <br />
              <select
                onChange={e => this.handleAdd(e)}
                name="destinationPlanet"
              >
                <option value="Moon">Moon</option>
                <option value="Mercury">Mercury</option>
                <option value="Venus">Venus</option>
                <option value="Mars">Mars</option>
                <option value="Jupiter">Jupiter</option>
              </select>
            </div>

            <div className="trip-dates-wrapper">
              <label className='dates-label'>Dates</label>
              {this.state.displayCalendar === "hide" ? (
                <div
                  onClick={e => this.toggleCalendar("display")}
                  className="trip-dates"
                >
                  <p className="select-dates">
                    (Select Departure & Return dates)
                  </p>
                  <img id="select" src={select} alt="select arrow" />
                  {this.state.dates &&
                    Moment(this.state.dates.startDate._d).format("MMM Do YYYY")}
                  {this.state.dates && <p>-----</p>}
                  {this.state.dates &&
                    Moment(this.state.dates.endDate._d).format("MMM Do YYYY")}
                </div>
              ) : (
                <div className='confirm-data'>
                  <button
                    className="trip-dates-btn"
                    onClick={e => this.toggleCalendar("hide")}
                  >
                    Confirm Dates
                  </button>

                  <DateRange
                    className='date-range'
                    onInit={this.handleSelect}
                    onChange={this.handleSelect}
                    calendars='1'
                  />
                </div>
              )}
            </div>

            <div className="flight-times">
              <label className="booking-label">Time</label>
              <input
                onChange={e => this.handleAdd(e)}
                name="time"
                type="time"
              />
            </div>

            <div className="passenger-number">
              <label className="booking-label">Passengers</label>
              <input
                onChange={e => this.handleAdd(e)}
                type="number"
                name="passenger_qty"
                placeholder="1"
                min="1"
                max="20"
              />
            </div>

            <div className="btn-container">
              <div
                onClick={e => this.handleToggle("confirmation")}
                className="discover-btn effect01"
              >
                NEXT
              </div>
            </div>
          </section>
        ) : (
          <div>
            <article className="confirmation-box-wrapper">
              <section className="confirmation-box">
                <label>Departure Airport</label>
                <p className="confirmation-info">
                  {this.state.departureAirport}
                </p>

                <label>Destination</label>
                <p className="confirmation-info">
                  {this.state.destinationPlanet}
                </p>

                <label>Departure Time</label>
                <p className="confirmation-info">{this.state.time}</p>

                <label>Number of Passengers</label>
                <p className="confirmation-info">{this.state.passenger_qty}</p>

                <label>Travel Dates</label>
                <p className="confirmation-info">
                  {this.state.dates &&
                    Moment(this.state.dates.startDate._d).format("MMM Do YYYY")}
                  -
                  {this.state.dates &&
                    Moment(this.state.dates.endDate._d).format("MMM Do YYYY")}
                </p>
              </section>
            </article>

            <div className="btn-container">
              <div
                onClick={e => this.handleToggle("bookTrip")}
                className="discover-btn effect01"
              >
                BACK
              </div>
            </div>

            <Stripe
              bookTrip={this.bookTrip}
              passenger_qty={this.state.passenger_qty}
              amount={this.state.amount}
            />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return reduxState;
};

export default connect(mapStateToProps)(Booking);
