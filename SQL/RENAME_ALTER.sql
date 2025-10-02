CREATE DATABASE startersql;
USE startersql;
CREATE TABLE users(
	id 	INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    Email VARCHAR(100) UNIQUE NOT NULL,
    Gender ENUM('Male', 'Female', 'Other'),
    date_of_birth DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

-- Show columns
SELECT * FROM users;

-- show specific columns
SELECT name, Email FROM users;

-- Delete Databases
DROP DATABASE startersql;

-- Renaming a Table
RENAME TABLE users to Programmer;
SELECT * FROM Programmer;
RENAME TABLE Programmer to users;

-- Altering a Table

-- ADD a Column
ALTER TABLE users ADD COLUMN is_active BOOLEAN DEFAULT TRUE;
SELECT * FROM users;

-- Drop a Column 
ALTER TABLE users DROP COLUMN is_active;
SELECT * FROM users;

-- Move a Column to the Fist Position E

ALTER TABLE users MODIFY COLUMN Email VARCHAR(100) FIRST;
ALTER TABLE users MODIFY COLUMN id INT FIRST;

ALTER TABLE users MODIFY COLUMN Gender ENUM('Male', 'Female', 'Other') AFTER NAME;
ALTER TABLE users MODIFY COLUMN Email VARCHAR(100) AFTER Gender;


-- Inserting Data into MySQL Tables

INSERT INTO users VALUES
(2, 'ADARSH', 'Male', 'ADARSH@gmail.com', '2004-05-29', DEFAULT),
(3,'AMAN', 'Male', 'AMAN@gmail.com', '2004-04-20', DEFAULT);

INSERT INTO users (id, name, Email, Gender, date_of_birth) VALUES
(4,'Charlie', 'charlie@example.com', 'Other', '1988-02-17'),
(5,'David', 'david@example.com', 'Male', '2000-08-09'),
(6,'Eva', 'eva@example.com', 'Female', '1993-12-30');
SELECT * FROM users;




