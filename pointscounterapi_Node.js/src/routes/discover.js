const express = require('express')
const Discover = require('./../models/discover')
const AdminAuth = require('./../middleware/adminAuth')
const router = new express.Router()

//add new merchants
router.post('/users/discover', async (req, res)=>{
    const discover = new Discover(req.body)
    try {
        await discover.save()
        res.status(200).send({discover})
    } catch (error) {
        res.send(error)
        
    }

})

//get all merchants
router.get('/users/discover', async (req, res)=>{
    try {
        const discover = await Discover.find({})
        res.status(200).send(discover)
    } catch (error) {
        res.status(400).send(error)
    }
})


//delete all merchants
router.delete('/users/discover/delete', AdminAuth, async (req, res)=>{
    try {
        const discover = await Discover.deleteMany()
        if(!discover)
        return res.status(404).send('not found')
        res.status(200).send('All Merchants deleted successfully')
    } catch (error) {
        res.status(400).send('error happend')
    }
})

//get single merchants
router.get('/users/discover/:id', async(req, res)=>{
    const _id = req.params.id
    try {
        const signleDiscover = await Discover.findById(_id)
        if(!signleDiscover)
        return res.status(400).send('not found')
        res.status(200).send(signleDiscover)
    } catch (error) {
        res.status(404).send(error)
    }
})

//delete single merchants
router.delete('/users/discover/delete/:id', async (req, res)=>{
    try {
        const discover = await Discover.findByIdAndDelete(req.params.id)
        if(!discover)
        return res.status(404).send('not found')
        res.status(200).send('Deleted successfully')
    } catch (error) {
        res.status(400).send('error happend')
    }
})



//update single merchants
router.patch('/users/discover/update/:id', async (req, res)=>{
    
        const updates = Object.keys(req.body)
        const allowedUpdates = ['backgroundImage', 'logoImage', 'shopName', 'cardTitle', 'cardText']
        const isValidOperation = updates.every((update)=> allowedUpdates.includes(update))
        if(!isValidOperation)
        return res.status(400).send({error: 'Invalid Updates'})
        try{
        const discover = await Discover.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        if(!discover)
        return res.status(404).send('not found')
        res.status(200).send('Updated successfully')
    } catch (error) {
        res.status(400).send('error happend')
    }
})


module.exports = router