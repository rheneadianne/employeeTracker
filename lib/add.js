// subViewMenu === "View all employees"?
//             viewAll():
//         subViewMenu === "View all roles"?
//             viewRoles():
//         subViewMenu === "View all departments"?
//             viewDepartments():
//         subViewMenu === "View employees by role"?
//             viewByRoles():
//         subViewMenu === "View employees by department"?
//             viewByDepartment():
//         subViewMenu === "View employees by manager"?
//             viewByManager():
//         mainMenu()

const viewAll = () => {
    connection.query(`SELECT captain_id FROM managers 
    LEFT JOIN employees 
    ON managers.captain_id = employees.employee_id
    LEFT JOIN`)
}