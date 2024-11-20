const express = require('express')
const {connectToDb,getDb} = require('./db')
const {ObjectId} = require('mongodb')
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
    .find()     // cursor object that points to objects, need to fetch them using these two: toArray, forEach
    .sort({ author:1 })
    .forEach(book => books.push(book))
    .then(() => {
        res.status(200).json(books)
    })
    .catch(() => {
res.status(500).json({error: "Could not fetch documents"})
    })
})

app.get('/books/:id', (req, res)=>{
    if(ObjectId.isValid(req.params.id)){
        db.collection('books')
        .findOne({_id: new ObjectId(req.params.id)},{projection: {author: 1}})
        .then(doc => {
            res.status(200).json(doc)
        })
        .catch(err=>{
            res.status(500).json({error: 'Could not fetch documents'})
        })
    }
    else{
        res.status(500).json({error: 'Invalid ID'})
    }
})