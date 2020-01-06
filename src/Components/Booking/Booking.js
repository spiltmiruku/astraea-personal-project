import React, { Component } from "react";
import "./booking.css";
import axios from "axios";
import { connect } from "react-redux";
// import { Redirect } from "react-router-dom";
import { DateRange } from "react-date-range";
import Moment from "moment";
import earth from "../../resources/Earth.png";
import select from "../../resources/select.png";

class Booking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      departure: "",
      departureAirport: "",
      departureLocationAirports: [],
      destinationPlanet: "",
      destinationLocations: [],
      time: "",
      departureDate: "",
      returnDate: "",
      dates: "",
      passenger_qty: 1,
      displayCalendar: "hide",
      display: "bookTrip",
      departureSearched: false
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
      console.log(res);

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
          alert("Trip booked");
        })
        .catch(err => console.log(err));
      this.props.history.push("/tripconfirmation");
    }
  };

  handleSelect(range) {
    console.log(range);
    this.setState({
      dates: range
    });
  }

  toggleCalendar = hide => {
    console.log(hide);
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
      // return <Redirect from='/booking' to='/profile/authenticate' />
    }

    console.log(this.props);

    let departureLocationSelect = "";
    console.log(this.state.displayCalendar);
    console.log(this.state.departureLocationAirports);
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

    console.log(this.state);
    console.log(this.state.dates);
    return (
      <div>
        <img id="hero" src={earth} alt="earth" />
        <h1 className="booking-title">ADVENTURE STARTS HERE</h1>
        {this.state.display === "bookTrip" ? (
          <section className="booking-inputs">
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
              <label>Dates</label>
              {this.state.displayCalendar === "hide" ? (
                <div
                  onClick={e => this.toggleCalendar("display")}
                  className="trip-dates"
                >
                  <p>Select travel dates</p>
                  <img id="select" src={select} alt="select arrow" />
                  {this.state.dates &&
                    Moment(this.state.dates.startDate._d).format("MMM Do YYYY")}
                      {this.state.dates && <p>-----</p>}
                  {this.state.dates &&
                    Moment(this.state.dates.endDate._d).format("MMM Do YYYY")}
                </div>
              ) : (
                <div>
                  <button
                    className="trip-dates"
                    onClick={e => this.toggleCalendar("hide")}
                  >
                    Confirm Dates
                  </button>

                  <DateRange
                    onInit={this.handleSelect}
                    onChange={this.handleSelect}
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
            <h1>{this.state.departureAirport}</h1>

            <h1>{this.state.destinationPlanet}</h1>

            <h1>{this.state.time}</h1>

            <h1>{this.state.passenger_qty}</h1>

            <h1>
              {this.state.dates &&
                Moment(this.state.dates.startDate._d).format("MMM Do YYYY")}
              -
              {this.state.dates &&
                Moment(this.state.dates.endDate._d).format("MMM Do YYYY")}
            </h1>
           
              <div className="btn-container">
                <div
                  onClick={e => this.handleToggle("bookTrip")}
                  className="discover-btn effect01"
                >
                  BACK
                </div>
              </div>

              <div className="btn-container">
                <div
                  className="discover-btn effect01"
                  onClick={() => this.bookTrip()}
                >
                  BOOK TRIP
                </div>
              </div>
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
