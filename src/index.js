const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/tasks')
require('./models/tasks')

const app = express()
app.use(express.json())

const port = process.env.PORT || 3000


app.post('/users',(req,res)=>{
    // res.send('Create User')
    // console.log(req.body)

    const user = new User(req.body)
    user.save().then(()=>{
        res.status(201).send(user)
    }).catch((e)=>{
        res.status(400).send(e)
    })

})

app.post('/task',(req,res)=>{
    const task = new Task(req.body)
    task.save().then(()=>{
        res.status(201).send(task)
    }).catch((e)=>{
        res.status(400).send(e)
    })
})


app.listen(port,()=>{
    console.log('Server is on port',port)
})