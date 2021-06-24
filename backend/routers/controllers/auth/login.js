const jwt = require('jsonwebtoken');
const db = require("./../../../db/db")

const login = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const query = `SELECT * FROM user WHERE email = ? ;`
  const data = [email];

  db.query(query, data, (err, result) => {
    if (!result[0]) {
      return res.status(404).json("the email dosnt exist");
    }
    const confirm = bcrypt.compare(password, result[0].password);
    if (confirm) {
      const payload = {
        name: result[0].name,
        password: result[0].password,
      };
      const options = {
        expiresIn: '1d',
      };
      res.status(200).json({ token: jwt.sign(payload, process.env.SECRET, options), message: "valid login", user: result[0] });
    }
    else { res.json('The password is not correct').status(403) }
  });
}

module.exports = {
  login,
};
