const express = require('express')
const User = require('./../models/user')
const Auth = require('./../middleware/userAuth')
const AdminAuth = require('./../middleware/adminAuth')
const router = new express.Router()

//signup
router.post('/users/signup', async (req, res) => {
    const user = new User(req.body)
    try {
        await user.save()
        const token = await user.generateAuthToken()
        res.status(200).send({ user, token })

    } catch (error) {
        res.send(error)

    }
})
//login
router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.status(200).send({ user, token })

    } catch (error) {

        res.status(400).send(error)
    }
})
//logout from all devices
router.post('/users/off', Auth, async (req, res) => {
    try {
        
        req.user.tokens = []
        await req.user.save()
        res.send('logout from all devices successfully')

    } catch (error) {
        res.send(error)
    }
})
//logout from single device
router.post('/users/logout', Auth, async (req, res)=>{
    try {
        req.user.tokens = req.user.tokens.filter((tok)=>{
            return tok.token != req.token
        })
        await req.user.save()
        res.send('logout successfully')
        
    } catch (error) {
        res.send(error)
        
    }
})
//get user profile
router.get('/users/profile', Auth, async(req, res)=>{
    res.status(200).send(req.user)
})

//get admin profile
router.get('/users/profile', AdminAuth, async(req, res)=>{
    res.status(200).send(req.user)
})

module.exports = router