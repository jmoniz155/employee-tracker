DROP DATABASE IF EXISTS wallmart_db;
CREATE DATABASE wallmart_db;
USE wallmart_db;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30),
);

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL,
    FOREIGN KEY (department_id),
    REFERENCES role(id),
    ON DELETE SET NULL
);

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
