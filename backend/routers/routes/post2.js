const express = require('express');

const { getPostById } = require('./../../routers/controllers/post2');

const postRouter = express.Router();

postRouter.get('/post/:id', getPostById);

module.exports = postRouter;