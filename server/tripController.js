module.exports = {
    bookTrip: (req, res) => {
        const { departure_airport,
                destination_planet,
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
        .then(res => res.sendStatus(200))
        .catch(err => res.status(500).send(err))
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