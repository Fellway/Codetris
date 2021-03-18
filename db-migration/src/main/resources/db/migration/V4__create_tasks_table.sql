CREATE TABLE IF NOT EXISTS tasks (
	id int GENERATED ALWAYS AS IDENTITY,
	name varchar(60) NOT NULL UNIQUE,
	description text,
	priority varchar(40) NOT NULL,
	status varchar (60) NOT NULL,
	begin_date date NOT NULL,
	end_date date NOT NULL,
	reporter int REFERENCES employees (id),
	assigned int REFERENCES employees (id),
	PRIMARY KEY (id)
);

ALTER TABLE accounts
	RENAME COLUMN login_attemps TO login_attempts;