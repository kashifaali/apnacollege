const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const path = require("path");
const Chat = require("./schema/chat.js"); // Ensure correct import

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/instagram', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

app.set('views', path.join(__dirname, "views"));
app.set('view engine', "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended : true}));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Route to render index.ejs with chat data
app.get('/chat', async (req, res) => {
    try {
        const chats = await Chat.find(); // Fetch all chat documents from the collection
        res.render('index.ejs', { chats }); // Pass the fetched chats to the view
    } catch (err) {
        console.error(err);
        res.status(500).send("Error fetching chats");
    }
});

app.get('/chat/new', (req, res)=>{
    res.render('form.ejs');
})

app.post('/chat',(req, res)=>{
    const {from, to, message} = req.body;
    const newchat = new Chat({
        from : from,
        to : to,
        message: message
    });

    res.redirect('/chat');

    newchat.save().then((result) => {
        console.log('data save successfully');
    }).catch((err) => {
        console.log(err);
    });
})
