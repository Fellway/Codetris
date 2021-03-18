CREATE TABLE IF NOT EXISTS settings (
	id int GENERATED ALWAYS AS IDENTITY,
	theme varchar(80) NOT NULL,
	account_id int UNIQUE REFERENCES accounts (id),
	PRIMARY KEY (id)
);