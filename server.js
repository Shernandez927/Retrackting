const inquirer = require("inquirer");
// const mysql = require("mysql2");
// const cTable = require("console.table");
const logo = require("asciiart-logo");
// const db = require("./connection/connection");
const { viewAllEmployees, addEmployee, updateRole, newRole, viewAllDepartments, newDepartment } = require("./helpers/index");
const init = () => {
  console.log(
    logo({
      name: "Employee Tracker",
      logoColor: "bold-cyan",
      borderColor: "bold-yellow",
      lineChars: 6,
      padding: 1,
      margin: 2,
    }).render()
  );
  beginPrompt();
};

const beginPrompt = () => {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to do?",
        name: "promptChoice",
        choices: [
          {name: "View All Employees", value: "viewAllEmployees"},
          {name: "Add New Employee", value: "addNewEmployee"},
          {name: "Update Employee Role", value: "updateEmployeeRole"},
          {name: "Add Role", value: "addRole"},
          {name: "View All Departments", value: "viewAllDepartments"},
          {name: "Add Department", value: "addDepartment"},
          "Quit",
        ],
      },
    ])
    .then((res) => {
      let choice = res.choice;
      // Switch Statement to determine which function to run based on inquirer choice
      switch (choice) {
        case "viewAllEmployees":
          viewAllEmployees();
          break;
        case "Add new Employee":
          addEmployee();
          break;
        case "Update Employee Role":
          updateRole();
          break;
        case "Add Role":
          newRole();
          break;
        case "View All Departments":
          viewAllDepartments();
          break;
        case "Add Department":
          newDepartment();
          break;
        default:
          quit();
      }
    });
};

const quit = () => {
  console.log("Thanks for stopping by! 👋 ");
  process.exit();
};

init();
