const express = require('express')
const Contact = require('./../models/contact')
const router = new express.Router()
router.post('/users/contact', async(req, res)=>{
    const contact = new Contact(req.body)
    try {
            await contact.save()
            res.status(200).send({contact})
        
    } catch (error) {
        res.send(error)
        
    }
})

module.exports = router