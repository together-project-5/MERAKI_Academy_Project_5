const express = require('express');

const { getPostById, getPostByTitle } = require('./../../routers/controllers/post2');

const postRouter = express.Router();

postRouter.get('/post/id/:id', getPostById);
postRouter.get('/post/title/:title', getPostByTitle);
module.exports = postRouter;