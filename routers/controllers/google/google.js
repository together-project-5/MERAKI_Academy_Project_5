const express = require("express");
const router = express.Router();
const { OAuth2Client } = require("google-auth-library");
const db = require("./../../../db/db");
const bcrypt = require("bcrypt");
const salt = Number(process.env.SALT);
const jwt = require("jsonwebtoken");

const CLIENT_ID = process.env.CLIENT_ID;
const client = new OAuth2Client(CLIENT_ID);
router.post("/login-google", async (req, res) => {
  let token = req.body.token;
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: CLIENT_ID,
  });
  const query = `SELECT * FROM user WHERE email = ? ;`;
  let { name, email, password,username,picture} = ticket.getPayload();
  const data = [email];

  db.query(query, data, async (err, result) => {
    if (!result[0]) {
      const query = `INSERT INTO user (name ,email,password,username,picture) VALUES (?,?,?,?,?)`;
      if (password) {
        await bcrypt.hash(password, salt);
      }
      email = await email.toLowerCase();
      db.query(query, [name, email, password,username,picture], (err, result) => {
        if (err) throw err;
        res.status(201).json(result);
      });
    } else {
      const payload = {
        name,
        password,
        username,
        picture,
      };
      const options = {
        expiresIn: "1d",
      };
      res.status(200).json({
        token: jwt.sign(payload, process.env.SECRET, options),
        message: "valid login",
        user: result[0],
      });
    }
  });
});

module.exports = router;
