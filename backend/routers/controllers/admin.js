const db = require("./../../../backend/db/db");

const getReportPost = (req, res) => {
    const query = `SELECT * FROM post WHERE report>=5 ;`;
    db.query(query, (err, result) => {
      if (err) return res.status(400).send("posts not found try again please ");
      res.status(201).json(result);
    });
  };

  module.exports = {
    getReportPost
  }