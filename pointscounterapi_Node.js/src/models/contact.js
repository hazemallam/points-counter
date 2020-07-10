const mongoose = require('mongoose')
const validator = require('validator')
const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('not valid email, please try again !')
            }
        }

    },
    companyName: {
        type: String,
        trim: true
    },
    phone: {
        type: String,
        trim: true
    },
    message: {
        type: String,
        required: true
    }

}, { timestamps: { createdAt: 'created_at' } })

const Contact = mongoose.model('contacts', contactSchema)
module.exports = Contact