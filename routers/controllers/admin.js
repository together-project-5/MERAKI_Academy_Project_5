const db = require("./../../db/db");

const getReportPost = (req, res) => {
    const query = `SELECT * FROM post WHERE report>=5 ;`;
    db.query(query, (err, result) => {
        if (err) return res.status(400).send("posts not found try again please ");
        res.status(201).json(result);
    });
};

const deleteReportPost = (req, res) => {
    const id = req.params.id;
    const query = `DELETE FROM post WHERE _IdPost = ?`;
    const data = [id];
    db.query(query, data, (err, result) => {
      if (err) return res.status(400).send("can't delete post try again please");
      res.status(200).json("success deleted");
    });
  };

module.exports = {
    getReportPost,
    deleteReportPost
}