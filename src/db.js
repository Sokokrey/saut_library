var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "admin",
  password: "1234",
  database: "Library" 
});

con.connect(function(err) {
	if (err) throw err;  
	console.log("Connected!");
});  

module.exports = con;
