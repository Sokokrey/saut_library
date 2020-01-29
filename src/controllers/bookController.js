const con = require('../db.js');
const booksCtrl = {};

booksCtrl.getBooks = (req, res) => {
  con.query("SELECT * FROM books", function (err, result, fields) {
    if (err) throw err;  
    res.json(result);    
  });
}
booksCtrl.addBook = (req, res) => {
  const newBook = req.body;
  con.query("INSERT INTO books (name, author, year) VALUES ('"+newBook.name+"', '"+newBook.author+"', '"+newBook.year+"')", function (err, result, fields) {
    if (err) throw err;  
	  res.json("Guardardo");
  });
}
booksCtrl.deleteBook = (req, res) => {
  const id = req.params.id;
  con.query("DELETE FROM books WHERE id = "+id, function (err, result, fields) {
    if (err) throw err;  
	  res.json("Eliminado");
  });
}

module.exports = booksCtrl;