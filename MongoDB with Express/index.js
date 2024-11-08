const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const mongoose = require('mongoose');
const chat = require('./models/chats.js');

app.set('views',path.join(__dirname,"views"));
app.set ('view engine',"ejs");

app.get('/chat',async (req,res)=>{
    let chat = await chat.find();
    res.render('index.ejs',{chat});
})

app.listen(port, () => {
    console.log(`Server is running on this port = ${port}`);
});

app.get('/', (req, res) => {
    res.send("This is root");
});