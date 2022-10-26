import inquirer from "inquirer";
// const mysql = require("mysql2");
// const cTable = require("console.table");
import logo from "asciiart-logo";
// const db = require("./connection/connection");
import { viewAllEmployees, addEmployee, updateRole, newRole, viewAllDepartments, newDepartment } from "../helpers/index";

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

export default function beginPrompt() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to do?",
        name: "promptChoice",
        choices: [
          "View All Employees",
          "Add New Employee",
          "Update Employee Role",
          "Add Role",
          "View All Departments",
          "Add Department",
          "Quit",
        ],
      },
    ])
    .then((res) => {
      // Switch Statement to determine which function to run based on inquirer choice
      switch (res.promptChoice) {
        case "View All Employees":
          viewAllEmployees();
          break;
        case "Add New Employee":
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

// module.exports = beginPrompt();
