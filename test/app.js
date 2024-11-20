const express = require('express')
const {connectToDb,getDb} = require('./db')

const app = express()

// db connection
connectToDb((err)=>{
    if (!err){
        app.listen(3000, ()=>{
            console.log("app started")
        })
        db = getDb()
    }
})


// routes
app.get('/books', (req,res)=>{
    let books = []

    db.collection('books')
    .find()     // cursor object that points to objects, need to fetch: toArray, forEach
    .sort({ author:1 })
    .forEach(book => books.push(book))
    .then(() => {
        res.statusMessage(200).json(books)
    })
    .catch(() => {
res.status(500).json({error: "Could not fetch documents"})
    })
    res.json({msg: "welcome to the API"})
})