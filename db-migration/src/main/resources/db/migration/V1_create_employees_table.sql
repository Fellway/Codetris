-- Database: codestris

-- DROP DATABASE codestris;

CREATE DATABASE codestris
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Polish_Poland.1250'
    LC_CTYPE = 'Polish_Poland.1250'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;
	
CREATE TABLE IF NOT EXISTS employees (
	id INT GENERATED ALWAYS AS IDENTITY,
	first_name varchar(50) NOT NULL,
	last_name varchar(60) NOT NULL,
	phone varchar(15) NOT NULL,
	address varchar(255) NOT NULL,
	date_of_birth date NOT NULL,
	gender varchar(30) NOT NULL,
	PRIMARY KEY (id),
	UNIQUE (phone)
);
	