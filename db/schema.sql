DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;
USE employee_db;

DROP TABLE IF EXISTS managers;
DROP TABLE IF EXISTS employees;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS departments;

CREATE TABLE employees (
    employee_id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT,
    PRIMARY KEY (employee_id)
);

CREATE TABLE managers (
    captain_id INT NOT NULL AUTO_INCREMENT,
    manage_first VARCHAR(30),
    Manage_last VARCHAR(30),
    salary DECIMAL(10,2),
    PRIMARY KEY (captain_id)
);

CREATE TABLE roles (
    job_id INT NOT NULL AUTO_INCREMENT,
    job_title VARCHAR(30),
    salary DECIMAL(10,2),
    department_id INT,
    PRIMARY KEY (job_id)
);

CREATE TABLE departments (
    dep_id INT NOT NULL AUTO_INCREMENT,
    department_name VARCHAR(30) NOT NULL,
    PRIMARY KEY (dep_id)
);