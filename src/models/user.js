const mongoose = require('mongoose')
const validator = require('validator')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')


const userSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
            trim: true
        },
        email:{
            type: String,
            required: true,
            unique: true,
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
        },
        tokens:[{

            token: {
                type: String,
                required:true
            }
        }]
    }
)


userSchema.pre('save',async function(next){
    const user = this

    if(user.isModified('password')){
        user.password = await bcryptjs.hash(user.password,8)
    }

    console.log('just before saving!')

    next()

})

userSchema.methods.generateAuthToken = async function(){
    const user = this

    const token = await jwt.sign({_id: user._id.toString()},'thisisthesigntokensignature')
    console.log(token)
    user.tokens = user.tokens.concat({token})
    await user.save()
    return token

}

userSchema.statics.findByCredentials = async (email , password) => {
    const user = await User.findOne({email})

    if(!user){
        throw Error('Unable To Login')
    }

    const isMatch = await bcryptjs.compare(password,user.password)

    if(!isMatch){
        throw Error('Unable to Login')
    }
    return user
}

const User = mongoose.model('User',userSchema)


module.exports = User