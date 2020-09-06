const express = require('express')

const app = express()
app.use(express.json())

const port = process.env.PORT || 3000


app.post('/users',(req,res)=>{
    res.send('Create User')
    console.log(req.body)
})


app.listen(port,()=>{
    console.log('Server is on port',port)
})