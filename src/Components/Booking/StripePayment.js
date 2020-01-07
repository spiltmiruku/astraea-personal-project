import React, { Component } from "react";

import StripeCheckout from "react-stripe-checkout";
import './stripepayment.css';
import axios from "axios";

class StripePayment extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  onOpened = () => {
    // console.log("open");
  };

  onClosed = () => {
    // console.log("closed");
  };

  onToken = token => {
    console.log(token);
    let { amount } = this.props;
    amount /= 100;
    console.log(this.props.amount);
    token.card = void 0;
    // console.log(amount);
    axios
    .post("/api/payment", { token, amount: this.props.amount })
      .then(res => {
        console.log(res);
        alert(`Payment of ${amount} has been submitted`);
        this.props.bookTrip();
      });
  };
  render() {
      console.log(this.props)
      console.log(this.props.amount * this.props.passenger_qty)
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "50px"
        }}
      >
        <StripeCheckout
          name="Book Flight" //header
          style={{
            
          }}
          //   image={}
          description={"Thank you for choosing ASTRAEA"} //subtitle - beneath header
          stripeKey={process.env.REACT_APP_STRIPE_KEY} //public key not secret key
          token={this.onToken} //fires the call back
    
          amount={this.props.amount * +this.props.passenger_qty} //this will be in cents
          currency="USD"
          // image={imageUrl} // the pop-in header image (default none)
          // ComponentClass="div" //initial default button styling on block scope (defaults to span)
          panelLabel="Confirm Payment" //text on the submit button
          locale="en" //locale or language (e.g. en=english, fr=french, zh=chinese)
          opened={this.onOpened} //fires cb when stripe is opened
          closed={this.onClosed} //fires cb when stripe is closed
          allowRememberMe // "Remember Me" option (default true)
          billingAddress={false}
          // shippingAddress //you can collect their address
          zipCode={true}
          onClick={() => this.props.bookTrip()}
        >
          <div className="btn-container">
            <div
              className="discover-btn effect01"
            >
              BOOK TRIP
            </div>
          </div>
        </StripeCheckout>
      </div>
    );
  }
}

export default StripePayment;