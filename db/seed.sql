CREATE TABLE astraea_users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(20) not null,
    email VARCHAR(100) not null,
    passenger_firstname VARCHAR(30) not null,
    passenger_lastname VARCHAR(30) not null
); 


CREATE TABLE astraea_user_passwords (
    password VARCHAR(200),
    user_id INTEGER REFERENCES astraea_users(user_id)
);


CREATE TABLE astraea_bookings (
    id SERIAL PRIMARY KEY,
    departure_airport TEXT,
    destination_planet TEXT,
    flight_time TIME,
    flight_date DATE,
    passenger_qty INTEGER,
    user_id INTEGER REFERENCES astraea_users(user_id)
);


-- Work in Progress

CREATE TABLE astraea_flights (
    id SERIAL PRIMARY KEY,
    destination_planet TEXT,
    flight_date DATE 
);


-- Bonus Feature: table has not been created yet

-- CREATE TABLE astraea_seat_assignment (
--     seat_assignment SERIAL PRIMARY KEY,
--     destination_planet TEXT,
--     flight_date DATE
-- );