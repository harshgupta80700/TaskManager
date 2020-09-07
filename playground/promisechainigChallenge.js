require('../src/db/mongoose')
const Task = require('../src/models/tasks')

// Task.findByIdAndDelete('5f54ee4bedb30f350805fc2e').then((task)=>{
//     console.log(task)
//     return Task.countDocuments({completed: false})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })

const DeletebyidandCount = async(id,completed)=>{
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed})
    return count
}


DeletebyidandCount('5f5537483cb3bc49c4ce9924',false).then((result)=>{
    console.log('Count =',result)
}).catch((e)=>{
    console.log(e)
})