const express = require('express'); 
const path = require ('path'); 
const cors = require('cors');
// part#1 point2
const mongoose = require('mongoose'); 


const loginRouter = require('./src/routes/loginroute');
const signupRouter = require('./src/routes/signuproute');
////part#1 point3
const homeRouter = require('./src/routes/homerouter');
const booksRouter = require('./src/routes/booksroute');
const authorsRouter = require('./src/routes/authorsroute');
const bodyParser = require('body-parser');
//part#1 point5
const app = express(); 


app.set('views','./src/views'); 
app.set('view engine','ejs'); 


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname , '/public'))); 

app.use('/login',loginRouter); 
app.use('/signup',signupRouter); 
app.use('/home',homeRouter); 
app.use('/books',booksRouter); 
app.use('/authors',authorsRouter); 




app.get('/',function(req,res){

    res.render('index',{});
    
});
//part#2 point7
app.use('/', (req,res) => {
    res.send("<h2>Error 404 : Not found</h2>")
} )


////part#1 point1
app.listen(5000,()=>{
    console.log("Server Ready on 5000");
});