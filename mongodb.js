// const mongo = require('mongodb')
// const MongoClient = mongo.MongoClient
// const ObjectID = mongo.ObjectID

const {MongoClient,ObjectID} = require('mongodb')


const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task_manager'

// const id = new ObjectID()
// console.log(id)
// console.log(id.getTimestamp())


MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client)=>{
    if(error){
        return console.log('unable to connect to the database')
    }

    //console.log('connected correctly')
    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Arjun',
    //     age: 14
    // },(error,result)=>{
    //     if(error){
    //         return console.log('Unable to insert data to database')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Bye baby',
    //         age: 16,
    //         sex: 'F'
    //     },
    //     {
    //         name: 'Dragon',
    //         age: 17,
    //     }
    // ],(error,result)=>{
    //     if(error){
    //         return console.log('Unable to insert documents')
    //     }

    //     console.log(result.ops)
    // })



    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Task 1',
    //         completed: true
    //     },
    //     {
    //         description: 'Task 2',
    //         completed: false
    //     },
    //     {
    //         description: 'Task 3',
    //         completed: true
    //     }
    // ],(error,result)=>{
    //     if(error){
    //         return console.log('Unable to insert data to the Task database')
    //     }

    //     console.log(result.ops)
    //     console.log(result.insertedIds)

    // })

    // db.collection('users').findOne({
    //     _id: ObjectID("5f5212c674dbed34b060de05")
    // },(error, user)=>{
    //     if(error){
    //         return console.log('Unable to find!')
    //     }
    //     console.log(user)
    // })

    // db.collection('users').find({
    //     sex: null
    // }).toArray((error,user)=>{
    //     if(error){
    //         return console.log("Unable to connect to the database")
    //     }

    //     console.log(user)

    // })


    // db.collection('tasks').findOne({
    //     _id: ObjectID("5f513a67ccbac3261c4776b6")
    // },(error,task)=>{
    //     if(error){
    //         return console.log("unable to connect to the database!")
    //     }
    //     console.log(task)
    // })


    // db.collection('tasks').find({
    //     completed: true
    // }).toArray((error,task)=>{
    //     if(error){
    //         return console.log(error)
    //     }
    //     console.log(task)
    // })

    // db.collection('tasks').find({
    //     completed: true
    // }).count((error,task)=>{
    //     if(error){
    //         return console.log(error)
    //     }
    //     console.log(task)
    // })

    // db.collection('users').updateOne({            //the third argument is promise by default if we dont provide a callback function
    //     _id: ObjectID("5f513744cd274b15a0491dbc"),
    //     name: 'Harsh'
    // },
    // {
    //     $set:{
    //         name: 'Gupta ji'
    //     }
    // }).then((result)=>{
    //     console.log(result)
    //     console.log(result.matchedCount)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    // db.collection('users').updateOne({            //the third argument is promise by default if we dont provide a callback function
    //     _id: ObjectID("5f513744cd274b15a0491dbc"),
    //     //name: 'Harsh'
    // },
    // {
    //     // $set:{
    //     //     name: 'Gupta ji'
    //     // }
    //     $inc:{
    //         age: 1
    //     }
    // }).then((result)=>{
    //     console.log(result)
    //     console.log(result.matchedCount)
    // }).catch((error)=>{
    //     console.log(error)
    // })


    // db.collection('tasks').updateMany({
    //     completed: false
    // },
    // {
    //     $set:{
    //         completed: true
    //     }
    // }).then((result)=>{
    //     console.log(result)
    //     console.log(result.matchedCount)
    //     console.log(result.modifiedCount)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    // db.collection('users').deleteMany({
    //     age: 16
    // }).then((result)=>{
    //     console.log(result)
    //     console.log(result.deletedCount)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    // db.collection('users').deleteOne({
    //     name: 'Harsh'
    // }).then((result)=>{
    //     console.log(result)
    //     console.log(result.deletedCount)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    db.collection('tasks').deleteMany({                                     //This doesnt work
        description: 'Task 1'
    },{
        description: 'Task 2'
    },{
        description: 'Task 3'
    }).then((result)=>{
        console.log(result.deletedCount)
    }).catch((error)=>{
        console.log(error)
    })


})