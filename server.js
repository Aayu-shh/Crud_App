const db = require('./config/database');
const readHandler = require('./controller/read');
const userHandler = require('./controller/user');
const deleteHandler = require('./controller/delete');

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

const app = express();

dotenv.config();

app.use(cors());
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.redirect('index.html')
});

app.get('/users', readHandler);

app.post('/users', userHandler.addUser);

app.get('/edit/:uid', userHandler.displayEditPage);

app.post('/edit/:uid', userHandler.editUser);

app.get('/delete/:uid', deleteHandler);

app.listen(process.env.PORT, (err) => {
    if (err) console.log(err);
    else console.log('listening to port ' + process.env.PORT);
});