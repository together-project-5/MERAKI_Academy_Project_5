const createLike =async (req, res) => {
    const query = `INSERT INTO post (userId  , postId) VALUES (?,?)`;
    let { userId, postId } = req.body;
    db.query(query, data, (err, result) => {
        if (err) return res.status(400)
        res.status(201).json(result);
      });
}