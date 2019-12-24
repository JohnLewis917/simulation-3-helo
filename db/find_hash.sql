SELECT * FROM helo_register
JOIN helo_register_hash ON helo_register.id = helo_register_hash.user_id
WHERE username = $1;