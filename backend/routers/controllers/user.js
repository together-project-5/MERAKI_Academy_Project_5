const db = require('./../../db/db');

const getAllUser = async (req, res) => {
    const query = `SELECT * FROM user`;
    db.query(query, (err, result) => {
        if (err) throw err;
        res.json(result).status(200)
    });
};

module.exports = {
    getAllUser
};