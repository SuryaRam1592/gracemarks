const mysql = require("mysql");
require("dotenv").config();

const config = {
  host: 'localhost',
  user: 'root' ,
  password: "Mother@247",
  database: 'my_database',
  port: 3306,
  multipleStatements: true,
};


const con = mysql.createConnection(config);
con.connect((err) => {
  if (err) {
    console.error("Error connecting to database:", err);
    return;
  }
  console.log("DB CONNECTED");
});

module.exports = {
  con: mysql.createConnection(config),
};
