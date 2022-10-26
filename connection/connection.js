const mysql = require("mysql2");

const connection = mysql.createConnection(
    {
      host: "localhost",
      user: "root",
      password: "Splicer4851107#", 
      database: "company_db"
    });

  module.exports = connection;