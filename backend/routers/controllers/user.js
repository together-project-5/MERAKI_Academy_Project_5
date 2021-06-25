const db = require("./../../db/db");

const getAllUser = async (req, res) => {
  const query = `SELECT * FROM user`;
  db.query(query, (err, result) => {
    if (err) throw err;
    res.json(result).status(200);
  });
};

const getUserById = async (req, res) => {
  const id = req.params.id;
  const query = `SELECT * FROM user WHERE _IdUser = ?`;
  // const data = [id];
  db.query(query,[id], (err, result) => {
    if (err) throw err;
    res.json(result).status(200);
  });
};

const getUserByName = async (req, res) => {
  const name = req.params.name;
  const query = `SELECT * FROM user WHERE name = ?`;
  // const data = [name];
  db.query(query, [name], (err, result) => {
    if (err) throw err;
    res.json(result).status(200);
  });
};


module.exports = {
  getAllUser,
  getUserById,
  getUserByName
};

