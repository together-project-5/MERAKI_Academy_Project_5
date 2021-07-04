const db = require("./../../db/db");
const bcrypt = require("bcrypt");
const salt = Number(process.env.SALT);

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

const editProfile = async (req, res) => {
  const id = req.params.id;
  const query = `UPDATE user SET name=?,password=? ,picture=? WHERE _IdUser=${id}`;
  let { name, password, picture } = req.body;
  password = await bcrypt.hash(password, salt);
  const data = [name, password, picture];
  db.query(query, data, (err, result) => {
    if (err) return res.status(400).send("can't update your information try again please");
    console.log(result);
  });
};

module.exports = {
  getAllUser,
  getUserById,
  getUserByName,
  editProfile
};
