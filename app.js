const db = require('./database');
const express = require('express');

const app = express();

app.get ('/', (req, res) => {
    db.execute('INSERT INTO users(name,email,phone_number) VALUES(?,?,?)', ['Aayush Agrawal', 'agrawal.aayush28@gmail.com', '7894561238'])
        .then((result,err) => {
            if (!err)
                console.log("Data Inserted")
        });
    
    res.send('<h1>Hello World1</h1><hr/>');
});

app.listen(9090, () => {
    console.log('listening');
})

