const db = require("./../../../backend/db/db");

const insertFavorite = (req, res) => {
    const query = `INSERT INTO favorite (userId,postId ) VALUES (?,?)`;
    let { userId, postId } = req.body;
    const data = [userId, postId];
    db.query(query, data, (err, result) => {
        if (err) return res.status(400).send("can't add post to favorite");
        res.status(201).json(result);
    });
};

const getFavoritePost = (req, res) => {
    const id = req.params.id;
    const query = `SELECT * FROM favorite WHERE userId=${id} `;
    db.query(query, (err, result) => {
        if (err) return res.status(400).send("can't get favorite posts");
        res.status(200).json(result);
    });
};


module.exports = {
    insertFavorite,
    getFavoritePost
}