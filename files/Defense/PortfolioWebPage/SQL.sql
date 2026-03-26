CREATE DATABASE College;
CREATE DATABASE IF NOT EXISTS College;
use College;

CREATE TABLE student(
	 id INT PRIMARY KEY,
    User_name VARCHAR(50),
    age INT NOT NULL
    );

INSERT INTO student VALUE(1, "Prithwi", 21);
INSERT INTO student VALUE(2, "Aman", 32);

SELECT * FROM student;

SHOW DATABASES;
SHOW TABLES;




CREATE DATABASE XYZ;
use XYZ;

CREATE TABLE employee_info(
	id INT PRIMARY KEY,
    name VARCHAR(50),
    salary INT
);

INSERT INTO employee_info (id, name, salary) VALUES (1, "adam", 25000), (2, "bob", 30000), (3, "casey", 40000);

SELECT * FROM employee_info; 

use XYZ;
CREATE TABLE child(
	id INT, 
    name VARCHAR(50),
    PRIMARY KEY (id, name),
    salary INT DEFAULT 25000,
    FOREIGN KEY (Id) references employee_info(id)
    );

INSERT INTO child ( name) VALUES ("AMAN"), ("AMAN"), ("kenya");
DROP TABLE child;
show tables;
select * from child;



-- QUESTION PRACTICE 

DROP DATABASE IF EXISTS College;
CREATE DATABASE College;

USE College;

CREATE TABLE student (
	rollno INT PRIMARY KEY, 
    name VARCHAR(50),
    marks INT NOT NULL, 
    grade VARCHAR(1),
    city VARCHAR(20)
    );
    
INSERT INTO student (rollno, name, marks, grade, city) 
VALUES 
( 101, "anil", 78, "C", "Pune"),
( 102, "bhumika", 93, "A", "Mumbai"),
( 103, "chetan", 85, "B", "Mumbai"),
( 104, "dhruv", 96, "A", "Delhi"),
( 105, "Emanuel", 12, "F", "Delhi"),
( 106, "Farah", 82, "B", "Delhi");
    
select * from student;
select * from student where marks > 80 and city = "Delhi" and grade = "A";
select  city from student;

select * from student where marks+10 > 100; 
select * from student where marks > 89 and city = "delhi" or city = "mumbai";

select count(name) from student ;
select max(marks) from student; 
select min(marks) from student where city = "Mumbai";
select sum(marks) from student;
select avg(marks) from student;


-- Group By Clause 
select city, count(name) from student group by city;

SELECT city, avg(marks) FROM student GROUP BY city ORDER BY city ASC;
SELECT city, avg(marks) FROM student GROUP BY city ORDER BY avg(marks) ;



--  Practice Question 

CREATE DATABASE IF NOT EXISTS FinanceDetails;
use FinanceDetails;

CREATE TABLE IF NOT EXISTS payment(
	customer_id INT PRIMARY KEY, 
    customer VARCHAR(50) NOT NULL,
    mode VARCHAR(50) NOT NULL, 
    city VARCHAR(50) NOT NULL
    );
    
INSERT INTO payment (customer_id, customer, mode, city) VALUES
(101, "Olivia Barrett", "Netbanking", "Portland"),
(102, "Ethan Sinclair", "Credit Card", "Miami"),
(103, "Maya Harnandez", "Credit Card", "Seattle"),
(104, "Liam Donovan", "Netbanking", "Denver"),
(105, "Sophia Nguyen", "Credit Card", "New Orleans"),
(106, "Caleb Foster", "Debit Card", "Minneapolis"),
(107, "Ava Patel", 'Debit Card', "Phoenix"),
(108, "Lucas Carter", "Netbanking", "Boston"),
(109, "Isabella Martinez", "Netbanking", "Nashville"),
(110, "Jackson Brooks", "Credit Card", "Boston");


select * from payment;
drop table payment;
select mode, count(mode) from payment GROUP BY mode order by count(mode) DESC  ;

use College;
use FinanceDetails;
select customer, mode from payment where mode = "Netbanking";
select grade, count(name) from student GROUP BY grade ORDER BY grade; 


SET SQL_SAFE_UPDATES = 0; 
UPDATE student SET grade = "O" WHERE grade =  "A";
update student set marks = 12 where rollno = 105 ;
select * from student;

-- Delete 
DELETE FROM student WHERE marks < 30; 



show databases; 
use College;

create table if not exists dept(
	id INT PRIMARY KEY, 
    name VARCHAR(100)
);

DROP TABLE dept;
DROP TABLE teacher;

insert into dept values (101, "science"), (102, "English"), (103, "Hindi");

UPDATE dept 
SET id = 104
WHERE id = 103;

create table if not exists teacher(
	id INT PRIMARY KEY,
    name VARCHAR(100),
    dept_id INT, 
    FOREIGN KEY (dept_id) REFERENCES dept(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

INSERT INTO teacher
VALUES
(101, "Adam", 101),
(102, "Bob", 103),
(103, "Casay", 102),
(104, "Donald", 102);

select * from department; 
select * from teacher;
    

alter table dept ADD COLUMN age int;
alter table dept drop column age;
alter table dept rename to department;

alter table department change column name s_name varchar(100);

alter table department add column age int not null default 19;
alter table department modify age VARCHAR(2); 
insert into department values(105, "Programing", 350);
alter table department modify age int;
DELETE FROM department WHERE id = 105;
alter table department change age d_time INT;
alter table department drop d_time;
select * from department;
alter table department rename dept;
select * from dept;


select * from student;
alter table student change name full_name varchar(100);
delete from student where marks < 80;
SET SQL_SAFE_UPDATES = 0;
alter table student drop column grade;










