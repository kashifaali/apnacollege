const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname,"public")));


app.listen(port, (req, res)=>{
    console.log(`Server is loading ${port}`);
})

let post = [
    {name: "Kashif", content: "This is the first post. The author is kashif"},
    {name: "Asad", content: "This is the second post. the author is asad"},
    {name: "Umer", content: "This is the third post. the author is umer"},
    ];

app.get('/posts',(req,res)=>{
    res.render('index.ejs', {post});
})

app.get('/',(req,res)=>{
    res.send('server is running');
})

app.get("/posts/add",(req,res)=>{
    res.render('form.ejs');
})

app.post('/posts', (req,res)=>{
    let {name, content} = req.body;
    post.push({name, content});
    res.redirect('/posts');
})
