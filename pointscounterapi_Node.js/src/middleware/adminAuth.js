const jwt = require('jsonwebtoken')
const User = require('./../models/user')
const Auth = async (req, res, next)=>{
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token, 'pointscounter')
        const user = await User.findOne({_id:decoded._id, 'tokens.token':token, type:2})
        if(!user)
        throw new Error('unauthorized')
        req.token = token
        req.user = user
        next()
        
    } catch (error) {
        res.send({error: "unauthorized"})
    }
}
module.exports = Auth