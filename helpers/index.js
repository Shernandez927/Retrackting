import db from "../connection/connection";
// const mysql = require("mysql2");
// const cTable = require("console.table");
import inquirer from "inquirer";
// const beginPrompt = require("../server");
import {beginPrompt} from "../server";


const viewAllEmployees = () => {
  db.query(
    `SELECT id, first_name, last_name, role_id, manager_id from employees`,
    function (err, results) {
      console.table(results);
    }
  ); beginPrompt();
};

const addEmployee = () => {
  console.log("done2");
  inquirer.prompt([
    {
      type: "input",
      message: "What's the employee's first name?",
      name: "firstName",
    },
    {
      type: "input",
      message: "What's the employee's last name?",
      name: "lastName",
    },
    {
      type: "list",
      message: "What role does this employee have?",
      name: "employeeRole",
      choices: [
        "Sales Lead",
        "Salesperson",
        "Lead Engineer",
        "Software Engineer",
        "Account Manager",
        "Accountant",
        "Legal Team Lead",
        "Lawyer",
      ],
    },
    {
      type: "list",
      message: "Who is this employee's manager?",
      name: "employeeManager",
      choices: [],
    },
  ]);
  db.query();
};

const updateRole = () => {
  inquirer.prompt([
    {
      type: "list",
      message: "Which employee's role did you want to update?",
      name: "employeeRoleUpdate",
      choices: [],
    },
    {
      type: "",
      message: "",
      name: "",
      choices: [
        "Sales Lead",
        "Salesperson",
        "Lead Engineer",
        "Software Engineer",
        "Account Manager",
        "Accountant",
        "Legal Team Lead",
        "Lawyer",
      ],
    },
  ]);

  db.query();
};

const newRole = () => {
  inquirer.prompt([
    { 
    type: "input",
    message: "What's the role you'd like to add?",
    name: "newRole"
    }
]);
};

const viewAllDepartments = () => {
  db.query(
    `SELECT id, department_name from department`,
    function (err, results) {
      console.table(results);
    }
  );
};

const newDepartment = () => {
  inquirer.prompt([
    { 
        type: "input",
        message: "What's the name of the department you'd like to add?",
        name: "newDepartment"
        }
  ])
};

export default {
  viewAllEmployees,
  addEmployee,
  updateRole,
  newRole,
  viewAllDepartments,
  newDepartment,
};

// class Employee {
//     constructor(db) {
//         this.db = db
//     }
// }
