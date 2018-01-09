//require mysql
var mysql = require("mysql");

//boiler-plate connection stuff
var connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "holymoly",
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

//export connection
module.exports = connection;
