const db = require('../config/database');

module.exports = (req, res) => {
    let uid = req.params.uid;
    db.execute('DELETE FROM users WHERE id = ?', [uid])
        .then(() => res.redirect('/users'))
        .catch(err => console.log(err))
};