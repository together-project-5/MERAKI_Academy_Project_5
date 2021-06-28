const express = require("express");

const {
    insertFavorite,
    getFavoritePost
} = require("./../../routers/controllers/favorite");

const favoriteRouter = express.Router();

favoriteRouter.post("/post",insertFavorite);
favoriteRouter.get("/post/:id",getFavoritePost);

module.exports = favoriteRouter;
