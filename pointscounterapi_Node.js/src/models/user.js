const mongoose = require('mongoose')
const validator = require('validator')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        trim: true
    },
    lastname:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('not valid email, please try again !')
            }
        }
    },
    password:{
        type: String,
        trim: true,
        required: true,
        minlength:6
    },
    type:{
        type: Number,
        default:1
    },
    tokens:[{
        token:{
            type: String,
            required: true
        }
    }]
}, { timestamps: { createdAt: 'created_at' } })

//generate token for each new user
userSchema.methods.generateAuthToken = async function(){
    const user = this
    const token = jwt.sign({_id:user._id.toString()}, 'pointscounter')
    user.tokens = user.tokens.concat({token})
    await user.save()
    return token
}
//encrypt password 
userSchema.pre('save', async function(next){
    const user = this
    if(user.isModified('password'))
    user.password = await bcrypt.hash(user.password, 9)
    next()
})

//check validation of email and password used for logging
userSchema.statics.findByCredentials = async (email, password)=>{
    const user = await User.findOne({email})
    if(!user)
    throw new Error('email not found, please try another one !')
    const isMatch = await bcrypt.compare(password, user.password)
    if(!isMatch)
    throw new Error('password error')
    return user
}
const User = mongoose.model('User', userSchema)
module.exports = User