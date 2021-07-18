const db = require("./../../../db/db");
const bcrypt = require("bcrypt");
const { request } = require("express");
const salt = Number(process.env.SALT);

const createUser = async (req, res) => {
  let { name, email, password, username } = req.body;
  if (!name) {
    res.json("please fill name text").status(400);
  }
  else if (!email) {
    res.json("please fill email text").status(400);
  }
  else if (!password) {
    res.json("please fill password text").status(400);
  }
  else if (!username) {
    res.json("please fill username text").status(400);
  } else {
    const query = `INSERT INTO user (name ,email,password,username) VALUES (?,?,?,?)`;
    password = await bcrypt.hash(password, salt);
    email = await email.toLowerCase();
    const data = [name, email, password, username];
    db.query(query, data, (err, result) => {
      if (err) res.send("Please fill all text").status(400);
      res.status(201).json(result);
    });
  }
};

module.exports = {
  createUser,
};
