const express = require('express');

const { getPostById, getPostByTitle,deletePost } = require('./../../routers/controllers/post2');

const postRouter = express.Router();

postRouter.get('/post/id/:id', getPostById);
postRouter.get('/post/title/:title', getPostByTitle);
postRouter.delete('/post/:id', deletePost);
module.exports = postRouter;