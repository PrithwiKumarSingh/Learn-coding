CREATE DATABASE quizdb;
USE quizdb;

CREATE TABLE questions (
    id INT PRIMARY KEY AUTO_INCREMENT,
    question TEXT,
    option1 VARCHAR(100),
    option2 VARCHAR(100),
    option3 VARCHAR(100),
    option4 VARCHAR(100),
    correct INT
);


INSERT INTO questions (question, option1, option2, option3, option4, correct)
VALUES
('Which language is used for web development?', 'Java', 'Python', 'HTML', 'C++', 3),
('Which is not an OS?', 'Windows', 'Linux', 'Oracle', 'MacOS', 3),
('Which keyword is used in Java for inheritance?', 'this', 'super', 'extends', 'implements', 3),
('Which data structure uses FIFO?', 'Stack', 'Queue', 'Tree', 'Graph', 2),
('Which company developed Java?', 'Microsoft', 'Apple', 'Sun Microsystems', 'Google', 3);