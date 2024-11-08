const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    from: {
        type: String,
        require: true
    },
    to: {
        type: String,
        require: true
    },
    message: {
        type: String,
        maxLength: 100
    },
    date: {
        type: Date,
        require: true
    }
})

const chat = mongoose.model("chat", chatSchema);

module.exports = chat;