// TODO: Import and require mysql2
const mysql = require("mysql2");
const inquirer = require("inquirer");
const util = require("util");

//const PORT = process.env.PORT || 3001;
//const app = inquirer;



const connection = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'Pw4je$$e',
    database: 'employees_db',
  },
);

function viewAllDept(answer) {
  connection.promise().query("SELECT * FROM departments;")
    .then( ([rows]) => {
      console.table(rows);
    }).then(() => {generalMenu()})
    .catch(console.log);
};

function viewAllRoles(answer) {
  connection.promise().query("SELECT * FROM role;")
          .then( ([rows]) => {
            console.table(rows);
          }).then(() => {generalMenu()})
          .catch(console.log);
          
};

function viewAllEmployees(answer) {
  connection.promise().query(`select
  a.id,
  CONCAT(a.first_name, " ", a.last_name) AS name,
  CONCAT(b.first_name, " ", b.last_name) AS manager
from employee AS a LEFT JOIN employee AS b
on a.manager_id = b.id;;`)
          .then( ([rows]) => {
            console.table(rows);
          }).then(() => {generalMenu()})
          .catch(console.log);
};

function deptAdd(answer) {
  inquirer.prompt(
    [ {
      type: "input",
      name: "deptName",
      message: "What is the name of the Department?",
    }]
  ).then((answer) => {
    connection.promise().query(`insert into department (name) values ("${answer.deptName}");`)
    .then(() => { console.log("Department added!")})
    .then(() => {generalMenu()})
  });
};

function generalMenu() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "generalMenu",
        message: "What would you like to do?",
        choices: ["View All Departments", 
        "View All Roles", 
        "View All Employees", 
        "Add a Department", 
        "Add a Role", 
        "Add an Employee", 
        "Update an Employee Role",
      "Exit App"],
      },
    ])

    .then((answer) => {
      switch(answer.generalMenu) {
        case "View All Departments": viewAllDept(answer.generalMenu);
          break;
        case "View All Roles": viewAllRoles(answer.generalMenu);
          break;
        case "View All Employees": viewAllEmployees(answer.generalMenu);
          break;
        case "Add a Department": deptAdd(answer.generalMenu);
          break;
        case "Add a Role":
          break;
        case "Add an Employee":
          break;
        case "Update an Employee Role":
          break;
        case "Exit App": process.exit();
      }
    });
}

generalMenu();








connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
});

connection.query = util.promisify(connection.query);

module.exports = connection;


