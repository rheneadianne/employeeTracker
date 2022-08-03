// GIVEN a command-line application that accepts user input
// WHEN I start the application
// THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
// WHEN I choose to view all departments
// THEN I am presented with a formatted table showing department names and department ids
// WHEN I choose to view all roles
// THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
// WHEN I choose to view all employees
// THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
// WHEN I choose to add a department
// THEN I am prompted to enter the name of the department and that department is added to the database
// WHEN I choose to add a role
// THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
// WHEN I choose to add an employee
// THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and their new role and this information is updated in the database

const mysql = require('mysql2');
const inquirer = require('inquirer')
const cTable = require('console.table');
require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    port: '3306',
    database: 'employee_db'
  });

connection.connect(() => mainMenu())

const mainMenu = () => {
    return inquirer
    .prompt([
        {
            type: "list",
            name: "mainMenu",
            choices: [
                "View",
                "Update",
                "Add",
                "Delete",
                "Quit"
            ]
        }
    ])
    .then ( response => {
        let subMenu = response.mainMenu

        subMenu === "View"?
            viewMenu():
        subMenu === "Update"?
            updateMenu():
        subMenu === "Add"?
            addMenu():
        subMenu === "Delete"?
            deleteMenu():
        db.end()
    })
}

const viewMenu = () => {
    return inquirer
    .prompt ([
        {
            type: "list",
            name: "viewMenu",
            choices: [
                "View all employees",
                "View all roles",
                "View all departments",
                "View employees by role",
                "View employees by department",
                "View employees by manager"
            ]
        }
    ])
    .then(response => {
        let subViewMenu = response.viewMenu

        subViewMenu === "View all employees"?
            viewAll():
        subViewMenu === "View all roles"?
            viewRoles():
        subViewMenu === "View all departments"?
            viewDepartments():
        subViewMenu === "View employees by role"?
            viewByRoles():
        subViewMenu === "View employees by department"?
            viewByDepartment():
        viewByManager()
    })
}

const updateMenu = () => {
    return inquirer
    .prompt ([
        {
            type: "list",
            name: "updateMenu",
            choices: [
                "Update employee",
                "Update role",
                "Update department",
                "Update manager",
            ]
        }
    ])
    .then(response => {
        let subUpdateMenu = response.updateMenu

        subUpdateMenu === "Update employee"?
            updateAll():
        subUpdateMenu === "Update role"?
            updateRoles():
        subUpdateMenu === "Update department"?
            updateDepartments():
        updateManager()
    })
}

const addMenu = () => {
    return inquirer
    .prompt ([
        {
            type: "list",
            name: "addMenu",
            choices: [
                "Add employee",
                "Add role",
                "Add department",
                "Add manager",
            ]
        }
    ])
    .then(response => {
        let subAddMenu = response.addMenu

        subAddMenu === "Add employee"?
            addAll():
        subAddMenu === "Add role"?
            addRoles():
        subAddMenu === "Add department"?
            addDepartments():
        addManager()
    })
}

const deleteMenu = () => {
    return inquirer
    .prompt ([
        {
            type: "list",
            name: "addMenu",
            choices: [
                "Delete employee",
                "Delete role",
                "Delete department",
                "Delete manager",
            ]
        }
    ])
    .then(response => {
        let subDeleteMenu = response.addMenu

        subDeleteMenu === "Delete employee"?
            deleteAll():
        subDeleteMenu === "Delete employee"?
            deleteRoles():
        subDeleteMenu === "Delete employee"?
            deleteDepartments():
        deleteManager()
    })
}