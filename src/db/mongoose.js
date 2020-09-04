const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task_manager_api',{
    useNewUrlParser: true,
    useCreateIndex: true
})

const User = mongoose.model('User',{
    name:{
        type: String
    },
    age:{
        type: Number
    }
})

const me = User({
    name: 'Harsh Gupta',
    age: 20
})

me.save().then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log('Error !!', error)
})