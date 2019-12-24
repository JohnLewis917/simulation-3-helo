create table helo_register(
id serial primary key,
username varchar(35), 
password varchar(35),
profile_img text  
);

alter table helo_register
alter column password
type text

create table helo_register_hash (
hash_id serial primary key,
hash text,
user_id int references helo_register(id)
)