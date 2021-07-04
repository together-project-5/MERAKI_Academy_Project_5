const express = require("express");
const {
    createLike,
    deleteUserLike,
    getLikePost
} = require("../controllers/like");

const likeRouter = express.Router();

likeRouter.post("/user/like", createLike);