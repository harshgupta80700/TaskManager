const mongo = require('mongodb')
const MongoClient = mongo.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task_manager'

MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client)=>{
    if(error){
        return console.log('unable to connect to the database')
    }

    console.log('connected correctly')
})