const express = require("express");
const router = express.Router();

const { getAllBooks, getBook, addBook, remove } = require("../handler/books");

router.route('/').get(getAllBooks)
router.route('/').post(addBook)



module.exports = router;