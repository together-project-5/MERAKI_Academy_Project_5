const express = require("express");

const {
    insertFavorite,
    getFavoritePost,
    deleteFavoritePost
} = require("./../../routers/controllers/favorite");

const favoriteRouter = express.Router();

favoriteRouter.post("/post", insertFavorite);
favoriteRouter.get("/post/:id", getFavoritePost);
favoriteRouter.delete("/post/:id", deleteFavoritePost);

module.exports = favoriteRouter;
