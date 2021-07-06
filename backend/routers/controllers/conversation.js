const db = require("./../../db/db");

const newConversation = (req, res) => {
    const query = `INSERT INTO conversation (senderId,receiverId) VALUES (?,?)`;
    let { senderId, receiverId } = req.body;
    const data = [senderId, receiverId];
    db.query(query, data, (err, result) => {
        if (err) return res.status(400).send("Cant added");
        res.status(200).json(result);
    });
}

const getUsers = (req, res) => {
    const id = req.params.id
    const query = `SELECT * FROM conversation WHERE senderId=${id} OR receiverId=${id}`;
    db.query(query, (err, result) => {
        if (err) return res.status(400).send("Cant get data");
        res.status(200).json(result);
    });
}

module.exports = {
    newConversation,
    getUsers
}