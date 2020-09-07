const express =  require('express')
const User = require('../models/user')
const router = new express.Router

router.get('/testuser',(req,res)=>{
    res.send('This is the test route from a new file')
})


router.post('/users',async (req,res)=>{
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

router.get('/users', async(req,res)=>{

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

router.get('/users/:id',async (req,res)=>{
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

router.patch('/users/:id',async(req,res)=>{

    const updates = Object.keys(req.body)
    const allowedUpdates = ['name','email','password','age']
    const isValidUpdate = updates.every((value) => allowedUpdates.includes(value))
    console.log(isValidUpdate)
    console.log(updates)

    if(!isValidUpdate){
        return res.status(400).send({
            error: 'Not a Valid Parameter'
        })
    }

    try{
        const user = await User.findByIdAndUpdate(req.params.id,req.body,{runValidators:true,new:true})
        if(!user){
            return res.status(404).send()
        }
        res.status(200).send(user)
    }catch(e){
        res.status(400).send(e)
    }
})

router.delete('/users/:id', async (req,res)=>{

    try{
        const user = await User.findByIdAndDelete(req.params.id)
        if(!user){
            return res.status(404).send()
        }
        res.status(200).send(user)
    }catch(e){
        res.status(500).send(e)
    } 

})


module.exports = router