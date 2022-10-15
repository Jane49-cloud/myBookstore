const express = require("express");
const router = express.Router();

const { getAllBooks, getBook, addBook, remove } = require("../handler/books");

router.route('/').get(getAllBooks)
router.route('/').post(addBook)
router.route('/:id').delete(remove)



module.exports = router;