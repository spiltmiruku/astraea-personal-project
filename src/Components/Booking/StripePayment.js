import React, { Component } from "react";
// import { CardElement } from "react-stripe-elements";
import StripeCheckout from 'react-stripe-checkout';
import axios from "axios";

class StripePayment extends Component {
  constructor() {
    super();
    this.state = {
    //   amount: ,
    
    };
  }

  onOpened = () => {
    console.log("open");
  };

  onClosed = () => {
    console.log("closed");
  };

  onToken = token => {
    console.log(token);
    let { amount } = this.state;
    amount /= 100;
    console.log(amount);
    token.card = void 0;
    axios
      .post("/api/payment", { token, amount: this.state.amount })
      .then(res => {
        console.log(res);
        alert(`Payment of ${amount} has been submitted`);
      });
  };
  render() {
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
        //   image={}
          description="Thank you for choosing ASTRAEA" //subtitle - beneath header
          stripeKey={process.env.REACT_APP_STRIPE_KEY} //public key not secret key
          token={this.onToken} //fires the call back
          amount={this.state.amount} //this will be in cents
          currency="USD"
          // image={imageUrl} // the pop-in header image (default none)
          // ComponentClass="div" //initial default button styling on block scope (defaults to span)
          panelLabel="Submit Payment" //text on the submit button
          locale="en" //locale or language (e.g. en=english, fr=french, zh=chinese)
          opened={this.onOpened} //fires cb when stripe is opened
          closed={this.onClosed} //fires cb when stripe is closed
          allowRememberMe // "Remember Me" option (default true)
          billingAddress={false}
          // shippingAddress //you can collect their address
          zipCode={true}
        >
          {/* <button>Checkout</button> */}
        </StripeCheckout>
        <input
          value={this.state.amount}
          type="number"
          onChange={e => this.setState({ amount: +e.target.value })}
        />
      </div>
    );
  }
}


export default StripePayment;




// const style = {
//   base: {
//     color: "#32325d",
//     fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
//     fontSmoothing: "antialiased",
//     fontSize: "16px",
//     "::placeholder": {
//       color: "#aab7c4"
//     }
//   },
//   invalid: {
//     color: "#fa755a",
//     iconColor: "#fa755a"
//   }
// };

// const CardSection = () => {
//   return (
//     <label>
//       Card details
//       <CardElement className='MyCardElement' style={style} />
//     </label>
//   );
// };

// export default CardSection;
