const express =  require('express')
const Task = require('../models/tasks')
const router = new express.Router

router.get('/testtask',(req,res)=>{
    res.send('This is the test route from a new file')
})

router.post('/task',async (req,res)=>{
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




router.get('/tasks',async (req,res)=>{

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

router.get('/tasks/:id',async (req,res)=>{
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



router.patch('/tasks/:id', async (req,res)=>{

    const updates = Object.keys(req.body)
    const validUpdates = ['description','completed']
    const isValidUpdate = updates.every((value) => validUpdates.includes(value))

    if(!isValidUpdate){
        return res.status(400).send({
            error: 'Not a Valid parameter passed'
        })
    }

    try{
        const task = await Task.findByIdAndUpdate(req.params.id,req.body,{new: true, runValidators: true})
        if(!task){
            return res.status(404).send()
        }
        res.status(200).send(task)

    }catch(e){
        res.status(500).send(e)
    }

})



router.delete('/tasks/:id',async(req,res)=>{

    try{
        const task = await Task.findByIdAndDelete(req.params.id)
        if(!task){
            return res.status(404).send()
        }
        res.status(200).send(task)
    }catch(e){
        res.status(500).send(e)
    }

})

module.exports = router