const db = require('../config/database');

exports.addUser = (req, res) => {
    var name = req.body.name;
    var email = req.body.email;
    var phone = req.body.phone;
    db.execute("INSERT INTO users(Name,Phone_Number,Email) values(?,?,?)", [name, phone, email])
        .then(() => res.redirect("/users"))
        .catch(err => console.log(err))
}

exports.displayEditPage = (req, res) => {
    let uid = req.params.uid;
    db.execute('SELECT * FROM users WHERE id = ?', [uid])
        .then(result => res.render('edit', { result: result[0][0] }))
        .catch(err => console.log(err))
}

exports.editUser =  (req, res) => {
    let uid = req.params.uid;
    var name = req.body.name;
    var email = req.body.email;
    var phone = req.body.phone;
    db.execute("UPDATE users SET Name = ?, Email = ?, Phone_Number = ? WHERE id = ?", [name, email, phone, uid])
        .then(() => res.redirect('/users'))
        .catch(err => console.log(err))
}