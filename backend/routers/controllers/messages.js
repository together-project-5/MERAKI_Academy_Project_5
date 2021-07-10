const db = require("./../../db/db");

const savedMessage = (req, res) => {
    const query = `INSERT INTO messages (messageText) VALUES (?)`;
    let { messageText } = req.body;
    const data = [messageText];
    db.query(query, data, (err, result) => {
        if (err) return res.status(400).send("Cant save message");
        res.status(200).json(result);
    });
}
module.exports = {
    savedMessage,
}