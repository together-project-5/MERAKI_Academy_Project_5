const db = require("./../../../backend/db/db");

const getReportingPost = (req, res) => {
    const query = `SELECT * FROM post WHERE report >=5`;
    db.query(query, (err, result) => {
        if (err) return res.status(400).send("There is no post");
        res.status(200).json(result);
    });
};

const deleteReportingPost = (req, res) => {
    const id = req.params.id;
    const query = `DELETE FROM post WHERE _IdPost = ${id}`;
    db.query(query, (err, result) => {
        if (err) return res.status(400).send("can't delete post try again please");
        res.status(200).json("success deleted");
    });
};

module.exports = {
    getReportingPost,
    deleteReportingPost
}
