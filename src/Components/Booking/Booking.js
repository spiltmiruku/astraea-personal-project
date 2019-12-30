import React, { Component } from "react";
import axios from "axios";

class Booking extends Component {
  constructor() {
    super();
    this.state = {
      departure: "",
      departureLocationAirports: [],
      destination: "",
      destinationLocations: [],
      date: "",
      time: "",
      passengers: 1
    };
    this.add = this.add.bind(this);
    this.handleAirportSearch = this.handleAirportSearch.bind(this);
  }

  handleAdd(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleAirportSearch(location) {
      console.log('searching', location)
    axios.get("/api/airports?name=" + this.state[location]).then(res => {
      console.log(res.data);
      this.setState({
        [`${location}LocationAirports`]: res.data,
        [`${location}Airport`]: res.data[0].code 
      });
    });
  }

  add() {
    let flight = { ...this.state };
    console.log(flight);
    this.props.addFlight(flight);

    this.setState({
      departure: "",
      departureLocationAirports: [],
      destination: "",
      destinationLocations: [],
      date: "",
      time: "",
      passengers: this.state.passengers
    });
  }

  render() {
    let departureLocationSelect = "";
    console.log(this.state.departureLocationAirports)
    if (this.state.departureLocationAirports.length) {
      departureLocationSelect = (
        <select
          onChange={e => this.handleAdd(e)} 
          name="departure" 
          id="departure" 
        >
          {this.state.departureLocationAirports.map(airport => (
            <option key={airport.code} value={airport.code}>
              {airport.code} - {airport.name}
            </option>
          ))}
        </select>
      );
      
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
        <section className="booking-inputs">

            <div className='departureSearch'>

          <label>Departure</label>
          <input
            onChange={e => this.handleAdd(e)}
            value={this.state.departure}
            type="text"
            name="departure"
            placeholder="Departure"
            />
          <button
            className="searchAirports" 
            onClick={() => this.handleAirportSearch("departure")} 
            name='departureSearch'
            >
            Search Airports
          </button>
            </div>
          {departureLocationSelect}
        

          {/* <label>Destination</label>
          <input onChange={e => this.handleAdd(e)} value={this.state.destination} type="text" name="destination" placeholder="Destination" />
          <button className='searchDestinations'
            onClick={() => this.handleDestinationSearch('destination')}>
              Search Destinations
          </button>

            {destinationLocationSelect} */}


          <label>Dates</label>
          <input type="date" name="date" />
          <label>Time</label>
          <input type="time" name="time" />
          <label>Passengers</label>
          <input
            type="number"
            name="passenger"
            placeholder="1"
            min="1"
            max="20"
          />
          <input className="reset-btn" type="reset" name="reset" />
          <button className="book-now" type="submit" name="book-now">
            BOOK TRIP
          </button>
        </section>
      </div>
    );
  }
}

export default Booking;
