const db = require("./../../../backend/db/db");

const createLike =async (req, res) => {
    const query = `INSERT INTO userLike (userId  , postId) VALUES (?,?)`;
    let { userId, postId } = req.body;
    const data = [userId,postId ]
    db.query(query, data, (err, result) => {
        if (err) return res.status(400)
        res.status(201).json(result);
      });
}

const deleteUserLike = (req, res) => {
  let { userId, postId } = req.params;
    const query = `DELETE FROM userLike WHERE userId = ${userId} AND postId = ${postId}`;
    db.query(query,  (err, result) => {
      if (err) return res.status(401).json(err);
      res.status(200).json("success deleted");
    });
  };

const getLikePost = (req, res) => {
  console.log("geeet")
  let { userId, postId } = req.params;
    const query = `SELECT * FROM userLike WHERE userId = ${userId} AND postId = ${postId}`;
    // let { userId, postId } = req.body;
    // const data = [userId,postId ];
    db.query(query,  (err, result) => {
        if (err) return res.status(400).json(err)
        res.status(200).json(result);
      });
  };

  module.exports = {
    createLike,
    deleteUserLike,
    getLikePost,};