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