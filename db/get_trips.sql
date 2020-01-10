-- SELECT * FROM astraea_bookings
-- WHERE user_id = $1;

SELECT * FROM astraea_users u 
JOIN astraea_bookings b ON u.user_id = b.user_id
WHERE b.user_id = $1;