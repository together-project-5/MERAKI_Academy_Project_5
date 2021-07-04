const express = require("express");
const {
    createLike,
    deleteUserLike,
    getLikePost
} = require("../controllers/like");

const likeRouter = express.Router();

likeRouter.post("/create/like", createLike);
likeRouter.post("/user/like", getLikePost);
likeRouter.delete("/user/like", deleteUserLike);

module.exports = likeRouter;