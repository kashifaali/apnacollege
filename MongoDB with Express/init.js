const mongoose = require('mongoose');
const chat = require('./models/chats.js');


async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
    console.log("Connection successful");
}

main().catch((err) => {
    console.log(err);
});


let chatData = [
    new chat({
        from: "kashif",
        to: "sadia",
        message: "You are my best friend",
        date: new Date()
    }),
    new chat({
        from: "sadia",
        to: "kashif",
        message: "Thank you for always being there!",
        date: new Date()
    }),
    new chat({
        from: "kashif",
        to: "anaya",
        message: "Hey! How are you doing?",
        date: new Date()
    }),
    new chat({
        from: "anaya",
        to: "kashif",
        message: "I'm good! What about you?",
        date: new Date()
    }),
    new chat({
        from: "ali",
        to: "sadia",
        message: "Let's catch up soon!",
        date: new Date()
    }),
    new chat({
        from: "sadia",
        to: "ali",
        message: "Sure! Let’s plan for this weekend.",
        date: new Date()
    }),
    new chat({
        from: "kashif",
        to: "ahmed",
        message: "Did you complete the project?",
        date: new Date()
    }),
    new chat({
        from: "ahmed",
        to: "kashif",
        message: "Yes, just submitted it!",
        date: new Date()
    })
];

chat.insertMany(chatData);