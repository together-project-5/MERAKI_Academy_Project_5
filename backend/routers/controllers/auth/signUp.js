const db = require('./../../../db/db');
const bcrypt = require("bcrypt");
const salt = Number(process.env.SALT);

const createUser = async (req, res) => {
    const query = `INSERT INTO user (name ,email,password,age,gender) VALUES (?,?,?,?,?)`;
    let { name, email, password, age, gender } = req.body
    password = await bcrypt.hash(password, salt)
    email = await email.toLowerCase()
    db.query(query, [name, email, password, age, gender], (err, result) => {
        if (err) throw err;
        res.json(result).status(201)
    });
};

module.exports = {
    createUser
};
