const express = require('express');

const { createPost ,getAllPost,getPostById, getPostByTitle,deletePost} = require('./../../routers/controllers/post');

const postRouter = express.Router();

postRouter.post('/create', createPost);
postRouter.get('/', getAllPost);
postRouter.get('/:id', getPostById);
postRouter.get('/:title', getPostByTitle);
postRouter.delete('/:id', deletePost);

module.exports = postRouter;