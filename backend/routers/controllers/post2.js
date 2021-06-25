const db = require('./../../db/db');
const express = require('express');
const app =express()


const getPostById = async (req, res) => {
    const id = req.params.id;
    const query = `SELECT * FROM post WHERE id = ?`;
    const data = [id];
    db.query(query,data, (err, result) => {
        if (err) throw err;
        res.json(result).status(200)
    });
};

module.exports = {
    getPostById
};