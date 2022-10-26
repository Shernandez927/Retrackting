
import mysql from "mysql2";
require("dotenv").config();

const db = mysql.createConnection({
      host: "localhost",
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD, 
      database: process.env.DB_NAME
});

export default db;