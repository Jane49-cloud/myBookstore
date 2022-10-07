const express = require('express')
const app = express()
const connection = require('./connection/db')
const router = require('./router/route')
const cors = require('cors')

app.use(express.json())

app.use(cors())

app.use('/api/v1/books', router)

app.get('/', (req, res) => {
    res.send('<h1>Books API</h1><a href="/api/v1/books">books route</a>');
  });






const port = 5000 
const start = async ()=>{
    try {
    await connection()
    app.listen(port, console.log(`The port is running on port ${port}...`))


    } catch (error) {
        
    }
}

start()
