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

const mongoose = require('../src/db/mongoose')