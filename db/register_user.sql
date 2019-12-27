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
);

INSERT INTO astraea_user_passwords (
    user_id,
    password
) VALUES (
    lastval(),
    ${password}
);

RETURNING *;