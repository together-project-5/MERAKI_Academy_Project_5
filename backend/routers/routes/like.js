const express = require("express");
const {
    createLike,
    deleteUserLike,
    getLikePost
} = require("../controllers/like");
const postRouter = express.Router();