require('../src/db/mongoose')
const Task = require('../src/models/tasks')

Task.findByIdAndDelete('5f54ee4bedb30f350805fc2e').then((task)=>{
    console.log(task)
    return Task.countDocuments({completed: false})
}).then((result)=>{
    console.log(result)
}).catch((e)=>{
    console.log(e)
})