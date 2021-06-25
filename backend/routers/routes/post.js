const express = require('express');

const { createPost ,getAllPost} = require('./../../routers/controllers/post');

const postRouter = express.Router();

postRouter.post('/create', createPost);
postRouter.get('/', getAllPost);

module.exports = postRouter;