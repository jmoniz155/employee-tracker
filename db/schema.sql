-- Create DataBase For Bicycle Shop --
DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;
USE employees_db;

-- Create Department --
CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30),
    PRIMARY KEY (id)
);

-- Create Role --
CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL,
    FOREIGN KEY (department_id)
    
);

-- Create Employee -- 
CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30);
    last_name VARCHAR(30);
    role_id INT NOT NULL,
    manager_id INT NOT NULL,
    FOREIGN KEY (role_id),
    REFERENCES employee(id),
    ON DELETE SET NULL
);
