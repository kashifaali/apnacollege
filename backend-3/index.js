const express = require("express");
const app = express();

const port = 8080;

app.set('view engine', 'ejs');

app.get('/hello',(req,res)=>{
    res.render("index.ejs");
})

app.get("/roldice",(req,res)=>{
    res.render('roldice.ejs');
})

app.get("/ig/:username",(req,res)=>{
    let {username} = req.params;
    let instdata = require('./data.json');
    let data = instdata[username];  
    res.render('instagram.ejs',{data});
})

app.get("/",(req,res)=>{
    res.send('server is ready');
})

app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);
});