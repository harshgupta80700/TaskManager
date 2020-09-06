const express = require('express')
require('./db/mongoose')
const User = require('./models/user')

const app = express()
app.use(express.json())

const port = process.env.PORT || 3000


app.post('/users',(req,res)=>{
    // res.send('Create User')
    // console.log(req.body)

    const user = new User(req.body)
    user.save().then(()=>{
        res.send(user)
    }).catch((e)=>{
        res.status(400)
        res.send(e) 
    })

})


app.listen(port,()=>{
    console.log('Server is on port',port)
})