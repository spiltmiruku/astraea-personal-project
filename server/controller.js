const axios = require("axios");
const { AIRPORT_API } = process.env;

const apiurl =
  "https://cometari-airportsfinder-v1.p.rapidapi.com/api/airports/by-text?text=";

module.exports = {
  getAirports: (req, res) => {
    axios
      .get(apiurl + req.query.name, {
        headers: {
          "x-rapidapi-host": "cometari-airportsfinder-v1.p.rapidapi.com",
          "x-rapidapi-key": AIRPORT_API
        }
      })
      .then(res2 => {
        // console.log(res2.data)
        res.status(200).send(res2.data);
      })
      .catch(error => {
        console.log(error)
        res.status(500).send(error);
      });
  }
};
