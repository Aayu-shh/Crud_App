const db = require('./config/database');

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

const app = express();

dotenv.config();

app.use(cors());
app.use(express.static(__dirname +'/public'));
app.use(express.static(__dirname + '/views'));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res) => {
    res.redirect('index.html');
});

app.post('/users',(req,res,next)=>{
    var name = req.body.name;
    var email = req.body.email;
    var phone = req.body.phone;
    db.execute("INSERT INTO users(Name,Phone_Number,Email) values(?,?,?)",[name,phone,email])
    .then(() => res.redirect("/users") )
    .catch(err=>console.log(err));    
})

app.get('/users',(req,res,next)=>{
    db.execute("SELECT * FROM users")
        .then(result => res.render('users',{
            results : result[0]
        }));
})

app.listen(process.env.PORT, (err) => {
    if(err) console.log(err);
    else console.log('listening to port '+ process.env.PORT);
})