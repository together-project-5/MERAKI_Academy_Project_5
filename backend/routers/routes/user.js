const express = require('express');

const { getAllUser } = require('./../../routers/controllers/user');

const userRouter = express.Router();

userRouter.get('/', getAllUser);

module.exports = userRouter;