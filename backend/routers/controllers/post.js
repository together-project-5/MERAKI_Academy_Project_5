const db = require('./../../../backend/db/db');

const createPost = (req, res) => {
    const query = `INSERT INTO post (userId  ,type ,title,Description ,url) VALUES (?,?,?,?,?)`;
    let { userId, type, title, Description, url } = req.body
    db.query(query, [userId, type, title, Description, url], (err, result) => {
        if (err) throw err;
        res.json(result).status(201)
    });
};

const getAllPost = (req, res) => {
    const query = `SELECT * FROM POST`;
    db.query(query, (err, result) => {
        if (err) throw err;
        res.json(result).status(201)
    });
}

module.exports = {
    createPost,
    getAllPost
};
