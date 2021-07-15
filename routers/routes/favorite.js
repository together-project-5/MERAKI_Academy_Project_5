const express = require("express");

const {
    getFavoritePost,
} = require("./../../routers/controllers/favorite");

const favoriteRouter = express.Router();

favoriteRouter.get("/post/:id", getFavoritePost);

module.exports = favoriteRouter;
