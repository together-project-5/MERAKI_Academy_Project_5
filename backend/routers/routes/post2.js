const express = require('express');

const { getPostById } = require('./../../routers/controllers/post2');

const postByIdRouter = express.Router();

userRouter.get('/:id', getPostById);

module.exports = postByIdRouter;