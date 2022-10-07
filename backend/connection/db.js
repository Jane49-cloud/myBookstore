const mongoose = require('mongoose')
require('dotenv').config()


const connection= async()=>{
const db = 
    {useUnifiedTopology :true,
     useNewUrlParser : true
}

try {
    await mongoose.connect(process.env.MONGO_URI, db)
    console.log('database connected...')
} catch (error) {
    console.log(error,{ msg:`database connection failed`})
}

}

module.exports = connection