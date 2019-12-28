import React, { Component } from "react";

class Booking extends Component {
  constructor() {
    super();
    this.state = {
      depature: "",
      destination: "",
      date: "",
      time: "",
      passengers: 1
    };
  }

  render() {
    return (
      <div>
        <section className="booking-inputs">
          <label>Departure</label>
          <input type="text" name="departure" placeholder="Departure" />
          <label>Destination</label>
          <input type="text" name="destination" placeholder="Destination" />
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
