USE restapi;

CREATE TABLE IF NOT EXISTS fileDetails (
	file_id		INT 	AUTO_INCREMENT 	PRIMARY KEY,
	file_name	CHAR(20),
	creation_date   DATETIME 

);

CREATE TABLE IF NOT EXISTS dirDetails (
	dir_id		INT 	AUTO_INCREMENT 	PRIMARY KEY,
	dir_name	CHAR(20)
	
);

CREATE TABLE IF NOT EXISTS userDetails (
	user_id		INT 	AUTO_INCREMENT ,
	user_name	CHAR(20),
	first_name 	CHAR(20)	NOT NULL,
	last_name	CHAR(20)	NOT NULL,
	password	 VARBINARY(128)    NOT NULL,
	contact_no	 CHAR(15)    NOT NULL,
	PRIMARY KEY(userd_id,user_name)
);

CREATE TABLE IF NOT EXISTS accessDetails (
	access_code		INT 	AUTO_INCREMENT 	PRIMARY KEY,
	access_privilege	CHAR(20) NOT NULL UNIQUE 
	
);

CREATE TABLE IF NOT EXISTS dir_file_association (
	dir_id		INT, 
	file_id		INT,
	PRIMARY KEY(dir_id,file_id),
	FOREIGN KEY (dir_id) REFERENCES dirDetails(dir_id),
	FOREIGN KEY (file_id) REFERENCES fileDetails(file_id)
	
);

CREATE TABLE IF NOT EXISTS user_access_control (
	dir_id		INT, 
	file_id		INT,
	access_code	INT, 
	PRIMARY KEY(dir_id,file_id,access_code),
	FOREIGN KEY (dir_id) REFERENCES dirDetails(dir_id),
	FOREIGN KEY (file_id) REFERENCES fileDetails(file_id),
	FOREIGN KEY (access_code) REFERENCES accessDetails(access_code)
		
);

