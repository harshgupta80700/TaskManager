const add = (a,b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(a+b)
        },2000)
    })
}

// add(1,2).then((result)=>{
//     console.log(result)
//     add(result,5).then((result2)=>{             //this is tradional promise method not the chaining one
//         console.log(result2)
//     }).catch((e)=>{
//         console.log(e)
//     })
// }).catch((e)=>{
//     console.log(e)
// })


// add(1,2).then((result)=>{
//     console.log(result)
//     return add(result,3)            //this is promise chaining
// }).then((result2)=>{
//     console.log(result2)
// }).catch((e)=>{
//     console.log(e)
// })

require('../src/db/mongoose')
const User = require('../src/models/user')


User.findByIdAndUpdate('5f52a6698400f51648fbf60a',{age: 21}).then((user)=>{
    console.log(user)
    return User.countDocuments({age:21})
}).then((result)=>{
    console.log(result)
}).catch((e)=>{
    console.log(e)
})
