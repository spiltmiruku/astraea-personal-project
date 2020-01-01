module.exports = {
    bookTrip: (req, res) => {
        console.log(req.body)
        const { departure_airport,
                flight_time,
                flight_date,
                passenger_qty,
                user_id } = req.body;
                const db = req.app.get('db');
                db.book_trip({ 
                    departure_airport,
                    destination_planet,
                    flight_time,
                    flight_date,
                    passenger_qty,
                    user_id })
        .then(response => res.sendStatus(200))
        .catch(err => console.log(err))
    },
    getTrips: (req, res) => {
        const {id} = req.params;
        const db = req.app.get('db');
        db.get_trips(id).then( trip => {
            res.status(200).send(trip)
        })
        .catch(err => res.status(500).send(err))
    }
}