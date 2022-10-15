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
        console.log(book)
    }
    catch (err) {
        console.log(err)}
    }
 
    //delete book
    const remove= async (req, res) => {
        try {
           const {id:bookID} = req.params
           const book = await Book.findOneAndDelete({_id:bookID})
           res.status(200).json({ book })
            console.log(`${book} removed`)
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