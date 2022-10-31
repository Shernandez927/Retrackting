// Importing SQL connection, console.table, and inquirer npm
const db = require("../connection/connection");
require("console.table");
const inquirer = require("inquirer");

// Placed Helper functions in a class for exporting
class HelperFunctions {
  constructor() {}
  viewAllEmployees() {
    db.query(
      `SELECT employees.id, employees.first_name, employees.last_name, roles.title, department.department_name, roles.salary FROM employees LEFT JOIN roles ON employees.role_id = roles.id LEFT JOIN department ON roles.department_id = department.id;`,
      (err, res) => {
        err ? console.log(err) : console.table("\n", res);
        beginPrompt();
      }
    );
  }

  addEmployee() {
    db.query(`SELECT * FROM roles;`, (err, res) => {
      let roles = res.map((roles) => ({
        name: roles.title,
        value: roles.id,
      }));

      db.query(`SELECT * FROM employees;`, (err, res) => {
        let employees = res.map((employees) => ({
          name: employees.first_name + " " + employees.last_name,
          value: employees.id,
        }));

        inquirer
          .prompt([
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
              choices: roles,
            },
            {
              type: "list",
              message: "Who is this employee's manager?",
              name: "employeeManager",
              choices: employees,
            },
          ])
          .then((res) => {
            db.query(
              `INSERT INTO employees SET ?`,
              {
                first_name: res.firstName,
                last_name: res.lastName,
              },
              (err, res) => {
                err
                  ? console.log(err)
                  : console.log("Successfully Added New Employee! ✅");
                beginPrompt();
              }
            );
          });
      });
    });
  }

  updateRole() {
    db.query(`SELECT * FROM employees;`, (err, res) => {
      let employees = res.map((employees) => ({
        name: employees.first_name + " " + employees.last_name,
        value: employees.id,
      }));
      db.query(`SELECT * FROM roles;`, (err, res) => {
        let roles = res.map((roles) => ({
          name: roles.title,
          value: roles.id,
        }));

        inquirer
          .prompt([
            {
              type: "list",
              message: "Which employee's role did you want to update?",
              name: "employeeRoleUpdate",
              choices: employees,
            },
            {
              type: "list",
              message: "What would you like to update their role to?",
              name: "updatedRole",
              choices: roles,
            },
          ])
          .then((res) => {
            db.query(
              `UPDATE employees SET ? WHERE ?`,
              [
                {
                  role_id: res.updateRole,
                },
                {
                  id: res.employeeRoleUpdate,
                },
              ],
              (err, res) => {
                err
                  ? console.log(err)
                  : console.log("Employee Role Successfully Updated! ✅");
                beginPrompt();
              }
            );
          });
      });
    });
  }

  newRole() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "What's the role you'd like to add?",
          name: "newRole",
        },
      ])
      .then((res) => {
        db.query(
          `INSERT INTO department SET ?`,
          [
            {
              title: res.newRole,
            },
          ],
          (err, res) => {
            err ? console.log(err) : console.log("Role Successfully Added! ✅");
            beginPrompt();
          }
        );
      });
  }

  viewAllDepartments() {
    db.query(
      `SELECT id AS ID, department_name AS Name from department`,
      (err, res) => {
        err ? console.log(err) : console.table("\n", res);
        beginPrompt();
      }
    );
  }

  newDepartment() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "What's the name of the department you'd like to add?",
          name: "newDepartment",
        },
      ])
      .then((res) => {
        db.query(
          "INSERT INTO department SET ?",
          {
            department_name: res.newDepartment,
          },
          (err, res) => {
            console.log("Successfully Added Department! ✅");
            beginPrompt();
          }
        );
      });
  }
}
module.exports = { Helpers: new HelperFunctions() };
