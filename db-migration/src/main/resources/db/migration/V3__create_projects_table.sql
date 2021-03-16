CREATE TABLE IF NOT EXISTS projects (
	id int GENERATED ALWAYS AS IDENTITY,
	name varchar(120) NOT NULL UNIQUE,
	description varchar(255),
	avatar varchar(255),
	priority varchar(40) NOT NULL,
	begin_date date NOT NULL,
	end_date date NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS employee_project(
	employee_id int REFERENCES employees (id),
 	project_id int REFERENCES projects (id),
  	CONSTRAINT id PRIMARY KEY (employee_id, project_id)
);