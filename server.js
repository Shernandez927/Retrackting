// Imports Inquirer npm, connection to sql, console.table npm, asciiart-logo npm
const inquirer = require("inquirer");
require("console.table");
const logo = require("asciiart-logo");
const { Helpers } = require("./helpers/index");

// Displays AsciiArt logo
init = () => {
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

// Beginning Inquirer Prompt asking user what task to start with
beginPrompt = () => {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to do?",
        name: "promptChoice",
        choices: [
          "View All Employees",
          "Add New Employee",
          "Delete Employee",
          "Update Employee Role",
          "Add Role",
          "Delete Role",
          "View All Departments",
          "Add Department",
          "Delete Department",
          "Quit",
        ],
      },
    ])
    .then((res) => {
      // Switch Statement to determine which function to run based on inquirer choice
      switch (res.promptChoice) {
        case "View All Employees":
          Helpers.viewAllEmployees();
          break;
        case "Add New Employee":
          Helpers.addEmployee();
          break;
        case "Delete Employee":
          Helpers.deleteEmployee();
          break;
        case "Update Employee Role":
          Helpers.updateRole();
          break;
        case "Add Role":
          Helpers.newRole();
          break;
        case "Delete Role":
          Helpers.deleteRole();
          break;
        case "View All Departments":
          Helpers.viewAllDepartments();
          break;
        case "Add Department":
          Helpers.newDepartment();
          break;
        case "Delete Department":
          Helpers.deleteDepartment();
          break;
        default:
          quit();
      }
    });
};

// Function to "quit" or terminate Node.js process
const quit = () => {
  console.log("Thanks for stopping by! 👋 ");
  process.exit();
};

init();
