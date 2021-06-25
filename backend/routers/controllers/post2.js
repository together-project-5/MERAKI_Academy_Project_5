const db = require('./../../db/db');
const express = require('express');
const app =express()


const getPostById = async (req, res) => {
    const id = req.params.id;
    const query = `SELECT * FROM post WHERE _IdPost = ?`;
    const data = [id];
    db.query(query,data, (err, result) => {
        if (err) throw err;
        res.json(result).status(200)
    });
};
const getPostByTitle = async (req, res) => {
    const title = req.params.title;
    const query = `SELECT * FROM post WHERE title = ?`;
    const data = [title];
    db.query(query,data, (err, result) => {
        if (err) throw err;
        res.json(result).status(200)
    });
};
const deletePost = async (req, res) => {
    const id = req.params.id;
    const query = `DELETE FROM post WHERE _IdPost = ?`;
    const data = [id];
    db.query(query,data, (err, result) => {
        if (err) throw err;
        res.json("succes deleted").status(200)
    });
};


module.exports = {
    getPostById,
    getPostByTitle ,
    deletePost
};