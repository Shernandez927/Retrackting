const inquirer = require("inquirer");
const mysql = require("mysql2");
const cTable = require("console.table");
require('dotenv').config();

const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL Username
      user: 'root',
      password: '',
      database: 'company_db'
    },
    console.log(`Connected to the company_db database.`)
  );