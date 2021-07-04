const db = require("./../../../backend/db/db");

const createLike =async (req, res) => {
    const query = `INSERT INTO post (userId  , postId) VALUES (?,?)`;
    let { userId, postId } = req.body;
    const data = [userId,postId ]
    db.query(query, data, (err, result) => {
        if (err) return res.status(400)
        res.status(201).json(result);
      });
}

const deleteUserLike = (req, res) => {
    const query = `DELETE FROM post WHERE userId = ? AND postId = ?`;
    let { userId, postId } = req.body;
    const data = [userId,postId ]
    db.query(query, data, (err, result) => {
      if (err) return res.status(400);
      res.status(200).json("success deleted");
    });
  };

const getLikePost = (req, res) => {
    const query = `SELECT FROM POST WHERE userId = ? , postId = ?`;
    let { userId, postId } = req.body;
    const data = [userId,postId ];
    db.query(query, data, (err, result) => {
        if (err) return res.status(400)
        res.status(201).json(result);
      });
  };

  module.exports = {
    createLike,
    deleteUserLike,
    getLikePost,};