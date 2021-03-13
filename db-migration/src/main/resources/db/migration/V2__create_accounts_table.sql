CREATE TABLE IF NOT EXISTS accounts (
	id int GENERATED ALWAYS AS IDENTITY,
	login varchar(60) NOT NULL UNIQUE,
	password varchar(255) NOT NULL,
	email varchar(255) NOT NULL UNIQUE,
	date_of_registration date NOT NULL,
	login_attemps int NOT NULL,
	isonline bool default false,
	last_login timestamp,
	photo varchar(255),
	employee_id int REFERENCES employees (id),
	PRIMARY KEY (id)
);