const inquirer = require("inquirer");
const mysql = require("mysql2");
const cTable = require("console.table");
// require('dotenv').config();
const logo = require("asciiart-logo");

const init = () => {
  inquirer.prompt([
    {
      type: "list",
      message: "What would you like to do?",
      name: "test",
      choices: [
        "View All Employees",
        "Add new Employee",
        "Update Employee Role",
        "Add Role",
        "View All Departments",
        "Add Department",
        "Quit"
      ]
    }
  ]);
};

init();
