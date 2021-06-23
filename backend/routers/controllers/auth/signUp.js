const db = require('./../../../db/db');
const bcrypt = require("bcrypt");
const salt = Number(process.env.SALT);

const createUser = async (req, res) => {
    const query = `INSERT INTO user (name ,email,password,age,gender) VALUES (?,?,?,?,?)`;
    let { name, email, password, age, gender } = req.body
    //bcrypt.hash(this.password, process.env.SALT);
    password = await bcrypt.hash(password, salt)
    email = await email.toLowerCase()
    db.query(query, [name, email, password, age, gender], (err, res) => {
        if (err) throw err;
        console.log(res);
    });
};

module.exports = {
    createUser
};
