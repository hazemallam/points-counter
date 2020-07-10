const mongoose = require('mongoose')
const rewardSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        trim: true

    },
    rewardType:{
        type: String,
        required:true,
        trim:true
    },

     //to connect with the parent table
     owner:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Discover'
    }
})

const Reward = mongoose.model('Rewards', rewardSchema)
module.exports = Reward