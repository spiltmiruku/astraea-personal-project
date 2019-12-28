const axios = require("axios");

const apiurl =
  "https://cometari-airportsfinder-v1.p.rapidapi.com/api/airports/by-text?text=";

module.exports = {
  getAirports: (req, res) => {
    axios
      .get(apiurl + req.query.name, {
        headers: {
          "x-rapidapi-host": "cometari-airportsfinder-v1.p.rapidapi.com",
          "x-rapidapi-key": "a2bdc698damsh422c76d408ceb2ap1fbb59jsn51640f52b309"
        }
      })
      .then(res2 => {
          console.log(res2.data)
        res.status(200).send(res2.data);
      })
      .catch(error => console.log(error));
  }
};
