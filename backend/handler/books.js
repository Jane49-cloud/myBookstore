const Book= require('../models/books')


//get all books

const getAllBooks= async (req, res) => {
    try {
        const books = await Book.find()
        res.json(books)
}
catch (err) {
    console.log(err)
}
}
//GET single book

const getBook= async (req, res) => {
    try {
        const books = await Book.findById(req.params.id)
    } catch (error) {
        
    }
}
//Create a new book

const addBook= async (req, res) => {
    try {
        const book = await Book.create(req.body)
        res.json(book)
    }
    catch (err) {
        console.log(err)}
    }
 
    //delete book
    const remove= async (req, res) => {
        try {
            const book = await Book.findByIdAndRemove(req.params.id)
            res.json(book)
        }
        catch (err) {
            console.log(err)}
        }
        module.exports ={
            getAllBooks,
            getBook,
            addBook,
            remove
        }