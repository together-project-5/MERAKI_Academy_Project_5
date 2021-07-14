const db = require("./../../../backend/db/db");



const getFavoritePost = (req, res) => {
        const id = req.params.id;
    const query = `SELECT * FROM post INNER JOIN user ON user._IdUser=${id} WHERE post.favorite =1`;
    db.query(query, (err, result) => {
        if (err) return res.status(400).send("can't get favorite posts");
        res.status(200).json(result);
    });
    // const id = req.params.id;
    // const id1 =req.params.postId;
    // const query = `SELECT * FROM favorite INNER JOIN user ON user._IdUser=${id}  INNER JOIN post ON post._IdPost=${id1} WHERE favorite.postId1 =${id1}`;
    // db.query(query, (err, result) => {
    //     if (err) return res.status(400).send("can't get favorite posts");
    //     res.status(200).json(result);
    // });
};


const deleteFavoritePost = (req, res) => {
    const id = req.params.id;
    const query = `DELETE FROM favorite WHERE postId1=${id}`
    db.query(query, (err, result) => {
        if (err) return res.status(400).send("can't delete post from favorite");
        res.status(200).json(result);
    });
};


module.exports = {
    insertFavorite,
    getFavoritePost,
    deleteFavoritePost
}