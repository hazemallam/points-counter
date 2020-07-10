const mongoose = require('mongoose')
const discoverSchema = new mongoose.Schema({
    backgroundImage:{
        type: String,
        trim: true
    },
    logoImage:{
        type: String,
        trim: true
    },
    shopName:{
        type: String,
        trim: true,
        required: true
    },
    cardTitle:{
        type: String,
        trim:true,
        required: true
    },
    cardText:{
        type:String,
        trim: true

    }

}, { timestamps: { createdAt: 'created_at' } })

//making a relation between this parent and child
discoverSchema.virtual('rewards',{
    ref:'Reward',
    localField:'_id',
    foreignField:'owner'
})

const Discover = mongoose.model('Discover', discoverSchema)
module.exports = Discover