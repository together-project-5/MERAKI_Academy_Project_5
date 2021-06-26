const db = require('./../../../backend/db/db');

const createPost = (req, res) => {
    const query = `INSERT INTO post (userId  ,type ,title,description ,url) VALUES (?,?,?,?,?)`;
    let { userId, type, title, description, url } = req.body
    db.query(query, [userId, type, title, description, url], (err, result) => {
        if (err) res.send(err);
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



const getPostById = async (req, res) => {
    const id = req.params.id;
    const query = `SELECT * FROM post WHERE _IdPost = ?`;
    const data = [id];
    db.query(query, data, (err, result) => {
        if (err) throw err;
        res.json(result).status(200)
    });
};
const getPostByTitle = async (req, res) => {
    const title = req.params.title;
    const query = `SELECT * FROM post WHERE title = ?`;
    const data = [title];
    db.query(query, data, (err, result) => {
        if (err) throw err;
        res.json(result).status(200)
    });
};
const deletePost = async (req, res) => {
    const id = req.params.id;
    const query = `DELETE FROM post WHERE _IdPost = ?`;
    const data = [id];
    db.query(query, data, (err, result) => {
        if (err) throw err;
        res.json("succes deleted").status(200)
    });
};

module.exports = {
    createPost,
    getAllPost,
    getPostById,
    getPostByTitle,
    deletePost
};
