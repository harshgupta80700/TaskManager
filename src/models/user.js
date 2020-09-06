const mongoose = require('mongoose')
const validator = require('validator')


const User = mongoose.model('User',{
    name:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw Error('Please enter a valid email address!')            
            }
        }
    },
    password:{
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw Error('password cannot contain password')
            }
        }
    },
    age:{
        type: Number,
        default: 16,
        validate(value){
            if(value < 0){
                throw Error('Age must be a positive number!')
            }
        }
    }
})


module.exports = User