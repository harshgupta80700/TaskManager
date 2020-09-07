const express = require('express')
require('./db/mongoose')

const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
app.use(express.json())

const port = process.env.PORT || 3000

app.use(userRouter)
app.use(taskRouter)


app.listen(port,()=>{
    console.log('Server is on port',port)
})

const bycryptjs = require('bcryptjs')

const myfunction = async ()=>{
    const password = 'Red12345!'
    const hashedpassword = await bycryptjs.hash(password,8)

    console.log(password)
    console.log(hashedpassword)

    const isMatched = await bycryptjs.compare('red',hashedpassword)
    console.log(isMatched)

}

myfunction()