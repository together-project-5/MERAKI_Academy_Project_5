const db = require("./../../db/db");

const getAllUser = (req, res) => {
  const query = `SELECT * FROM user`;
  db.query(query, (err, result) => {
    if (err) return res.status(400).send("user not found");
    res.status(200).json(result);
  });
};

const getUserById = (req, res) => {
  const id = req.params.id;
  const query = `SELECT * FROM user WHERE _IdUser = ?`;
  const data = [id];
  db.query(query, data, (err, result) => {
    if (err) return res.status(400).send("user not found");
    res.status(200).json(result);
  });
};

const getUserByName = (req, res) => {
  const name = req.params.name;
  const query = `SELECT * FROM user WHERE name = ?`;
  const data = [name];
  db.query(query, data, (err, result) => {
    if (err) return res.status(400).send("user not found");
    res.status(200).json(result);
  });
};

module.exports = {
  getAllUser,
  getUserById,
  getUserByName,
};
