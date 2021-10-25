// TODO: Import and require mysql2
const mysql = require("mysql2");
const inquirer = require("inquirer");

const PORT = process.env.PORT || 3001;
const app = inquirer();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// TODO: Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'Pw4je$$e',
    database: 'employees_db',
  },
);

