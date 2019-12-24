INSERT INTO astraea_users (
    username,
    email,
    passenger_firstname,
    passenger_lastname
) VALUES (
    ${username},
    ${email},
    ${passenger_firstname},
    ${passenger_lastname}
)

RETURNING *;

-- HOW WOULD THE NEW USER CREATE A PASSWORD IF IT'S A DIFFERENT TABLE?!?!?!