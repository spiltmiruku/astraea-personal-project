INSERT INTO astraea_bookings (
    departure_airport,
    destination_planet,
    flight_time,
    departure_date,
    return_date,
    passenger_qty,
    user_id
) VALUES (
    ${departure_airport},
    ${destination_planet},
    ${flight_time},
    ${departure_date},
    ${return_date},
    ${passenger_qty},
    ${user_id}
);