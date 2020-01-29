const router = require('express').Router();

const book  = require('../controllers/bookController.js'); 
router.get('/', book.getBooks);
router.post('/', book.addBook);
router.delete('/:id', book.deleteBook);

module.exports = router;