const db = require('./config/database');
const express = require('express');

const app = express();

app.get ('/', (req, res) => {
    db.execute('INSERT INTO users(name,email,phone_number) VALUES(?,?,?)', ['Jane Doe', 'jane.doe0707@gmail.com', '9696969696'])
        .then((result,err) => {
            if (!err)
                console.log("Data Inserted")
        });
    
    res.send('<h1>Hello World1</h1><hr/>');
});

app.listen(9090, () => {
    console.log('listening');
})

