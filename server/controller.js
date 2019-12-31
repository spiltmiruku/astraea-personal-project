const axios = require("axios");
import AIRPORT_API from '../src/'

const apiurl =
  "https://cometari-airportsfinder-v1.p.rapidapi.com/api/airports/by-text?text=";

module.exports = {
  getAirports: (req, res) => {
    axios
      .get(apiurl + req.query.name, {
        headers: {
          AIRPORT_API
        }
      })
      .then(res2 => {
          // console.log(res2.data)
        res.status(200).send(res2.data);
      })
      .catch(error => console.log(error));
  }
};