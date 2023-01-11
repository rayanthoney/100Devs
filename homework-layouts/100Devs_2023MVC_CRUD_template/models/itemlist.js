const mongoose = require('mongoose')
const itemListSchema = new mongoose.Schema({
    textInput: {
        type: String,
        required: true,
    },
    numItem: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
})

module.exports = mongoose.model('ItemList', itemListSchema, 'items')