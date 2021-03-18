CREATE TABLE IF NOT EXISTS roles (
	id int GENERATED ALWAYS AS IDENTITY,
	role varchar(60) NOT NULL,
	account_id int UNIQUE REFERENCES accounts (id),
	PRIMARY KEY (id)
);

INSERT INTO roles (role) VALUES
('Administrator'),
('User');