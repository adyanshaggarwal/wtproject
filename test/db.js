const {MongoClient} = require('mongodb')

let dbConnection

module.exports = {
    connectToDb: (cb) => {      // cb is the function that is executed after db connection
        MongoClient.connect('mongodb://localhost:27017/bookstore')
        .then((client)=>{
            dbConnection = client.db()
            return cb()
        })
        .catch(err => {
            console.log(err)
            return cb(err)
        })
    },
    getDb: () => dbConnection
}