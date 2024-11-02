
const express = require('express');
const app = express();
let port = 3000;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

app.get ('/',(req, res) => {
    res.send('<h1>this is the  page</h1>');
});

app.get('/apple',(req,res)=>{
    res.send('<h1>apple page</h1>');
})

app.get('/orange',(req, res)=>{
    res.send('<h1>orange page</h1>');
})