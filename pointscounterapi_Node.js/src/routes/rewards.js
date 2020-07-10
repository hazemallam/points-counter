const express = require('express')
const Rewards = require('../models/rewards')
const Adminauth = require('../middleware/adminAuth')
const router = new express.Router()

//add new rewards
router.post('/users/rewards', Adminauth, async(req, res)=>{//////how to connect rewords with discover not user?
    const reward = new Rewards({... req.body, owner:req.user._id //structure of menu ?
                                                                // structure of locations?
                                                                //serch will be front or back?
    })
    try{
        await reward.save()
        res.send(reward)
    }
    catch(e){
        res.send("error")
    }
})
//get all rewards
router.get('/users/rewards', Adminauth, async(req, res)=>{
    const reward = await Rewards.find({owner: req.user._id})
    res.send(reward)
})
 
module.exports = router