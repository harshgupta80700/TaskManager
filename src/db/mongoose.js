const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task_manager_api',{
    useNewUrlParser: true,
    useCreateIndex: true
})

// const User = mongoose.model('User',{
//     name:{
//         type: String,
//         required: true,
//         trim: true
//     },
//     email:{
//         type: String,
//         required: true,
//         trim: true,
//         lowercase: true,
//         validate(value){
//             if(!validator.isEmail(value)){
//                 throw Error('Please enter a valid email address!')            
//             }
//         }
//     },
//     password:{
//         type: String,
//         required: true,
//         trim: true,
//         minlength: 7,
//         validate(value){
//             //if(value.length <= 6){throw Error('password in short in length')}
//             if(value.toLowerCase().includes('password')){throw Error('password cannot contain password')}
//         }
//     },
//     age:{
//         type: Number,
//         default: 16,
//         validate(value){
//             if(value < 0){
//                 throw Error('Age must be a positive number!')
//             }
//         }
//     }
// })

// const me = User({
//     name: ' Sparsh',
//     email: "h@example.com",
//     password: 'passworismy   '
// })

// me.save().then((result)=>{
//     console.log(result)
// }).catch((error)=>{
//     console.log('Error !!', error)
// })

// const Task = mongoose.model('Tasks',{
//     description:{
//         type: String,
//         required: true,
//         trim: true,
//     },
//     completed:{
//         type: Boolean,
//         default: false
//     }
// })

// const task = Task({
//     description: 'Complete mongoose course      ',
// })

// task.save().then(()=>{
//     console.log(task)
// }).catch((error)=>{
//     console.log(error)
// })