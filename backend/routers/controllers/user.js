const db = require('./../../db/db');

const getAllUser = async (req, res) => {
    const query = `SELECT * FROM user`;
    db.query(query, (err, res) => {
        if (err) throw err;
        console.log(res);
    });
};

module.exports = {
    getAllUser
};