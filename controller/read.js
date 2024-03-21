const db = require('../config/database');
module.exports = (req, res) => {
    db.execute("SELECT * FROM users")
        .then(result => res.render('users', {
            results: result[0]
        }))
        .catch(err => console.log(err));
}