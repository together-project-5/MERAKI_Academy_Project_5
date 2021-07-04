const db = require("./../../../db/db");
const bcrypt = require("bcrypt");
const { request } = require('express');
const salt = Number(process.env.SALT);

const createUser = async (req, res) => {
  const query = `INSERT INTO user (name ,email,password) VALUES (?,?,?)`;
  let { name, email, password } = req.body;
  password = await bcrypt.hash(password, salt);
  email = await email.toLowerCase();
  const data = [name, email, password];
  db.query(query, data, (err, result) => {
    if (err) res.send("can't register try again please");
    res.status(201).json(result);
  });
};

module.exports = {
  createUser,
};
