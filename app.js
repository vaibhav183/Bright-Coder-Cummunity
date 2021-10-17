const express = require('express')
const app = express();
const bodyParser = require('body-parser');
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'));
const ejs = require('ejs');
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('blogindex');
})

app.listen(3000,()=>{
    console.log("Server Reached at port 3000");
})