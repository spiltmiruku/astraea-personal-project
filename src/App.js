import React from 'react';
import './reset.css';
import './App.css';
import { withRouter } from 'react-router-dom';
import Header from './Components/Header/Header';
import routes from './routes';

function App() {
  return (
    <div className="App border-on">
      <Header />
      {routes}
    </div>
  );
}

export default withRouter(App);