const express = require("express");
const {
    createLike,
    deleteUserLike,
    getLikePost
} = require("../controllers/like");

const likeRouter = express.Router();

likeRouter.post("/create/like", createLike);
likeRouter.get("/user/like/:userId/:postId", getLikePost);
likeRouter.delete("/user/like/:userId/:postId", deleteUserLike);

module.exports = likeRouter;