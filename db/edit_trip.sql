UPDATE astraea_bookings
SET 
    departure_airport = ${departure_airport}, 
    destination_planet = ${destination_planet},
    flight_time = ${flight_time},
    departure_date = ${departure_date},
    return_date = ${return_date},
    passenger_qty = ${passenger_qty}
WHERE id = ${id}
SELECT * FROM astraea_bookings WHERE user_id = ${user_id};