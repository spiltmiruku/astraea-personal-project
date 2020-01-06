module.exports = {
    bookTrip: (req, res) => {
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
        const {user_id} = req.params;
        const db = req.app.get('db');
        db.get_trips(user_id).then( trip => {
            res.status(200).send(trip)
        })
        .catch(err => res.status(500).send(err))
    },


    editTrip: (req, res) => {
        const {id} = req.query;
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
       let { id } = req.params;
       const db = req.app.get('db');
       db.delete_trip({
           id
       }).then( trip => { res.status(200).send({Message: 'Your trip has been removed'})
})}

}
