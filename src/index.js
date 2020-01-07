import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { StripeProvider } from 'react-stripe-elements';
import store from "./redux/store";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
require('dotenv').config();
const { REACT_APP_STRIPE_KEY } = process.env;

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
        <StripeProvider apiKey={REACT_APP_STRIPE_KEY} >
        <App />
        </StripeProvider>
    </HashRouter>
  </Provider>, document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
