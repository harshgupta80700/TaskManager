const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/tasks')
require('./models/tasks')

const app = express()
app.use(express.json())

const port = process.env.PORT || 3000


app.post('/users',async (req,res)=>{
    // res.send('Create User')
    // console.log(req.body)

    const user = new User(req.body)

    try{
        await user.save()
        res.status(201).send(user)
    }catch(e){
        res.status(400).send(e)
    }
    // user.save().then(()=>{
    //     res.status(201).send(user)
    // }).catch((e)=>{
    //     res.status(400).send(e)
    // })

})

app.post('/task',async (req,res)=>{
    const task = new Task(req.body)

    try{
        await task.save()
        res.status(201).send(task)
    }catch(e){
        res.status(400).send(e)
    }

    // task.save().then(()=>{
    //     res.status(201).send(task)
    // }).catch((e)=>{
    //     res.status(400).send(e)
    // })
})


app.get('/users', async(req,res)=>{

    try{
        const users = await User.find({})
        if(users.length === 0){
            return res.status(404).send()
        }
        res.status(200).send(users)
    }catch(e){
        res.status(500).send(e)
    }

    // User.find({}).then((users)=>{
    //     res.send(users)
    // }).catch((e)=>{
    //     res.status(500).send()
    // })
})

app.get('/users/:id',async (req,res)=>{
    console.log(req.params)
    const _id = req.params.id

    try{
        const user = await User.findById(_id)
        if(!user){
            return res.status(404).send()
        }
        res.status(200).send(user)
    }catch(e){
        res.status(500).send(e)
    }

    // User.findById(_id).then((users)=>{
    //     if(!users){
    //         return res.status(404).send()
    //     }
    //     res.send(users)
    // }).catch((e)=>{
    //     res.status(500).send(e)
    // })
})

app.get('/tasks',async (req,res)=>{

    try{
        const tasks = await Task.find({})
        if(tasks.length === 0){
            return res.status(404).send()
        }
        res.status(200).send(tasks)
    }catch(e){
        res.status(500).send()
    }


    // Task.find({}).then((users)=>{
    //     res.send(users)
    // }).catch((e)=>{
    //     res.status(500).send()
    // })
})

app.get('/tasks/:id',async (req,res)=>{
    console.log(req.params)
    const _id = req.params.id


    try{
        const task = await Task.findById(_id)
        if(!task){
            return res.status(404).send()
        }
        res.status(200).send(task)
    }catch(e){
        res.status(500).send()
    }

    // Task.findById(_id).then((tasks)=>{
    //     if(!tasks){
    //         return res.status(404).send()
    //     }
    //     res.send(tasks)
    // }).catch((e)=>{
    //     res.status(500).send()
    // })
})

app.listen(port,()=>{
    console.log('Server is on port',port)
})