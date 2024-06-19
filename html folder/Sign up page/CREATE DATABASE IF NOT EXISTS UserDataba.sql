CREATE DATABASE IF NOT EXISTS UserDatabase;

-- Use the 'UserDatabase'
USE UserDatabase;

-- Create a table named 'Users'
CREATE TABLE IF NOT EXISTS Users (
    UserID INT AUTO_INCREMENT PRIMARY KEY,
    FirstName VARCHAR(John) NOT NULL,
    LastName VARCHAR(Doe) NOT NULL,
    Email VARCHAR(john.doe@example.com) NOT NULL UNIQUE,
    Password VARCHAR(password123) NOT NULL
);