const doWorkPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // resolve([1,2,3])
        reject('Unable to connect')
    },2000)
})

doWorkPromise.then((result)=>{
    console.log('success',result)
}).catch((error)=>{
    console.log('Error',error)
})