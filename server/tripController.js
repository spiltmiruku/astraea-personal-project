module.exports = {
    bookTrip: (req, res) => {
        console.log(req.body)
        const { departure_airport,
                destination_planet,
                flight_time,
                departure_date,
                return_date,
                passenger_qty,
                user_id } = req.body;
                const db = req.app.get('db');
                db.book_trip({ 
                    departure_airport,
                    destination_planet,
                    flight_time,
                    departure_date,
                    return_date,
                    passenger_qty,
                    user_id })
        .then(response => res.sendStatus(200))
        .catch(err => console.log(err))
    },
    getTrips: (req, res) => {
        console.log(req.params)
        const {user_id} = req.params;
        const db = req.app.get('db');
        db.get_trips(user_id).then( trip => {
            res.status(200).send(trip)
        })
        .catch(err => res.status(500).send(err))
    },


    editTrip: (req, res) => {
        const {id} = req.params;
        let { departure_airport,
            destination_planet,
            flight_time,
            departure_date,
            return_date,
            passenger_qty,
            user_id } = req.body;
        
        const db = req.app.get('db');
        db.edit_trip({
            id, 
            departure_airport,
            destination_planet,
            flight_time,
            departure_date,
            return_date,
            passenger_qty,
            user_id }).then( trip => {
            res.status(200).send(trip)
        })
    },

    deleteTrip: (req, res) => {
        let index = null
        trips.forEach((trip, i) => {
            if(trip.id === +req.params.id) index = i
        })
        trips.splice(index, 1)
        res.status(200).send(trips)
    }
};



    // editTrip: (req, res) => {
    //     let index = null
    //     this.getTrips.forEach((trip, i) => {
    //         if(trip.id === +req.query.id) index = i
    //     })
    //    let { departure_airport, destination_planet, flight_time, flight_date } = req.body;
    //     trips[index] = {
    //         id: trips[index].id,
    //         departure_airport: departure_airport || trips[index].departure_airport,
    //         destination_planet: destination_planet || trips[index].destination_planet,
    //         flight_time: flight_time || trips[index].flight_time,
    //         flight_date: flight_date || trips[index].flight_date,
    //     }
    //     res.status(200).send(trips)
    // },