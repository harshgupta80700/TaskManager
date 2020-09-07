const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/tasks')
require('./models/tasks')

const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
app.use(express.json())

const port = process.env.PORT || 3000

// const router = new express.Router()

// router.get('/test',(req,res)=>{
//     res.send('This is the test route')
// })
app.use(userRouter)
app.use(taskRouter)






app.listen(port,()=>{
    console.log('Server is on port',port)
})