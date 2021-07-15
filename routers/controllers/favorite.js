const db = require("./../../db/db");



const getFavoritePost = (req, res) => {
        const id = req.params.id;
    const query = `SELECT * FROM post INNER JOIN user ON user._IdUser=${id} WHERE post.favorite =1`;
    db.query(query, (err, result) => {
        if (err) return res.status(400).send("can't get favorite posts");
        res.status(200).json(result);
    });
};


module.exports = {
    getFavoritePost,
}