// TODO: Import and require mysql2
const mysql = require("mysql2");
const inquirer = require("inquirer");
require("console.table");


const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'Pw4je$$e',
    database: 'employees_db',
});

function viewAllDepartments() {
  return db
    .promise()
    .query("SELECT * FROM department;")
    .then(([rows]) => {
      console.table(rows);
      return generalMenu();
    })
      
    .catch(console.log);
};

function viewAllRoles() {
  return db
    .promise()
    .query( "SELECT role.id, title, name AS department, salary from role JOIN department on role.department_id = department.id;")
      .then(([rows]) => {
       console.table(rows);
       return generalMenu();
      })
      
      .catch(console.log);
          
};

function viewAllEmployee() {
  return db
    .promise()
    .query(
     `select
     a.id, 
     CONCAT(a.first_name, " ", a.last_name) AS name,
     CONCAT(b.first_name, " ", b.last_name) AS manager,
     role.title as role, 
     role.salary, 
     department.name as department
     from employee AS a LEFT JOIN AS b
     ON a.manager_id = b.id
     JOIN role on a.role_id = role.id
     JOIN department on role.department_id = department.id;`
  )

  .then(([rows]) => {
    console.table(rows);
    return generalMenu();
  })

  .catch(console.log);
};

  
function addDepartment() {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "deptName",
        message: "What is the name of the Department?",
      },
    ])
    .then((answer) => {
      return db
        .promise()
        .query('insert into department set ?', [{name: answer.deptName}])
        .then(() => {
          console.log("Department added!");
          return generalMenu();
        });
    });
};

function addRole() {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "roleName",
        message: "What is the name of the Role?",
      },
      {
        type: "input",
        name: "salary",
        message: "What is the salary of the Role?",
      },
      {
      type: "input",
       name: "department",
       message: "What is the Department ID of the Role?",
      },
    ])
    .then((answer) => {
      return db
        .promise()
        .query(`insert into role set ?;`, [{title: answer.roleName, salary: answer.salary, department_id: answer.department} ])
        .then(() => {
          console.log("Role added!");
          return generalMenu();
        });
    });
}

function addEmployee() {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "firstName",
        message: "What is the first name of the employee?",
      },
      {
        type: "input",
        name: "lastName",
        message: "What is the last name of the employee?",
      },
      {
      type: "input",
       name: "roleId",
       message: "What is the Role ID of the employee?",
      },
      {
        type: "input",
         name: "managerId",
         message: "What is the Manager ID of the employee?",
        },
    ])
    .then((answer) => {
      return db
        .promise()
        .query(`insert into employee set ?;`, [{first_name: answer.firstName, last_name: answer.lastName, role_id: answer.roleId, manager_id: answer.managerId} ])
        .then(() => {
          console.log("Employee added!");
          return generalMenu();
        });
    });
}

function generalMenu() {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "generalMenu",
        message: "What would you like to do?",
        choices: [
          "View All Departments",
          "View All Roles",
          "View All Employees",
          "Add a Department",
          "Add a Role",
          "Add an Employee",
          "Update an Employee Role",
          "Exit App",
        ],
      },
    ])
    .then((answer) => {
      switch (answer.generalMenu) {
        case "View All Departments":
          viewAllDepartments();
          break;
        case "View All Roles":
          viewAllRoles();
          break;
        case "View All Employees":
          viewAllEmployee();
          break;
        case "Add a Department":
          addDepartment();
          break;
        case "Add a Role":
          addRole();
          break;
        case "Add an Employee":
          addEmployee();
          break;
        case "Update an Employee Role":
          break;
        default:
          db.end();
          console.log("Have a Nice Day Good bye!");
      }
    });
}

console.log("Welcome to the Employee Database!");
       generalMenu();












