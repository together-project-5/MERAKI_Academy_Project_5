const express = require("express");

const {
    insertFavorite,
} = require("./../../routers/controllers/favorite");

const favoriteRouter = express.Router();

favoriteRouter.post("/post",insertFavorite);

module.exports = favoriteRouter;
