const add = (a,b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{

            if(a<0 || b<0){
                return reject ('Number must have a positive value')
            }

            resolve(a+b)
        },2000)
    })
}


const doWork = async ()=>{
    const sum1 = await add(1,99)
    const sum2 = add(sum1,20)
    return sum2
}

doWork().then((result)=>{
    console.log('Result:',result)
}).catch((e)=>{
    console.log(e)
})